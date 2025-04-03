'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { UserRole } from '@/types';

export default function RoleSelection() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const handleRoleSelection = async (role: UserRole) => {
    // Update user role in Supabase
    await supabase
      .from('users')
      .update({ role })
      .eq('id', user.id);
    
    router.push('/dashboard');
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <Card className="p-6">
        <h2>Legal Aid Seeker</h2>
        <Button onClick={() => handleRoleSelection('LEGAL_AID_SEEKER')}>
          Select
        </Button>
      </Card>
      <Card className="p-6">
        <h2>Lawyer</h2>
        <Button onClick={() => handleRoleSelection('LAWYER')}>
          Select
        </Button>
      </Card>
    </div>
  );
}