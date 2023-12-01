export interface ITeacher {
  name: string;
  roles: {
    position: string;
    company: string;
  }[];
  src: string;
  description: string;
}
