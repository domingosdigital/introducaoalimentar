'use client';

import { useState, useEffect, useCallback } from 'react';
import { foodChecklist } from '@/lib/data';
import type { FoodChecklistItem } from '@/lib/types';

const CHECKLIST_KEY = 'primeiras-mordidas-checklist';

export const useFoodChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const storedItems = localStorage.getItem(CHECKLIST_KEY);
      if (storedItems) {
        setCheckedItems(new Set(JSON.parse(storedItems)));
      }
    } catch (error) {
      console.error("Failed to parse checklist from localStorage", error);
      setCheckedItems(new Set());
    }
  }, []);

  const saveCheckedItems = (newCheckedItems: Set<string>) => {
    try {
      setCheckedItems(newCheckedItems);
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(Array.from(newCheckedItems)));
    } catch (error) {
      console.error("Failed to save checklist to localStorage", error);
    }
  };

  const toggleItem = useCallback((id: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id);
    } else {
      newCheckedItems.add(id);
    }
    saveCheckedItems(newCheckedItems);
  }, [checkedItems]);
  
  const isChecked = useCallback((id: string) => {
    return checkedItems.has(id);
  }, [checkedItems]);

  const testedCount = checkedItems.size;
  const missingCount = foodChecklist.length - testedCount;

  return { checkedItems, toggleItem, isChecked, testedCount, missingCount };
};
