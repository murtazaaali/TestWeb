import React, { useState, useCallback, memo, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Button, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Memoize the menu items to prevent unnecessary re-renders
const menuItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Contact', id: 'contact' }
];

// Memoized MenuItem component
const MenuItem = memo(({ item, onClick, isScrolled }) => (
  <Button
    onClick={() => onClick(item.id)}
    sx={{
      color: isScrolled ? '#1a1a1a' : '#fff',
      mx: { xs: 1.5, sm: 2, md: 3 },
      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
      fontWeight: 600,
      '&:hover': { 
        color: '#2E1F47',
        transform: 'translateY(-2px)',
        background: 'transparent'
      },
      transition: 'all 0.3s ease-in-out',
      textTransform: 'none'
    }}
  >
    {item.label}
  </Button>
));

// Memoized MobileMenuItem component
const MobileMenuItem = memo(({ item, onClick }) => (
  <ListItem disablePadding>
    <ListItemButton
      onClick={() => onClick(item.id)}
      sx={{
        color: '#1a1a1a',
        '&:hover': { 
          color: '#2E1F47',
          background: 'transparent'
        }
      }}
    >
      {item.label}
    </ListItemButton>
  </ListItem>
));

const Navbar = memo(({ onBookDemo }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setMobileOpen(false);
    }
  }, []);

  const handleLogoClick = useCallback(() => {
    scrollToSection('hero');
  }, [scrollToSection]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      scrollToSection('hero');
    }
  }, [scrollToSection]);

  return (
    <AppBar 
      position="fixed" 
      elevation={0} 
      sx={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <Toolbar 
        className="container" 
        sx={{ 
          minHeight: { xs: '110px', sm: '130px', md: '140px' },
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1.5, sm: 2 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        {/* Logo */}
        <Box 
          sx={{ 
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            mr: { md: 4 }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer'
            }}
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            onKeyPress={handleKeyPress}
          >
            <img 
              src="/Assets/Logo.png"
              alt="AAIT Logo" 
              style={{ 
                height: '120px',
                width: 'auto',
                filter: !isScrolled ? 'brightness(0) invert(1)' : 'none',
                transition: 'all 0.3s ease-in-out'
              }}
            />
          </Box>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ 
            display: { md: 'none' },
            color: isScrolled ? '#1a1a1a' : '#fff',
            ml: 1,
            fontSize: '2rem'
          }}
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>

        {/* Desktop Menu */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            flex: '1 1 auto',
            ml: 'auto'
          }}
        >
          {menuItems.map((item) => (
            <MenuItem 
              key={item.label} 
              item={item} 
              onClick={scrollToSection}
              isScrolled={isScrolled}
            />
          ))}
        </Box>

        {/* Book Demo Button - Desktop */}
        <Button
          variant="contained"
          onClick={onBookDemo}
          sx={{
            display: { xs: 'none', md: 'flex' },
            background: isScrolled ? 'linear-gradient(135deg, #2E1F47 0%, #443365 100%)' : 'rgba(255, 255, 255, 0.2)',
            px: { sm: 3, md: 4 },
            py: { sm: 1, md: 1.5 },
            fontSize: { sm: '1.1rem', md: '1.2rem' },
            fontWeight: 600,
            color: 'white',
            backdropFilter: !isScrolled ? 'blur(5px)' : 'none',
            ml: 4,
            '&:hover': {
              background: isScrolled 
                ? 'linear-gradient(135deg, #443365 0%, #2E1F47 100%)'
                : 'rgba(255, 255, 255, 0.3)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease-in-out',
            textTransform: 'none',
            whiteSpace: 'nowrap',
            borderRadius: '8px'
          }}
        >
          Book Demo
        </Button>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 280,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              pt: 8
            },
          }}
        >
          <Box sx={{ pt: 2, pb: 4 }}>
            <List>
              {menuItems.map((item) => (
                <MobileMenuItem 
                  key={item.label} 
                  item={item} 
                  onClick={scrollToSection} 
                />
              ))}
              <ListItem sx={{ mt: 2, px: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    onBookDemo();
                    handleDrawerToggle();
                  }}
                  sx={{
                    background: 'linear-gradient(135deg, #2E1F47 0%, #443365 100%)',
                    color: 'white',
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #443365 0%, #2E1F47 100%)',
                    },
                    borderRadius: '8px'
                  }}
                >
                  Book Demo
                </Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
});

export default Navbar; 