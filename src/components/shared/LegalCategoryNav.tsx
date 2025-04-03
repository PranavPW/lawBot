'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import type { LegalCategory } from '@/types';

const LEGAL_CATEGORIES: LegalCategory[] = [
  {
    id: '1',
    name: 'Criminal Law',
    subcategories: [/* Add subcategories */]
  },
  // Add other categories
];

export function LegalCategoryNav() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Legal Categories</h2>
      <div className="space-y-2">
        {LEGAL_CATEGORIES.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="w-full justify-start"
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}