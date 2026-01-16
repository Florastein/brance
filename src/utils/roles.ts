import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

export enum Role {
  Admin = 'Admin',
  Lecturer = 'Lecturer',
  Student = 'Student',
}

export const assignDefaultRole = async (userId: string) => {
  try {
    await setDoc(doc(firestore, 'roles', userId), {
      role: Role.Student,
    });
  } catch (error) {
    console.error('Error assigning default role:', error);
  }
};
