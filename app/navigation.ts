import * as React from 'react';
import { Navigation } from '@toolpad/core/AppProvider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpIcon from '@mui/icons-material/Http';

export const NAVIGATION: Navigation = [
    { kind: 'header', title: 'Main items' },
{ segment: '',        title: 'Introduction',      icon: <AccountCircleIcon /> },
{ segment: 'page2',   title: 'Powerful Websites', icon: <HttpIcon /> },
];
