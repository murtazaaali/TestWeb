import React, { useState } from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { createBrowserRouter, RouterProvider, Outlet, useOutletContext } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Benefits from './components/Benefits';
import Solutions from './components/Solutions';
import Statistics from './components/Statistics';
import Integrations from './components/Integrations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookDemo from './components/BookDemo';
import ErrorPage from './components/ErrorPage';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const RootLayout = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoOpen(false);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar onBookDemo={handleOpenDemo} />
      <Box 
        sx={{
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'radial-gradient(circle at 50% 0%, rgba(25, 118, 210, 0.1), transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          },
          '& section:not(.preserve-bg)': {
            background: 'transparent !important'
          },
          '& .MuiPaper-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)'
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Outlet context={{ onBookDemo: handleOpenDemo }} />
        </Box>
      </Box>
      <WhatsAppButton />
      <BookDemo open={isDemoOpen} onClose={handleCloseDemo} />
    </Box>
  );
};

const HomePage = () => {
  const { onBookDemo } = useOutletContext();
  return (
    <>
      <Hero onBookDemo={onBookDemo} />
      <WhyChooseUs onBookDemo={onBookDemo} />
      <Benefits />
      <Solutions onBookDemo={onBookDemo} />
      <Statistics className="preserve-bg" />
      <Integrations onBookDemo={onBookDemo} />
      <Contact />
      <Footer className="preserve-bg" />
    </>
  );
};

const HomePageWrapper = () => {
  return <HomePage onBookDemo={() => console.log("Placeholder: Open Demo")} />;
};

const createRouterWithProps = (handleOpenDemo) => createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      // Add other routes here
    ],
  },
]);

function App() {
  const router = createRouterWithProps();

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
