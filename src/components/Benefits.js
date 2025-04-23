import React from 'react';
import { Box, Typography, Container, Card, Paper } from '@mui/material';
import { keyframes } from '@mui/system';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CampaignIcon from '@mui/icons-material/Campaign';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Benefits = () => {
  const features = [
    {
      icon: <AutoGraphIcon sx={{ fontSize: 40 }} />,
      text: 'Automate Lead Qualification',
      description: 'AI-driven qualification process that accurately scores and segments leads'
    },
    {
      icon: <PeopleAltIcon sx={{ fontSize: 40 }} />,
      text: 'Automate Lead Assignment',
      description: 'Smart distribution system that matches leads with the right sales representatives'
    },
    {
      icon: <CampaignIcon sx={{ fontSize: 40 }} />,
      text: 'Automate Lead Follow-ups',
      description: 'Automated follow-up sequences that ensure no lead falls through the cracks'
    }
  ];

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 8, md: 16 },
          py: { xs: 8, md: 12 },
          position: 'relative'
        }}
      >
        {/* Left - Image with Material Design */}
        <Box 
          sx={{ 
            width: '100%',
            maxWidth: { xs: '100%', md: '55%' },
            animation: `${fadeIn} 0.6s ease-out`
          }}
        >
          <Card
            elevation={0}
            sx={{
              position: 'relative',
              overflow: 'visible',
              background: 'transparent'
            }}
          >
            <Paper
              elevation={4}
              sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                width: '100%',
                height: '100%',
                borderRadius: 4,
                background: 'linear-gradient(135deg, #4169E1 0%, #1A237E 100%)',
                opacity: 0.1,
                zIndex: 0
              }}
            />
            <Paper
              elevation={2}
              sx={{
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden',
                borderRadius: 4,
                background: '#ffffff',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #4169E1 0%, #1A237E 100%)'
                }
              }}
            >
              <Box
                component="img"
                src="/Assets/AnalyticsDashboard.png"
                alt="Dashboard Preview"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transform: 'translateY(0)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              />
            </Paper>
          </Card>
        </Box>

        {/* Right - Text */}
        <Box 
          sx={{ 
            width: '100%',
            maxWidth: { xs: '100%', md: '45%' },
            animation: `${fadeIn} 0.6s ease-out 0.2s`,
            animationFillMode: 'backwards'
          }}
        >
          <Paper
            elevation={0}
            sx={{
              backgroundColor: 'rgba(46, 31, 71, 0.08)',
              borderRadius: '50px',
              width: 'auto',
              px: 4,
              py: 1,
              mb: 6,
              minWidth: '120px',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              display: 'inline-block',
              '&:hover': {
                backgroundColor: '#2E1F47',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(46, 31, 71, 0.2)',
                '& .benefits-text': {
                  color: '#ffffff'
                }
              }
            }}
          >
            <Typography
              className="benefits-text"
              sx={{
                color: '#2E1F47',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'color 0.3s ease-in-out',
                textAlign: 'center'
              }}
            >
              Automation
            </Typography>
          </Paper>

          <Typography
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              color: '#333',
              mt: 3,
              mb: 1,
              fontWeight: 400
            }}
          >
            It's time to
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 400,
              color: '#000000',
              mb: 3,
              lineHeight: 1.2,
              letterSpacing: '-0.02em'
            }}
          >
            Effortlessly Manage Your Leads
          </Typography>

          <Typography
            sx={{
              color: '#666',
              fontSize: '1.125rem',
              mb: 6,
              lineHeight: 1.6,
              '& strong': {
                color: '#333',
                fontWeight: 600
              }
            }}
          >
            <strong>AAIT CRM</strong> provides robust and AI Driven solutions to
            not only collect the leads but also qualify them before it becomes part of
            your process.
          </Typography>

          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            {features.map((feature, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  background: 'linear-gradient(90deg, rgba(46, 31, 71, 0.03) 0%, rgba(46, 31, 71, 0) 100%)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, rgba(46, 31, 71, 0.08) 0%, rgba(46, 31, 71, 0.02) 100%)',
                    transform: 'translateX(10px)',
                    '& .feature-icon': {
                      background: '#2E1F47',
                      transform: 'rotate(10deg)',
                      '& svg': {
                        color: '#ffffff',
                        transform: 'rotate(-10deg)'
                      }
                    },
                    '& .feature-text': {
                      color: '#2E1F47'
                    }
                  }
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    width: 64,
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                    backgroundColor: 'rgba(46, 31, 71, 0.08)',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    '& svg': {
                      color: '#2E1F47',
                      transition: 'all 0.3s ease-in-out'
                    }
                  }}
                >
                  {feature.icon}
                </Box>
                <Box>
                  <Typography
                    className="feature-text"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: '#1A202C',
                      transition: 'all 0.3s ease-in-out',
                      mb: 0.5
                    }}
                  >
                    {feature.text}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#666',
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Benefits; 