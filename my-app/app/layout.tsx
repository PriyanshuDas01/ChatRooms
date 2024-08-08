"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/providers/ConvexClientProvider";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import { metadata } from './metadata'; // Import the metadata

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSignInButton = pathname !== '/some-specific-page'; // Change '/some-specific-page' to the path where you don't want the button to appear

  return (
    <ConvexClientProvider>
      <html lang="en">
        <body>
          <header>
            {showSignInButton && (
              <SignedOut>
                <Button><SignInButton /></Button>
              </SignedOut>
            )}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ConvexClientProvider>
  );
}
