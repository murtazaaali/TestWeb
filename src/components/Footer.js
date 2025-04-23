import React from 'react';
import { Container, Grid, Link, Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

// Modern Social Icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
  </svg>
);

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255,255,255,0.7)',
  width: '45px',
  height: '45px',
  background: 'rgba(255,255,255,0.05)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    color: '#7ca0da',
    background: 'rgba(255,255,255,0.1)',
    transform: 'translateY(-5px)',
    boxShadow: '0 5px 15px rgba(124, 160, 218, 0.2)',
  },
  '&:active': {
    transform: 'translateY(-2px)',
  }
}));

// Modern Contact Icons
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);

const EmailIconModern = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIconModern = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.8-3.9-8.7-8.7-8.7v2c3.7 0 6.7 3 6.7 6.7z"/>
  </svg>
);

const ContactIconWrapper = styled(Box)(({ theme }) => ({
  width: '42px',
  height: '42px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255,255,255,0.05)',
  color: '#ffffff',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: 'rgba(255,255,255,0.1)',
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 5px 15px rgba(255, 255, 255, 0.1)',
  }
}));

const footerSections = [
  {
    title: 'Company',
    links: ['About us', 'Services', 'Team', 'Projects', 'Blog'],
  },
  {
    title: 'Features',
    links: ['Chat GPT', 'Whatsapp Integrations', 'API Integrations', 'Automations'],
  },
  {
    title: 'Documentation',
    links: ['Support', 'Docs', 'Changelog', 'Components'],
  },
  {
    title: 'Usefull Links',
    links: ['Terms Policy', 'Privacy Policy'],
  },
];

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      bgcolor: '#121212',
      color: 'white',
      pt: 8,
      pb: 4
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Contact Info */}
          <Grid item xs={12} md={4} sx={{ mb: { xs: 4, md: 0 } }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              mb: 4 
            }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: { xs: 'center', md: 'flex-start' },
                width: '100%'
              }}>
                <img 
                  src="/Assets/logo.png" 
                  alt="AAIT Logo" 
                  style={{ 
                    height: '80px',
                    marginBottom: '20px',
                    filter: 'brightness(1.1)',
                  }}
                />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#ffffff',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    fontSize: '2rem',
                    mb: 3,
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  AAIT
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3,
              alignItems: { xs: 'center', md: 'flex-start' },
              width: '100%'
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                width: '100%',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <ContactIconWrapper>
                  <LocationIcon />
                </ContactIconWrapper>
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#ffffff' },
                  textAlign: { xs: 'center', md: 'left' },
                  flex: 1
                }}>
                  API TOWER SHEIKH ZAID ROAD 
                  TRADE CENTRE,DUBAI,UAE
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                width: '100%',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <ContactIconWrapper>
                  <EmailIconModern />
                </ContactIconWrapper>
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#ffffff' },
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  info@aaitsolu.com
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                width: '100%',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <ContactIconWrapper>
                  <PhoneIconModern />
                </ContactIconWrapper>
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#ffffff' },
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  +(971) 052 875 0537
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <Grid item xs={6} sm={3} md={2} key={index}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' }
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    mb: 3,
                    color: '#ffffff',
                    position: 'relative',
                    display: 'inline-block',
                    textAlign: { xs: 'center', md: 'left' },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-8px',
                      left: { xs: '50%', md: '0' },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      width: '40px',
                      height: '2px',
                      background: 'rgba(255,255,255,0.2)',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                      background: '#ffffff',
                    }
                  }}
                >
                  {section.title}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 2,
                  alignItems: { xs: 'center', md: 'flex-start' },
                  width: '100%'
                }}>
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href="#"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        textAlign: { xs: 'center', md: 'left' },
                        '&:hover': {
                          color: '#ffffff',
                          transform: 'translateX(5px)',
                        }
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ 
          mt: 8,
          pt: 4,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 3,
          textAlign: { xs: 'center', md: 'left' }
        }}>
          {/* Copyright */}
          <Typography variant="body2" sx={{ 
            color: 'rgba(255,255,255,0.7)',
            textAlign: { xs: 'center', md: 'left' }
          }}>
            © 2025 AAIT. Product Designed and Developed <span style={{ color: '#ff4081' }}>❤</span> by AAIT.
          </Typography>

          {/* Social Icons */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            justifyContent: { xs: 'center', md: 'flex-end' }
          }}>
            <SocialIconButton 
              href="https://www.facebook.com/share/1ESnomL8uo/?mibextid=wwXIfr"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </SocialIconButton>
            <SocialIconButton 
              href="https://www.instagram.com/aaitsolu?igsh=MWVwdG4xZDdhem5reQ=="
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </SocialIconButton>
            <SocialIconButton 
              href="https://www.linkedin.com/company/aait-solution"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </SocialIconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 