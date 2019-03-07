import { Student } from './Student';
import { Course } from './Course';
export class Batch
{
    public name:string;
    public start_date:Date;
    public end_date:Date;
    public children1:Student[];
    public children2:Course[];
    
    

}