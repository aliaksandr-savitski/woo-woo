'use client';

import { useState, useContext, createContext } from 'react';

const MobileMenuContext = createContext({ isOpen: false, openMenu() {}, closeMenu() {} });

export const MobileMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const value = { isOpen, openMenu, closeMenu };

  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>;
};

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);

  if (!context) {
    throw new Error('useMobileMenu must be used within the MobileMenuProvider');
  }

  return context;
};
