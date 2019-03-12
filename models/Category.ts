import { Course } from './Course';
export class Category
{
   public name:string;
   public description:string;
   public children:Category[];
   public courses:Course[];
}