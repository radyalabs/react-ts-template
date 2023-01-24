import type { ReactNode } from 'react';

export interface LayoutContextTypes {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
}

export interface LayoutProviderProps {
  children: ReactNode;
}
