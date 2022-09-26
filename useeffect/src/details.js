import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import axios from "axios";

export default function Details() {
    const [store, setStore] = useState({});
    const { name,id } = useParams()
    console.log("name", name,id)
    const[another,setNext]=useState({});

    const viewData=()=>{
        axios.get("https://swapi.dev/api/people")
        .then((response)=>setStore((response.data)))
        .catch((error)=>console.log(error))
    }
    // const nextData=()=>{
    //     axios.get(store.next)
    //     .then((response)=>setStore((response.data)))

    //     .catch((error)=>console.log(error))
    // }
    // const previousData=()=>{
    //     axios.get(store.previous)
    //     .then((response)=>setStore((response.data)))
    //     .catch((error)=>console.log(error))
    
    useEffect(() => viewData(), [])
    // useEffect(()=>nextData(),[])
    // useEffect(()=>previousData(),[])


    return (

        <>
         {store.results?.filter((person) => person.name === name).map((data) => {
                return (
                    <>

                        <p>{data.name}</p>
                        <p>{data.height}</p>
                        <p>{data.mass}</p>
                        <p>{data.hair_color}</p>
                        <p>{data.skin_color}</p>
                        <p>{data.eye_color}</p>
                        <p>{data.species}</p>
                        <p>{data.starships}</p>
                        {data.films.map((el) => {
                            return (
                                <>
                                    <p><Link to="{el}">{el}</Link></p>
                                </>
                            )
                        })}

                    </>
                )
               
            })}
         </>
    )
}