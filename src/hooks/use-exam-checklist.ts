'use client';

import { useState, useEffect, useCallback } from 'react';

const EXAM_CHECKLIST_KEY = 'primeiras-mordidas-exam-checklist';

export const useExamChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const storedItems = localStorage.getItem(EXAM_CHECKLIST_KEY);
      if (storedItems) {
        setCheckedItems(new Set(JSON.parse(storedItems)));
      }
    } catch (error) {
      console.error("Failed to parse exam checklist from localStorage", error);
      setCheckedItems(new Set());
    }
  }, []);

  const saveCheckedItems = (newCheckedItems: Set<string>) => {
    try {
      setCheckedItems(newCheckedItems);
      localStorage.setItem(EXAM_CHECKLIST_KEY, JSON.stringify(Array.from(newCheckedItems)));
    } catch (error) {
      console.error("Failed to save exam checklist to localStorage", error);
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

  return { checkedItems, toggleItem, isChecked };
};
