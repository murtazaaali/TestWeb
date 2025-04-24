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
  height: 'auto',
  background: '#ffffff',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  padding: theme.spacing(4),
  maxWidth: '500px',
  margin: '0 auto',
  border: 'none',
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
    borderRadius: theme.spacing(1),
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    border: '1px solid #e2e8f0',
    width: '100%',
    marginTop: '8px',
    '&:hover': {
      borderColor: '#2E1F47',
    },
    '&.Mui-focused': {
      backgroundColor: '#ffffff',
      borderColor: '#2E1F47',
      boxShadow: '0 0 0 1px #2E1F47',
    },
    '&.Mui-error': {
      borderColor: '#ef4444',
      boxShadow: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  '& .MuiInputLabel-root': {
    position: 'relative',
    transform: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: '#1E293B',
    marginBottom: '4px',
    '&.MuiInputLabel-shrink': {
      transform: 'none',
      backgroundColor: 'transparent',
      padding: 0,
    },
    '&.Mui-focused': {
      color: '#2E1F47',
    },
    '&.Mui-error': {
      color: '#ef4444',
    },
    '& .MuiFormLabel-asterisk': {
      color: '#ef4444',
      marginLeft: '2px',
    }
  },
  '& .MuiOutlinedInput-input': {
    padding: '12px 16px',
    fontSize: '0.9rem',
    color: '#1E293B',
    '&::placeholder': {
      color: '#94a3b8',
      opacity: 1,
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: '4px',
    marginTop: '4px',
    color: '#ef4444',
    fontSize: '0.75rem',
  },
})));

const SubmitButton = memo(styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  padding: '12px 0',
  fontSize: '1rem',
  fontWeight: 500,
  textTransform: 'none',
  backgroundColor: '#2E1F47',
  color: '#ffffff',
  boxShadow: 'none',
  transition: 'all 0.3s ease',
  width: '100%',
  marginTop: theme.spacing(3),
  '&:hover': {
    backgroundColor: '#443365',
    color: '#ffffff',
  },
  '& .MuiButton-label': {
    color: '#ffffff',
  }
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
      py: 6,
      background: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.75rem', md: '2rem' },
              color: '#2E1F47',
              mb: 2,
            }}
          >
            Book a Demo
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '500px', 
              mx: 'auto',
              color: '#64748B',
              fontSize: '1rem',
              lineHeight: 1.5,
              mb: 4,
            }}
          >
            Experience the power of our solutions firsthand
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <ContactCard>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <StyledTextField
                      fullWidth
                      required
                      name="name"
                      label="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                        required: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <StyledTextField
                      fullWidth
                      required
                      name="email"
                      type="email"
                      label="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                        required: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <StyledTextField
                      fullWidth
                      required
                      name="whatsapp"
                      label="WhatsApp Number"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      error={!!errors.whatsapp}
                      helperText={errors.whatsapp}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                        required: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <StyledTextField
                      fullWidth
                      required
                      select
                      name="product"
                      label="Interested Product"
                      value={formData.product}
                      onChange={handleChange}
                      error={!!errors.product}
                      helperText={errors.product}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                        required: true,
                      }}
                      SelectProps={{
                        displayEmpty: true,
                        renderValue: (value) => value || "Choose a service",
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
                  width: '100%',
                }}>
                  <SubmitButton
                    type="submit"
                    variant="contained"
                    size="large"
                  >
                    Book Demo
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