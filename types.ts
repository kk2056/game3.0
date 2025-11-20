import { LucideIcon } from 'lucide-react';

export interface Game {
  id: string;
  title: string;
  description: string;
  src: string;
  iconName: string; // Storing string name to map to Lucide icon
  category: 'Puzzle' | 'Strategy' | 'Arcade' | 'Word';
}

export interface AdProps {
  slotId: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical';
  className?: string;
  label?: string;
}
