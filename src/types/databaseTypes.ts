export interface ProgramsOptionsApiResponseProps {
  value: string;
  label: string;
}

export interface ProgramApiResponseProps {
  id: string;
  title: string;
  goal: string;
  program: unknown;
}

export interface ProgramProps {
  sessions: SessionsProps[];
}

export interface SessionsProps {
  day: string;
  workout: WorkoutProps[];
}

export interface WorkoutProps {
  order: string;
  exercise: string;
  setsxreps: { set: number; reps: number; load: number }[];
  weights: number[];
}
