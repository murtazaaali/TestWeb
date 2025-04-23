import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import Contact from './Contact';
import emailjs from '@emailjs/browser';

describe('Contact Component', () => {
  beforeEach(() => {
    // Reset EmailJS mock
    emailjs.send.mockClear();
    // Mock window.scrollTo
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    cleanup();
  });

  test('renders contact form with all fields', () => {
    render(<Contact />);
    
    expect(screen.getByText('Contact our Sales Team!')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument();
    expect(screen.getByLabelText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByLabelText('Interested Product')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('validates required fields', async () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText('Please complete the reCAPTCHA')).toBeInTheDocument();
  });

  test('validates email format', async () => {
    render(<Contact />);
    
    const emailInput = screen.getByLabelText('Your Email');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText('Please complete the reCAPTCHA')).toBeInTheDocument();
  });

  test('submits form successfully', async () => {
    render(<Contact />);
    
    // Fill in the form
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Your Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('WhatsApp'), { target: { value: '+1234567890' } });
    fireEvent.change(screen.getByLabelText('Interested Product'), { target: { value: 'CRM System' } });

    // Click ReCAPTCHA
    fireEvent.click(screen.getByTestId('mock-recaptcha'));

    // Submit form
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledTimes(1);
      expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
    });
  });

  test('handles form submission error', async () => {
    // Mock emailjs.send to reject
    emailjs.send.mockRejectedValueOnce(new Error('Failed to send email'));

    render(<Contact />);
    
    // Fill in the form
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Your Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('WhatsApp'), { target: { value: '+1234567890' } });
    fireEvent.change(screen.getByLabelText('Interested Product'), { target: { value: 'CRM System' } });

    // Click ReCAPTCHA
    fireEvent.click(screen.getByTestId('mock-recaptcha'));

    // Submit form
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Failed to send message. Please try again.')).toBeInTheDocument();
    });
  });

  test('displays contact information correctly', () => {
    render(<Contact />);
    
    expect(screen.getByText('Our Location')).toBeInTheDocument();
    expect(screen.getByText('Email Us')).toBeInTheDocument();
    expect(screen.getByText('Call Us')).toBeInTheDocument();
    
    expect(screen.getByText('API TOWER SHEIKH ZAID ROAD TRADE CENTRE,DUBAI,UAE')).toBeInTheDocument();
    expect(screen.getByText('info@aaitsolu.com')).toBeInTheDocument();
    expect(screen.getByText('+(971) 052 875 0537')).toBeInTheDocument();
  });
}); 