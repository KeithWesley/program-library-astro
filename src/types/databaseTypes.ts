export interface ProgramApiResponseProps {
  title: string;
  sessions: SessionsProps[];
}

export interface SessionsProps {
  day: string;
  workout: ProgramListProps[];
}

export interface ProgramListProps {
  order: string;
  exercise: string;
  setsxreps: { set: number; reps: number; load: number }[];
  weights: number[];
}
