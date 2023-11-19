import React  from 'react';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

 
function card(props){

    let likedcourses=props.likedcourses;
    let setlikedcourses=props.setlikedcourses;
    let course=props.course;

    function clickhandler(){
if(likedcourses.includes(course.id)){
 //   setlikedcourses(    (prev)=>prev.filter(  (cid)=>(cid !== course.id)    )  )
    toast.warning("liked removed ")

  // setlikedcourses(  (prev)=> prev.filter( (cid)=> (cid == course.id)  ) )
   setlikedcourses( (prev)=>prev.filter( (cid)=> (cid !== course.id)) );
}
else{
    if(likedcourses.length ===0){
setlikedcourses((prev)=>[...prev,course.id])
    }else{

        setlikedcourses((prev)=>[...prev,course.id])
    }

    toast.success("course liked ")
}
    }
    
 
   console.log(course.image.url);
    return (

        <div className='w-[300px]'>
 
        <div className='relative '> 
<img src={course.image.url} alt='error ' className='w-[100%]'></img>


<div className=' w-[20px] absolute   right-2  bottom-3  bg-white flex justify-center  rounded-md px-4 py-1 '>
    <button className=' '>
     {  
        likedcourses.includes(course.id)?( <FcLike onClick={clickhandler}></FcLike>): (<FcLikePlaceholder  onClick={clickhandler}></FcLikePlaceholder>)
     }
    </button>
</div>

</div>


 


<div>
    <p>{course.title}</p>
    <p>
    {
        course.description.length>100?(course.description.substr(0,100)+"......."):(course.description)
    }
    </p>
</div>

        </div>
    )
}
export default card;