import React from "react";
import { useEffect,useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios, { Axios } from "axios";
import details from "./details";

export default function Peoplelist(){
    
    const[apidata,setApidata]=useState({});
    const[selectData,setSelectData]=useState({});
    const[redirectPage,setRedirectPage]=useState(false);
    
    const loadData=()=>{
        axios.get("https://swapi.dev/api/people")
        .then((response)=>setApidata((response.data)))
        .catch((error)=>console.log(error))
    }
    const nextPage=()=>{
        axios.get(apidata.next)
        .then((response)=>setApidata((response.data)))
        .catch((error)=>console.log(error))
    }
    const previousPage=()=>{
        axios.get(apidata.previous)
        .then((response)=>setApidata((response.data)))
        .catch((error)=>console.log(error))
    }
    
    const navigate=useNavigate();
function view(name,id){

    navigate(`/details/${name}${id}`)
        

    }
    useEffect(()=>loadData(),[])

    
    return(
        <div>
        {apidata.next===null?"":
            
        <button onClick={()=>nextPage()}>next page</button>}
        
        <br/>
        <br/>
        {apidata.previous===null?"":

        <button onClick={()=>previousPage()}>previous page</button>}

        <br/>
        <br/>

        <table border="2">
            <thead>
                
                <th>name</th>
                <th>height</th>
                <th>mass</th>
                <th>haircolor</th>
                <th>skincolor</th>
                <th>film</th>
                <th>eyecolor</th>
                <th>birthyear</th>
                <th>gender</th>
                <th>species</th>
                <th>vehicles</th>
                <th>starships</th>
                <th>created</th>
                <th>edited</th>
                <th>url</th>
            </thead>
                    
         {apidata.results?.map((el,index)=>(
            <tbody>
            
                
                <tr key={index}>
                    <td onClick={()=>view(el.name,index+1)}>
                        {el.name}</td>
                    <td>{el.height}</td>
                    <td>{el.mass}</td>
                    <td>{el.hair_color}</td>
                    <td>{el.skin_color}</td>
                    <td>{el.films.map((data)=>{
                        return (
                            <p>{data}</p>
                        )
                    })}
                    </td>
                    <td>{el.eye_color}</td>
                    <td>{el.birth_year}</td>
                    <td>{el.gender}</td>
                    <td>{el.species}</td>
                    <td>{el.vehicles.map((vechi)=>{
                        return(
                            <p>{vechi}</p>
                        )
                    })
                    }</td>
                    <td>{el.starships.map((star)=>{
                        return(
                            <p>{star}</p>
                        )
                    })}</td>
                    <td>{el.created}</td>
                    <td>{el.edited}</td>
                    <td><Link to="{el.url}">{el.url}</Link></td>
                
                </tr>
        
                </tbody>

            
        ))} 
        </table>
        {/* <h>page</h>
        <p>name:{setApidata.name}</p> */}
        </div>

    );
}
