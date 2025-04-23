import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box,
  Card,
  CardContent,
  useTheme,
  alpha,
  Zoom
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  minHeight: 280,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, #2E1F47, #443365)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },

  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(46, 31, 71, 0.15)',
    background: '#ffffff',

    '&::before': {
      opacity: 0.03,
    },

    '& .icon-wrapper': {
      animation: `${pulse} 1.5s ease-in-out infinite`,
      background: 'linear-gradient(45deg, #2E1F47, #443365)',
      color: '#fff',
      boxShadow: '0 10px 20px rgba(46, 31, 71, 0.3)',
    },

    '& .card-content': {
      transform: 'translateY(-5px)',
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 90,
  height: 90,
  borderRadius: '26px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: alpha('#2E1F47', 0.08),
  marginBottom: theme.spacing(3),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  color: '#2E1F47',
  position: 'relative',
  
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: '28px',
    background: 'linear-gradient(45deg, #2E1F47, #443365)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    zIndex: -1,
  },

  '&:hover::after': {
    opacity: 0.3,
  }
}));

const industries = [
  {
    icon: <StorefrontOutlinedIcon sx={{ fontSize: 45 }} />,
    title: 'Ecommerce',
    subtitle: 'Lead Management System',
  },
  {
    icon: <DirectionsCarFilledOutlinedIcon sx={{ fontSize: 45 }} />,
    title: 'Auto Dealerships',
    subtitle: 'AI Driven CRM',
  },
  {
    icon: <FlightTakeoffOutlinedIcon sx={{ fontSize: 45 }} />,
    title: 'Travel and Tourism',
    subtitle: 'CRM',
  },
  {
    icon: <BusinessCenterOutlinedIcon sx={{ fontSize: 45 }} />,
    title: 'Immigration Consultants',
    subtitle: 'Customized CRM',
  },
  {
    icon: <SchoolOutlinedIcon sx={{ fontSize: 45 }} />,
    title: 'Study Visa Consultants',
    subtitle: 'Lead Management System',
  },
  {
    icon: <AccountBalanceOutlinedIcon sx={{ fontSize: 45 }} />,
    title: 'Hajj and Umrah Agencies',
    subtitle: 'Back Office CRM',
  },
  {
    icon: <HomeWorkOutlinedIcon sx={{ fontSize: 45 }} />,
    title: 'Real Estate Agencies',
    subtitle: 'CRM',
  },
];

const Solutions = () => {
  return (
    <Box
      id="solutions"
      component="section"
      sx={{ 
        py: { xs: 8, sm: 10, md: 12 },
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(circle at 50% 0%, rgba(25, 118, 210, 0.1), transparent 70%)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 }, position: 'relative' }}>
          <Box sx={{ 
            width: '100%',
            animation: `${fadeIn} 0.6s ease-out 0.2s`,
            animationFillMode: 'backwards'
          }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 400,
                color: '#000000',
                mb: { xs: 2, sm: 3 },
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                px: { xs: 2, sm: 0 }
              }}
            >
              Industry Specific CRM
            </Typography>
            <Typography
              sx={{
                color: '#666',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.125rem' },
                mb: { xs: 4, sm: 5, md: 6 },
                lineHeight: 1.6,
                maxWidth: '800px',
                mx: 'auto',
                px: { xs: 2, sm: 0 }
              }}
            >
              Tailored made CRM for different Industries. We know the main requirement of every Industry.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={{ xs: 3, sm: 4 }} alignItems="stretch">
          {industries.map((industry, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3} 
              key={index}
              sx={{ display: 'flex' }}
            >
              <Zoom in={true} style={{ transitionDelay: `${index * 100}ms`, width: '100%' }}>
                <StyledCard elevation={0}>
                  <IconWrapper className="icon-wrapper" sx={{ 
                    width: { xs: 70, sm: 80, md: 90 },
                    height: { xs: 70, sm: 80, md: 90 },
                    borderRadius: { xs: '20px', sm: '26px' }
                  }}>
                    {React.cloneElement(industry.icon, { 
                      sx: { fontSize: { xs: 35, sm: 40, md: 45 } } 
                    })}
                  </IconWrapper>
                  <CardContent 
                    className="card-content" 
                    sx={{ 
                      textAlign: 'center', 
                      p: 0,
                      transition: 'transform 0.4s ease',
                      width: '100%'
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        mb: { xs: 1, sm: 1.5 },
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
                        color: 'text.primary',
                        height: '1.5em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {industry.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                        fontWeight: 400,
                        height: '1.5em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {industry.subtitle}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Solutions; 