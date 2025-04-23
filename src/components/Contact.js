import React, { useState, useCallback, memo } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Card,
  styled,
  InputLabel,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery
} from '@mui/material';
import emailjs from '@emailjs/browser';

// Memoized styled components
const ContactCard = memo(styled(Card)(({ theme }) => ({
  height: '100%',
  background: '#ffffff',
  boxShadow: 'none',
  borderRadius: theme.spacing(3),
  transition: 'all 0.3s ease-in-out',
  padding: theme.spacing(6),
  maxWidth: '600px',
  margin: '0 auto',
  border: '1px solid #eef2f6',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
})));

const StyledInputLabel = memo(styled(InputLabel)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: '#000',
  fontWeight: 500,
  '& .required': {
    color: '#E91E63',
    marginLeft: '4px',
  },
})));

const StyledTextField = memo(styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(3),
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    border: '1px solid #e2e8f0',
    maxWidth: '450px',
    margin: '0 auto',
    '&:hover': {
      borderColor: '#2E1F47',
      backgroundColor: '#f8fafc',
    },
    '&.Mui-focused': {
      backgroundColor: '#ffffff',
      borderColor: '#2E1F47',
    },
    '&.Mui-error': {
      borderColor: '#ef4444',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#94a3b8',
    transform: 'translate(14px, -12px) scale(0.75)',
    backgroundColor: '#ffffff',
    padding: '0 8px',
    '&.Mui-focused': {
      color: '#2E1F47',
    },
    '&.Mui-error': {
      color: '#ef4444',
    },
    '& .required': {
      color: '#ef4444',
      marginLeft: '2px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '16px 20px',
    fontSize: '1rem',
    color: '#475569',
    '&::placeholder': {
      color: '#94a3b8',
      opacity: 1,
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: '20px',
    color: '#ef4444',
  },
})));

const SubmitButton = memo(styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: '16px 48px',
  fontSize: '1.1rem',
  fontWeight: 500,
  textTransform: 'none',
  backgroundColor: '#2E1F47',
  boxShadow: 'none',
  transition: 'all 0.3s ease',
  marginTop: theme.spacing(6),
  '&:hover': {
    backgroundColor: '#443365',
    boxShadow: '0 6px 20px rgba(46, 31, 71, 0.2)',
    transform: 'translateY(-2px)',
  },
})));

// Memoize the products array
const products = [
  'WhatsApp Marketing',
  'Lead Generation',
  'CRM System',
];

const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    product: '',
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    whatsapp: '',
    product: '',
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        } else if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          return 'Email is required';
        } else if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      
      case 'whatsapp':
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!value) {
          return 'WhatsApp number is required';
        } else if (!phoneRegex.test(value)) {
          return 'Please enter a valid phone number';
        }
        break;
      
      case 'product':
        if (!value) {
          return 'Please select a service';
        }
        break;
      
      default:
        return '';
    }
    return '';
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate field on change
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate all fields
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        isValid = false;
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSnackbar({ 
        open: true, 
        message: 'Please fill all required fields correctly', 
        severity: 'error' 
      });
      return;
    }

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      
      setSnackbar({ open: true, message: 'Message sent successfully!', severity: 'success' });
      setFormData({ name: '', email: '', whatsapp: '', product: '' });
      setErrors({ name: '', email: '', whatsapp: '', product: '' }); // Clear errors on success
    } catch (error) {
      console.error('Error:', error);
      setSnackbar({ 
        open: true, 
        message: 'Failed to send message. Please try again.', 
        severity: 'error' 
      });
    }
  }, [formData, validateForm]);

  const handleSnackbarClose = useCallback(() => {
    setSnackbar(prev => ({ ...prev, open: false }));
  }, []);

  return (
    <Box component="section" id="contact" sx={{ 
      py: 12,
      background: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #2E1F47 0%, #443365 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
            }}
          >
            Contact our Sales Team!
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: '600px', 
              mx: 'auto',
              color: '#64748B',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              mb: 6,
            }}
          >
            If you have inquiry about the product feel free to contact.
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={10}>
            <ContactCard>
              <form onSubmit={handleSubmit}>
                <Grid 
                  container 
                  spacing={4} 
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <StyledTextField
                      fullWidth
                      required
                      name="name"
                      label="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      error={!!errors.name}
                      helperText={errors.name}
                      InputLabelProps={{ 
                        shrink: true,
                        required: true
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <StyledTextField
                      fullWidth
                      required
                      name="email"
                      type="email"
                      label="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      error={!!errors.email}
                      helperText={errors.email}
                      InputLabelProps={{ 
                        shrink: true,
                        required: true
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <StyledTextField
                      fullWidth
                      required
                      name="whatsapp"
                      label="WhatsApp *"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Enter your WhatsApp number"
                      error={!!errors.whatsapp}
                      helperText={errors.whatsapp}
                      InputLabelProps={{ 
                        shrink: true,
                        required: true
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <StyledTextField
                      fullWidth
                      required
                      select
                      name="product"
                      label="Interested Service *"
                      value={formData.product}
                      onChange={handleChange}
                      error={!!errors.product}
                      helperText={errors.product}
                      InputLabelProps={{ 
                        shrink: true,
                        required: true
                      }}
                      SelectProps={{
                        displayEmpty: true,
                        renderValue: (value) => value || "Select a service",
                        MenuProps: {
                          PaperProps: {
                            sx: {
                              maxHeight: 300,
                              borderRadius: 2,
                              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                              '& .MuiMenuItem-root': {
                                py: 1.5,
                                px: 3,
                                color: '#475569',
                                '&:hover': {
                                  backgroundColor: '#f8fafc',
                                },
                              },
                            },
                          },
                        },
                      }}
                    >
                      {products.map((product) => (
                        <MenuItem 
                          key={product} 
                          value={product}
                        >
                          {product}
                        </MenuItem>
                      ))}
                    </StyledTextField>
                  </Grid>
                </Grid>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  mt: 6 
                }}>
                  <SubmitButton
                    type="submit"
                    variant="contained"
                    size="large"
                  >
                    Send Message
                  </SubmitButton>
                </Box>
              </form>
            </ContactCard>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ 
            width: '100%',
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
});

export default Contact;