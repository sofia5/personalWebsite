export default interface Course {
  id: number;
  name: string;
  credits: number;
  courseReference: string;
  grade: number | string;
  date: string;
  courseLevel: string;
  discipline: string;
}
