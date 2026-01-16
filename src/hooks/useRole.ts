import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { useUser } from './useUser';
import { Role } from '../utils/roles';

export const useRole = () => {
  const { user } = useUser();
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      if (user) {
        try {
          const roleDoc = await getDoc(doc(firestore, 'roles', user.uid));
          if (roleDoc.exists()) {
            setRole(roleDoc.data().role as Role);
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      }
      setLoading(false);
    };

    fetchRole();
  }, [user]);

  return { role, loading };
};
