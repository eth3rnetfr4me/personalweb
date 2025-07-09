'use client';

import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import LinearProgress from '@mui/material/LinearProgress';
import theme from '../theme';
import { NAVIGATION } from './navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-toolpad-color-scheme="light">
    <body>
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
    <React.Suspense fallback={<LinearProgress />}>
    <NextAppProvider theme={theme} navigation={NAVIGATION}>
    {children}
    </NextAppProvider>
    </React.Suspense>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}
