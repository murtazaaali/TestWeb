import React, { useState, useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  MenuItem,
  styled,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    background: 'linear-gradient(135deg, #ffffff 0%, #F9F7FC 100%)',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const products = [
  'WhatsApp Marketing',
  'Lead Generation',
  'CRM System',
  'Automation Tools',
  'Custom Solutions',
];

const BookDemo = ({ open, onClose }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    product: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recaptchaValue) {
      setSnackbar({
        open: true,
        message: 'Please complete the reCAPTCHA verification',
        severity: 'error'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const templateParams = {
        to_name: "AAIT Team",
        to_email: "info@aaitsolu.com",
        from_name: formData.name,
        from_email: formData.email,
        whatsapp: formData.whatsapp,
        product: formData.product,
        message: `New demo request from website:
Name: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Interested Product: ${formData.product}`,
        g_recaptcha_response: recaptchaValue
      };

      await emailjs.send(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        templateParams
      );

      setSnackbar({
        open: true,
        message: 'Thank you! We will contact you shortly to schedule your demo.',
        severity: 'success'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        product: '',
      });
      setRecaptchaValue(null);

      // Close dialog after a short delay
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send request. Please try again or contact us directly.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <StyledDialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <DialogTitle>
            <Typography variant="h4" sx={{ 
              textAlign: 'center',
              fontWeight: 600,
              color: '#2E1F47',
              mb: 1
            }}>
              Book a Demo
            </Typography>
            <Typography variant="subtitle1" sx={{ 
              textAlign: 'center',
              color: 'text.secondary'
            }}>
              Experience the power of our solutions firsthand
            </Typography>
          </DialogTitle>

          <DialogContent>
            <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                  Name <span style={{ color: '#E91E63' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#fff',
                    }
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                  Email <span style={{ color: '#E91E63' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#fff',
                    }
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                  WhatsApp <span style={{ color: '#E91E63' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="Your WhatsApp number"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#fff',
                    }
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                  Interested Product <span style={{ color: '#E91E63' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: '#fff',
                    }
                  }}
                >
                  {products.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              <Box sx={{ mb: 3 }}>
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={handleRecaptchaChange}
                />
              </Box>

              <DialogActions sx={{ px: 0, pb: 0 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  disabled={isSubmitting || !recaptchaValue}
                  sx={{
                    py: 2,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    background: 'linear-gradient(135deg, #2E1F47 0%, #443365 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #443365 0%, #2E1F47 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 20px rgba(46, 31, 71, 0.3)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Book Demo'}
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </Box>
      </StyledDialog>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default BookDemo; 