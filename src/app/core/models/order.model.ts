import { MenuItem } from "./menu-item.model";

export interface Order {
    id?: string;
    items: MenuItem[];
    total: number;
    createdAt: Date;
    status: 'pending' | 'preparing' | 'ready' | 'completed';
  }
  