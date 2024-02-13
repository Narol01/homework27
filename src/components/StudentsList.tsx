import { Students } from "../type/Students";
import StudentItem from "./StudentItem"

export default function StudentsList() {
    const students:Students[] = [
        { firstname: "John", lastname: "Doe", age: 20, notes: 85 },
        { firstname: "Jane", lastname: "Smith", age: 22, notes: 78 },
        { firstname: "Mike", lastname: "Johnson", age: 21, notes: 90 }
    ];

  return (
    <div>
        {
        students.map((student)=><StudentItem key={student.firstname}{...student}/>)
        };
        </div>
  );


}