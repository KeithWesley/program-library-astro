export interface ProgramApiResponseProps {
  title: string;
  days: ProgramDaysProps[];
}

export interface ProgramDaysProps {
  day: string;
  list: ProgramListProps[];
}

export interface ProgramListProps {
  order: string;
  exercise: string;
  setsxreps: { set: number; reps: number; load: number }[];
  weight: number[];
  notes: string;
}
