import { useState } from 'react';
import Card from './Card'
 

function Cards(props){
//console.log(props.courses);
let courses=props.courses;
const [likedcourses,setlikedcourses]=useState([]);
let category=props.category;
//console.log("ok ok ok " +courses)
function getcourse(){

    if(category === "All" || category ==="Devlopment"){
    let allcourses=[];
    Object.values(courses).forEach(array=>{
        array.forEach(coursedata=>{
            allcourses.push(coursedata);
        })
    })
 
   // console.log(allcourses)
    return allcourses;
}
else{
    console.log(  "ok ok ok ok ok "+courses[category]);
    return courses[category];
}

}

return (

    <div className='flex  flex-wrap  w-[80%] mx-auto  border-black   justify-center gap-4'> 
    {
        getcourse().map((course)=>(
 
               <Card key={course.id} course={course}  likedcourses={likedcourses} setlikedcourses={setlikedcourses} ></Card>
        ))
    }

    

    </div>
)
}
export default Cards;