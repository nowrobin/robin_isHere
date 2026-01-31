'use client';

import { useEffect } from 'react';
import clarity from '@microsoft/clarity';

export default function ClarityInit() {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (!clarityId) return;
    clarity.init(clarityId);
  }, []);

  return null;
}
