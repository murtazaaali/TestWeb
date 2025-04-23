import React from 'react';
import { Box, Typography, Container, Card, Grid } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import TimelineIcon from '@mui/icons-material/Timeline';
import ContactsIcon from '@mui/icons-material/Contacts';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <NoteAddIcon sx={{ fontSize: 24 }} />,
      title: 'Customized Solutions',
      iconBg: 'rgba(46, 31, 71, 0.08)',
      hoverBg: '#2E1F47'
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 24 }} />,
      title: 'AI Integrations',
      iconBg: 'rgba(46, 31, 71, 0.08)',
      hoverBg: '#2E1F47'
    },
    {
      icon: <ContactsIcon sx={{ fontSize: 24 }} />,
      title: 'End-to-End Solutions',
      iconBg: 'rgba(46, 31, 71, 0.08)',
      hoverBg: '#2E1F47'
    }
  ];

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, sm: 10, md: 15 },
        background: '#ffffff',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            mb: { xs: 6, sm: 8, md: 12 }
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(46, 31, 71, 0.08)',
              borderRadius: '50px',
              width: 'auto',
              px: { xs: 3, sm: 4 },
              py: { xs: 0.75, sm: 1 },
              mb: { xs: 4, sm: 5, md: 6 },
              minWidth: '120px',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
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
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 500,
                transition: 'color 0.3s ease-in-out'
              }}
            >
              Benefits
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
              fontWeight: 400,
              mb: { xs: 3, sm: 4 },
              color: '#1A202C',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              maxWidth: '900px',
              px: { xs: 2, sm: 0 }
            }}
          >
            Why Choose Us
          </Typography>

          <Typography
            sx={{
              color: '#64748b',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
              maxWidth: '800px',
              lineHeight: 1.6,
              textAlign: 'center',
              mb: { xs: 6, sm: 8, md: 12 },
              px: { xs: 2, sm: 0 }
            }}
          >
            Being in the industry for over many years now, we have team of experts who can work under your brand to develop your projects.
          </Typography>

          <Grid 
            container 
            spacing={{ xs: 2, sm: 3 }}
            justifyContent="center"
            sx={{
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    width: { xs: '100%', sm: '280px' },
                    height: { xs: '70px', sm: '80px' },
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '16px',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    backgroundColor: '#F8FAFC',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: 'none',
                    px: { xs: 2, sm: 3 },
                    mx: 'auto',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: feature.hoverBg,
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      zIndex: 0
                    },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                      '&::before': {
                        opacity: 0.05
                      },
                      '& .icon-box': {
                        backgroundColor: feature.hoverBg,
                        transform: 'scale(1.1)',
                        '& svg': {
                          color: '#ffffff !important'
                        }
                      },
                      '& .card-title': {
                        color: feature.hoverBg,
                        transform: 'translateX(4px)'
                      }
                    }
                  }}
                >
                  <Box
                    className="icon-box"
                    sx={{
                      width: { xs: 30, sm: 36 },
                      height: { xs: 30, sm: 36 },
                      borderRadius: { xs: '8px', sm: '10px' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: feature.iconBg,
                      mr: { xs: 2, sm: 2.5 },
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 1,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '& svg': {
                        color: feature.hoverBg,
                        transition: 'color 0.3s ease-in-out',
                        fontSize: { xs: '20px', sm: '24px' }
                      }
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    className="card-title"
                    variant="subtitle1"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: '0.9rem', sm: '0.975rem' },
                      color: '#1E293B',
                      lineHeight: 1.2,
                      position: 'relative',
                      zIndex: 1,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs; 