'use client';

import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Link
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  Telegram as TelegramIcon
} from '@mui/icons-material';

export default function Home() {
  const socialLinks = [
    {
      icon: <GitHubIcon />,
      name: 'GitHub',
      url: 'https://github.com/eth3rnetfr4me',
      color: 'white',
      textColor: 'black'
    },
    {
      icon: <LinkedInIcon />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/brinyipeti',
      color: '#0077B5',
      textColor: 'white'
    },
    {
      icon: <TwitterIcon />,
      name: 'Twitter',
      url: 'https://twitter.com/fluidblox',
      color: '#1DA1F2',
      textColor: 'white'
    },
    {
      icon: <EmailIcon />,
      name: 'Email',
      url: 'mailto:brinyiczki@proton.me',
      color: '#EA4335',
      textColor: 'white'
    },
    {
      icon: <TelegramIcon />,
      name: 'Telegram',
      url: 'https://t.me/eth3rnetfr4me',
      color: '#0088cc',
      textColor: 'white'
    }
  ];

  return (
    <Box
    sx={{
      maxWidth: { xs: '100%', md: 'md' },
      margin: '0 auto',
      px: { xs: 2, md: 0 },
      overflowX: 'hidden', // prevent horizontal scroll
    }}
    >
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      my: 4,
      wordBreak: 'break-word', // help long text wrap nicely
      overflowWrap: 'break-word',
    }}
    >
    <Avatar
    alt="eth3rnetfr4me"
    src="/eth.png"
    sx={{
      width: { xs: 150, sm: 200 },
      height: { xs: 150, sm: 200 },
      mb: 3,
      border: '4px solid',
      borderColor: 'primary.main',
      boxShadow: 3,
    }}
    />

    <Typography
    variant="h3"
    component="h1"
    gutterBottom
    sx={{
      textAlign: 'center',
      background: 'linear-gradient(270deg, #3f51b5, #2196f3, #00c6ff, #3f51b5)',
          backgroundSize: '800% 800%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientText 6s ease infinite',
          '@keyframes gradientText': {
            '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
          },
          fontSize: { xs: '2rem', md: '3rem' } // responsive font size
    }}
    >
    eth3rnetfr4me
    </Typography>

    <Typography
    variant="h5"
    color="text.secondary"
    gutterBottom
    sx={{ textAlign: 'center', fontSize: { xs: '1rem', md: '1.5rem' } }}
    >
    Computer Science Undergraduate | Backend Enthusiast
    </Typography>

    {/* Introduction Section */}
    <Typography
    variant="body1"
    sx={{
      maxWidth: 600,
      textAlign: 'center',
      mt: 2,
      color: 'text.primary',
      fontSize: { xs: '0.9rem', md: '1.1rem' },
    }}
    >
    I’m passionate about building scalable backend systems and exploring the inner workings of networks and infrastructure.
    Currently studying Computer Science and working on open-source projects that blend performance and reliability.
    Let’s connect and build something impactful together!
    </Typography>

    {/* Social Links */}
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap', // allow buttons to wrap on small screens
      gap: 2,
      mt: 4,
    }}
    >
    {socialLinks.map((social) => (
      <Link
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ textDecoration: 'none' }}
      >
      <Button
      variant="contained"
      startIcon={social.icon}
      sx={{
        textTransform: 'none',
        borderRadius: 2,
        backgroundColor: social.color,
        color: social.textColor,
        minWidth: 120, // consistent button size
        fontSize: { xs: '0.75rem', md: '1rem' },
        '&:hover': {
          backgroundColor: social.color,
          opacity: 0.8,
        },
      }}
      >
      {social.name}
      </Button>
      </Link>
    ))}
    </Box>

    {/* Footer Text */}
    <Typography
    variant="body2"
    color="text.secondary"
    sx={{
      mt: 4,
      textAlign: 'center',
      fontSize: { xs: '0.75rem', md: '1rem' },
    }}
    >
    Thank you for visiting my page — feel free to reach out or collaborate!
    </Typography>
    </Box>

    {/* Keyframes for gradient animation */}
    <style jsx global>{`
      @keyframes gradientText {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      `}</style>
      </Box>
  );
}
