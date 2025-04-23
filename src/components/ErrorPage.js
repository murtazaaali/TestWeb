import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const getErrorMessage = () => {
    if (error?.status === 404) {
      return "The page you're looking for doesn't exist.";
    } else if (error?.status === 500) {
      return "Internal server error. We're working on fixing this.";
    }
    return "Something went wrong. Please try again later.";
  };

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
            {error?.status || 'Oops!'}
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              color: '#475569',
              fontWeight: 500,
            }}
          >
            {getErrorMessage()}
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
            {error?.data?.message || error?.message}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate('/')}
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
              Back to Home
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate(-1)}
              sx={{
                borderColor: '#2E1F47',
                color: '#2E1F47',
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontSize: '1.1rem',
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#443365',
                  backgroundColor: 'rgba(46, 31, 71, 0.04)',
                },
              }}
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ErrorPage; 