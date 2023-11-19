
function Filter(props){

  
    let filterData1=props.filterData;

    let category=props.category;
    let setcategory=props.setcategory;
      //  console.log( filterData1);

      function filterhandler(title){
        setcategory(title)
      }
    return(
        <div className="w-11/12 flex  flex-wrap gap-x-4  text-center justify-center ">
{
    filterData1.map((data)=>(
       <button  className={`border-2 bg-black text-white p-2 rounded-lg  font-medium m-4 py-2
       ${category ===  data.title ? "  border-yellow-600  border-4  ":"border-black border-2" }`}
       onClick={()=>filterhandler(data.title)}
       >{data.title}</button>
      
    ))

}

 

        </div>
    )
}
export default Filter;