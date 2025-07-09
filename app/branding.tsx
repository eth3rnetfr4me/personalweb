// src/layouts/branding.tsx
import * as React from 'react';

function MyLogo({ size = 32 }: { size?: number }) {
    return (
        <img
        src="/my-logo.svg"
        alt="My logo"
        width={size}
        height={size}
        />
    );
}

export const BRANDING = {
    name: 'My Cool Dashboard',
    logo: MyLogo,
};
