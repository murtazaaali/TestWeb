import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // You can log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
                px: 4,
                borderRadius: 4,
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '4rem', md: '6rem' },
                  fontWeight: 700,
                  color: '#2E1F47',
                  mb: 2,
                }}
              >
                Oops!
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  color: '#475569',
                  fontWeight: 500,
                }}
              >
                Something went wrong
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 6,
                  color: '#64748B',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                {this.state.error?.message || "An unexpected error occurred"}
              </Typography>

              <Button
                variant="contained"
                onClick={() => window.location.reload()}
                sx={{
                  backgroundColor: '#2E1F47',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#443365',
                  },
                }}
              >
                Refresh Page
              </Button>
            </Box>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 