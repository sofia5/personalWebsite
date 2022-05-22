import Course from "./Course";

export default interface Education {
  id: number;
  nameShort: string;
  nameLong: string;
  educationLevel: string;
  schoolDescription: string;
  schoolLink: string;
  active: boolean;
  pointScale: string;
  color: string;
  degrees?: { name: string; credits: number }[];
  bachelorProgram?: {
    name: string;
    credits: number;
  };
  masterProgram?: {
    name: string;
    credits: number;
  };
  accomplishments?: {
    name: string;
    description: string;
  }[];
  exchangeFrom?: string;
  exchangeYear?: number;
  coursesComment?: string;
  courses: Course[];
}
