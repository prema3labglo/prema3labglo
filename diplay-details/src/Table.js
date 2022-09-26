import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Table() {
    const details = [{ id: 1, name: "prema", email: "prema@gmail.com" },
    { id: 2, name: "kowsi", email: "kowsi@gmail.com" },
    { id: 3, name: "mukila", email: "muki@gmail.com" }]
    const heading = ["id", "name", "email"];
    const navigate = useNavigate();
    function navigateNextpage(id) {
        navigate(`/nextpage/${id}`)
    }
     return (
        <>
            <table border="2">
                <thead>
                    <tr>
                        {heading.map((el) => <th>{el}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {details.map((el) => {
                        return (
                            <tr>
                                <td><button onClick={() => navigateNextpage(el.id)}>{el.id}</button></td>
                                <td >{el.name}</td>
                                <td>{el.email}</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
            </table>
        </>

    );

}
export default Table;
