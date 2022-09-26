import Myfunction from './Student';
import './App.css';
function App(){

  const details = {
    name: "prema",
    age: "21",
    id: "2224",
    rollno: "15"
  };

  return (
    <>
      <Myfunction stud={details} />



    </>
  );
}




export default App;
