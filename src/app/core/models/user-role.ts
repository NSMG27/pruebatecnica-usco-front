export type UserRole =
  | 'STUDENT'
  | 'TEACHER'
  | 'ADMINISTRATIVE_STAFF';

export const USER_ROLE_LABELS: Record<UserRole, string> = {
  STUDENT: 'Estudiante',
  TEACHER: 'Docente',
  ADMINISTRATIVE_STAFF: 'Administrativo'
};
