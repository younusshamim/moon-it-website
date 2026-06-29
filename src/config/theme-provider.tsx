'use client';

import { useIsMounted } from '@/hooks/use-is-mounted';
import { ThemeProvider as NextThemeProvider, type ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children }: ThemeProviderProps) {
    const isMounted = useIsMounted();

    return (
        <NextThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            {isMounted && children}
        </NextThemeProvider>
    );
}