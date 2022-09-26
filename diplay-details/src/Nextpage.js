import React from "react";
import { useParams,useSearchParams } from "react-router-dom";

function Nextpage() {
    const { id } = useParams()
    console.log(id);
    const [searchparams,setSearchparams]=useSearchParams(id);
    console.log(searchparams.get(id));
    
    console.log();
    const details = [{ id: 1, name: "prema", email: "prema@gmail.com" },
    { id: 2, name: "kowsi", email: "kowsi@gmail.com" },
    { id: 3, name: "mukila", email: "muki@gmail.com" }];


    return (
        <>
        {details.filter((el) => el.id === parseInt(id)).map((data) => {
            return(
                <>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.email}</p>
            </>
            )})}
        </>
        );
}
export default Nextpage;

