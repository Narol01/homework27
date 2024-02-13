import React from 'react'
import { Students } from "../type/Students";


export default function StudentItem ({firstname,lastname,age,notes}:Students) {


    return (
      <div>
            <p>firstname:{firstname}</p>
            <p>lastname:{lastname}</p>
            <p>age:{age}</p>
            <p>notes:{notes}</p>
      </div>
    )
  }