import React from 'react'

import { useEffect, useState } from 'react'

import {Link} from "react-router-dom"

function Today() {
    
    const [data, setData] = useState([])
    useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data=>data.json())
            .then(data=>{
                setData(data.slice(0,10))
            })

        },[])   

    return (
        <div>
            <h1>This is Today Page</h1>
            <Link to="/reports"> Back </Link>

            <table border="2" width="96%" cellSpacing="2" cellPadding="3">
                <thead>
                    <tr>
                    <th>SI NO</th>
                    <th>userId</th>
                    <th>title</th>
                    <th>body</th>
                    </tr>
     
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>{
                     return (<tr key={index}>
                            <td> {index+1} </td>
                            <td> {item.userId} </td>
                            <td> {item.title.substr(10)} </td>
                            <td> {item.body.substr(10)} </td>
                   
                     </tr>
                     )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Today
