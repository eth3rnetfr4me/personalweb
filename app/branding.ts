import * as React from 'react';

// Optional: if you want a logo component
function MyLogo({ size = 24 }: { size?: number }) {
    return <img src="/logo.svg" alt="My App" width={size} height={size} />;
}

export const BRANDING = {
    name: 'PowerfulWeb',  // ← this replaces “Toolpad”
    logo: MyLogo,         // ← optional; omit if you just want text
};
