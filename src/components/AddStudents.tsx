import { useState } from "react"
import { Students } from "../type/Students"

export default function AddStudents() {
const [student,setStudent]=useState<Students>({firstname:"",lastname:"",age:0,notes:0})

const changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
    const {value,name}=event.target;
    console.log(`value:${value} name:${name}`);
    const newData:Students={...student,[name]:value};
    setStudent(newData);
}
const submitHandler =(event:React.FormEvent):void=>{
  event.preventDefault();
}

  return (
    <div>
        <form onSubmit={submitHandler}>
        <p>Имя:</p>
        <input value={student.firstname} type="text" name="firstName" onChange={changeHandler}/>
        <p>Фамилия:</p>
        <input value={student.lastname} type="text" name="lastname" onChange={changeHandler} />
        <p>Возраст:</p>
        <input value={student.age} type="text" name="age" onChange={changeHandler} />
        <p>Оценка:</p>
        <input value={student.notes} type="text" name="age" onChange={changeHandler} />
        <button>Добавить</button>
    </form>
    </div>
  )
}