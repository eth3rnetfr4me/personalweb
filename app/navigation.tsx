// app/navigation.ts
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpIcon from '@mui/icons-material/Http';
import { Navigation } from '@toolpad/core/AppProvider';

export const NAVIGATION: Navigation = [
    { kind: 'header', title: 'Main items' },
{ segment: '',        title: 'Introduction',      icon: <AccountCircleIcon /> },
{ segment: 'page2',   title: 'Powerful Websites', icon: <HttpIcon /> },
];
