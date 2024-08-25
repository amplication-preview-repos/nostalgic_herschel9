export type RealTimeNews = {
  content: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  sentiment?: "Option1" | null;
  source: string | null;
  symbolField: string | null;
  title: string | null;
  updatedAt: Date;
};
