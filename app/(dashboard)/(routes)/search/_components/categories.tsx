

"use client"
import { Category } from '@prisma/client';
import { IconType } from 'react-icons';
import { FcCamera, FcEngineering, FcFilmReel, FcMultipleDevices, FcMusic, FcSalesPerformance, FcSportsMode } from 'react-icons/fc';
import { CategoryItem } from './category-item';

export interface ICategoriesProps {
  items: Category[]
}

const iconMap: Record<Category["name"], IconType> = {
  "Music": FcMusic,
  "Photography": FcCamera,
  "Fitness": FcSportsMode,
  "Computer Science": FcMultipleDevices,
  "Filming": FcFilmReel,
  "Engineering": FcEngineering,
  "Accounting": FcSalesPerformance
}

export function Categories({ items }: ICategoriesProps) {
  return (
    <div className='flex items-center gap-x-2 overflow-auto pb-2'>
      {items.map((item) => (
        // category item
        <CategoryItem
          key={item.id}
          label={item.name}
          value={item.id}
          icon={iconMap[item.name]}
        />
      ))}
    </div>
  );
}
