import logo from './logo.svg';
import './App.css';
import Navbar from './Components.js/Navbar';
import Filter from './Components.js/Filter';
import Cards from './Components.js/Cards';
import {filterData,apiUrl} from './data'
import { useEffect, useState } from 'react';
import Spinner from './Components.js/Spinnner';
import { toast } from 'react-toastify';

function App() {

const [courses, setCourses]=useState([]);
const[loading,setLoading]=useState(true);
const[category,setcategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();

      setCourses(output.data);

     
    }catch(e){

      toast.error("network me koi kharabi ")
    }

    setLoading(false);
  }

  useEffect(()=>{
fetchData();
  },[])


 // console.log(filterData);
 console.log(courses);
  return (

  
   <div>
    hello jee 
    <div>
      <Navbar></Navbar>
    </div>

    <div>

<Filter filterData={filterData} 
category={category}
setcategory={setcategory}
></Filter>
    </div>
 
    <div className='w-[11/12]  mx-auto flex flex-wrap  justify-center items-center'>



 {
  loading ? (<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
 }

 

    </div>
   </div>
  
  );
}

export default App;
