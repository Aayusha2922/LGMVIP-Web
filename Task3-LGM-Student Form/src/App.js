import React, {useState} from 'react';
import './App.css';
import Info from './Info';

function App() {
  const [infodata , setinfodata] = useState({
    name:"",
    email:"",
    website:"",
    image:"",
    gender:"",
    skills:"",
 });

 const [data , setdata] = useState([]);
 const clear =(e)=>{
 
  setinfodata({
    name:"",
    email:"",
    website:"",
    image:"",
    gender:"",
    skills:"",
 });

 }
const handleSubmit =(e)=>{
  e.preventDefault();
};
const handle = (e) =>{
  const {name,value} = e.target;
  setinfodata((olddata) =>{
    return {
      ...olddata,
      [name]: value,
    }
  });
 
};
const add=()=>{
setdata((old)=>{
  return [...old, infodata];
})
}
  return (
    <>
    <div className='navigation'>
      <h1 className='navigation-text'>Student Enrollment Form</h1>
    </div>
    <div className='container1'>
          <div className='container2'>
          <form onSubmit={handleSubmit}>  
            <div className='container-label'>
              <h4> Username</h4>  
              <input type="text" name='name' value={infodata.name} onChange={handle}/>  
              </div>
              <div className='container-label'>
              <h4> Email-ID</h4>  
              <input type="email" name='email' value={infodata.email} onChange={handle}/>  
              </div>
              <div className='container-label'>
              <h4> Website</h4>  
              <input type="text" name='website' value={infodata.web} onChange={handle}/>  
              </div>
              <div className='container-label'>
              <h4> Image Link</h4>  
              <input type="text" name='image' value={infodata.image} onChange={handle}/>  
              </div>
              <div className='genderclass'>
              <h4 className='gender-circle'> Gender</h4>  
              <div className='gender'>
                <div>
              <input type="radio" className="gendername" name="gender" value="Male" onChange={handle}/>Male  
              </div>
              <div>
              <input type="radio" className="gendername" name="gender" value="Female" onChange={handle}/>Female </div>
              </div>
              </div>


              <div className='container-label'>
              <h4> Skills</h4>
              <div className='checkbox-box'>
              <input type="checkbox" className="checkbox" name='checkbox' value="JAVA" onChange={handle}/> Java
              <input type="checkbox" className="checkbox" name='checkbox' value="PYTHON" onChange={handle}/> Python
              <input type="checkbox" className="checkbox" name='checkbox' value="C++" onChange={handle}/> C#
              <input type="checkbox" className="checkbox" name='checkbox' value="C++" onChange={handle}/> PHP
              </div>
              </div>

              <div className='button'>
              <input type="submit" value="Enroll Student" className='button1' onClick={add}/>    
              <input type="submit" value="Clear" className='button2' onClick={clear}/>
              </div>
            </form>  
          </div>
          <div className='enroll-list'>
              <div>
                   <h2>Enrolled Students</h2>
              </div>
              <div>
             <table>  
                <tr>
                    <th>Description</th>
                    <th>Image</th>
                </tr>  
           {data.map((arr, index)=>{
            return <Info key={index} id={index} {...arr} />
           })}
                
       </table>
           </div>
          </div>
    </div>
    </>
  );
}

export default App;