import { Search } from '@material-ui/icons'
import React, { Component } from 'react'
import coursedata from './courses.json'

export default function Course(){

    return(
        <div>
            <h1>this is course item</h1>
           
           {coursedata.map((coursedetail, index)=>{

               return <div>
                   <h1>{coursedetail.title}</h1>
                   </div>
           })}

        </div>

    )
}