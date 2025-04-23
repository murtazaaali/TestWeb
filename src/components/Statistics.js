import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CountUp from 'react-countup';

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  background: 'rgba(46, 31, 71, 0.08)',
  color: '#2E1F47',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${floatAnimation} 3s ease-in-out infinite`,
  '& svg': {
    fontSize: 32,
    transition: 'all 0.4s ease',
  }
}));

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  width: '100%',
  transition: 'all 0.3s ease',
  position: 'relative',
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
    zIndex: 0,
    borderRadius: theme.spacing(2),
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    '&::before': {
      opacity: 0.03,
    },
    '& .icon-wrapper': {
      background: 'linear-gradient(45deg, #2E1F47, #443365)',
      color: '#ffffff',
      transform: 'scale(1.1) rotate(10deg)',
      boxShadow: '0 10px 20px rgba(46, 31, 71, 0.2)',
      '& svg': {
        transform: 'rotate(-10deg)',
      }
    },
    '& .stat-number': {
      color: '#2E1F47',
    }
  }
}));

const statistics = [
  {
    icon: <GroupsIcon />,
    number: 95,
    label: 'Happy Clients',
    suffix: '+',
  },
  {
    icon: <WorkspacePremiumIcon />,
    number: 1,
    label: 'Awards Won',
    suffix: '',
  },
  {
    icon: <LocalCafeIcon />,
    number: 30,
    label: 'Cups of Coffee',
    suffix: 'k+',
  },
  {
    icon: <RocketLaunchIcon />,
    number: 3,
    label: 'Projects Completed',
    suffix: '',
  },
];

const Statistics = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        px: { xs: 4, md: 8 },
        background: 'linear-gradient(180deg, #ffffff 0%, #F9F7FC 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 4, md: 8 }
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 6 }}
          justifyContent="space-evenly"
          alignItems="center"
          wrap="nowrap"
        >
          {statistics.map((stat, index) => (
            <Grid 
              item
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flex: 1,
                minWidth: { xs: '120px', sm: '150px', md: '200px' }
              }}
            >
              <StatItem>
                <IconWrapper className="icon-wrapper">
                  {stat.icon}
                </IconWrapper>
                <Typography
                  className="stat-number"
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
                    fontWeight: 700,
                    mb: 2,
                    color: '#1A202C',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#666666',
                    fontWeight: 500,
                    textAlign: 'center',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {stat.label}
                </Typography>
              </StatItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Statistics; 