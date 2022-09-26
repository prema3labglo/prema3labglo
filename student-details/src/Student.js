import React from "react";
import App from "./App";

function Myfunction(props) {

    function Myfun() {
        console.log(props.stud.name);
        console.log(props.stud.id);
        console.log(props.stud.rollno);
        console.log(props.stud.age);
}




    return (
        <div>
            <button onClick={() => Myfun()}>click</button>
            






        </div>

    );






}
export default Myfunction;