import React from 'react';
import { Box, IconButton, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/material/styles';

const FloatingButton = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  zIndex: 1000,
  animation: 'bounce 2s infinite',
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-20px)',
    },
    '60%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/9710528750537', '_blank');
  };

  return (
    <FloatingButton>
      <Tooltip 
        title="Chat with us on WhatsApp" 
        placement="left"
        TransitionComponent={Zoom}
      >
        <IconButton
          onClick={handleClick}
          sx={{
            backgroundColor: '#25D366',
            color: 'white',
            width: 60,
            height: 60,
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
            '&:hover': {
              backgroundColor: '#128C7E',
              transform: 'scale(1.1)',
              boxShadow: '0 6px 25px rgba(37, 211, 102, 0.4)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Tooltip>
    </FloatingButton>
  );
};

export default WhatsAppButton; 