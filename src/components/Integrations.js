import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  useTheme, 
  alpha,
  IconButton,
  Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const IntegrationItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  height: '140px',
  background: '#ffffff',
  borderRadius: theme.spacing(2),
  transition: 'all 0.4s ease',
  border: '1px solid',
  borderColor: alpha(theme.palette.grey[300], 0.5),
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, #2E1F47, #443365)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    zIndex: 0,
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: 'transparent',
    boxShadow: '0 20px 40px rgba(46, 31, 71, 0.1)',
    '&::before': {
      opacity: 1,
    },
    '& .integration-icon': {
      background: '#ffffff',
      color: '#2E1F47',
      transform: 'scale(1.1) rotate(10deg)',
    },
    '& .integration-text': {
      color: '#ffffff',
    },
    '& .arrow-icon': {
      opacity: 1,
      transform: 'translate(0, -50%) rotate(0deg)',
      color: '#ffffff',
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: alpha('#2E1F47', 0.1),
  transition: 'all 0.4s ease',
  color: '#2E1F47',
  position: 'relative',
  zIndex: 1,
  flexShrink: 0
}));

const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(3),
  top: '50%',
  transform: 'translate(20px, -50%) rotate(-45deg)',
  opacity: 0,
  transition: 'all 0.4s ease',
  color: '#ffffff',
  zIndex: 1,
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  }
}));

const integrations = [
  {
    icon: <CampaignOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'Facebook Leads'
  },
  {
    icon: <ChatOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'WhatsApp Integration'
  },
  {
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'Automate Support'
  },
  {
    icon: <PsychologyOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'AI Sales Assistance'
  },
  {
    icon: <QueryStatsOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'Analytical Reports'
  },
  {
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'Reduce Sales Cost'
  }
];

const Integrations = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #ffffff 0%, #F9F7FC 100%)',
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          '& .MuiGrid-container': {
            mx: 'auto',
            width: '100%',
            maxWidth: '1400px'
          }
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
              color: '#000000',
            }}
          >
            Hassle Free Integrations
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 400,
              px: 2,
              mb: 8
            }}
          >
            We provide FREE integration with your existing Websites and Platforms.
            Powerful tool to Automate your existing process.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
          justifyContent="space-between"
          alignItems="center"
        >
          {integrations.map((integration, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: { xs: 2, sm: 3, md: 4 }
              }}
            >
              <Fade in={true} timeout={500 + index * 100}>
                <IntegrationItem>
                  <IconWrapper className="integration-icon">
                    {integration.icon}
                  </IconWrapper>
                  <Typography
                    variant="h6"
                    className="integration-text"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      position: 'relative',
                      zIndex: 1,
                      fontSize: '1.1rem',
                      flex: 1,
                      pr: 4
                    }}
                  >
                    {integration.title}
                  </Typography>
                  <ArrowButton className="arrow-icon" size="small">
                    <ArrowOutwardIcon />
                  </ArrowButton>
                </IntegrationItem>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Integrations;