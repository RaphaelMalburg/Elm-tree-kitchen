export type prepListType = {
  id: any;
  nameTask: string;
  description: string;
  quantity: { value: number; unit: string };
  daysOfWeekRatio: number[];
  status: string;
  section: string;
  storage: string;
};
