import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Button, 
  Container, 
  Box, 
  Stack,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ onBookDemo }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'black'
      }}
    >
      {/* Video Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
            zIndex: 1
          }
        }}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          onLoadedData={handleVideoLoad}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in'
          }}
        >
          <source src="/Assets/Video 1.mp4" type="video/mp4" />
        </video>
      </Box>

      {/* Main Content */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          pt: { xs: '160px', sm: '180px', md: '200px' },
          pb: { xs: 6, sm: 8, md: 10 },
          px: { xs: 2, sm: 3, md: 4 },
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2rem',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            AI Driven CRM For
          </motion.h2>

          <Box 
            sx={{ 
              width: '100%',
              marginBottom: '2rem'
            }}
          >
            <TypeAnimation
              sequence={[
                'Lead Management',
                2000,
                'Lead Qualification',
                2000,
                'Social Media',
                2000,
                'Support Services',
                2000,
              ]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
              style={{ 
                fontSize: '80px',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.2,
                letterSpacing: '3px',
                margin: 0,
                padding: 0,
                display: 'block',
                wordBreak: 'break-word',
                '@media (max-width: 768px)': {
                  fontSize: '50px',
                  letterSpacing: '2px'
                },
                '@media (max-width: 480px)': {
                  fontSize: '40px',
                  letterSpacing: '1.5px'
                }
              }}
            />
          </Box>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              lineHeight: 1.6,
              padding: '0 1rem'
            }}
          >
            Optimize your customer lifecycle, enhance team productivity, and unlock data-driven insights with AAIT's AI-powered CRM automation suite.
            Book your industry-tailored demo today.
          </motion.p>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4, width: '100%', maxWidth: '600px', mx: 'auto' }}
          >
            <Button
              variant="contained"
              onClick={onBookDemo}
              sx={{
                background: 'linear-gradient(135deg, #2E1F47 0%, #443365 100%)',
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 500,
                color: 'white',
                flex: { xs: '1', sm: 'initial' },
                '&:hover': {
                  background: 'linear-gradient(135deg, #443365 0%, #2E1F47 100%)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out',
                textTransform: 'none'
              }}
            >
              Book Demo
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: { xs: 3, sm: 4 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 500,
                flex: { xs: '1', sm: 'initial' },
                '&:hover': {
                  borderColor: 'white',
                  background: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out',
                textTransform: 'none'
              }}
            >
              Watch Now
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;