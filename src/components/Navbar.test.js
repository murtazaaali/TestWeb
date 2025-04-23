import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    // Reset window scroll position
    window.scrollY = 0;
    // Mock window.scrollTo
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    cleanup();
  });

  test('renders logo and navigation links', () => {
    render(<Navbar />);
    
    expect(screen.getByAltText('AAIT Solutions Logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('toggles mobile menu when menu button is clicked', () => {
    render(<Navbar />);
    
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    
    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByText('Solutions')).toBeVisible();
    expect(screen.getByText('About')).toBeVisible();
    expect(screen.getByText('Contact')).toBeVisible();
    
    fireEvent.click(menuButton);
    expect(screen.queryByText('Home')).not.toBeVisible();
  });

  test('closes mobile menu when clicking outside', () => {
    render(<Navbar />);
    
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    
    expect(screen.getByText('Home')).toBeVisible();
    
    fireEvent.click(document.body);
    expect(screen.queryByText('Home')).not.toBeVisible();
  });

  test('navigates to correct sections when clicking links', () => {
    render(<Navbar />);
    
    const solutionsLink = screen.getByText('Solutions');
    fireEvent.click(solutionsLink);
    
    expect(window.scrollTo).toHaveBeenCalled();
    
    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);
    
    expect(window.scrollTo).toHaveBeenCalled();
    
    const contactLink = screen.getByText('Contact');
    fireEvent.click(contactLink);
    
    expect(window.scrollTo).toHaveBeenCalled();
  });

  test('changes background color on scroll', () => {
    render(<Navbar />);
    
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveStyle({ backgroundColor: 'transparent' });
    
    // Simulate scroll
    window.scrollY = 100;
    fireEvent.scroll(window);
    
    expect(navbar).toHaveStyle({ backgroundColor: 'rgba(255, 255, 255, 0.95)' });
  });
}); 