import React from 'react';
import './App.css';

const Info = ({name,email,website,image,gender}) =>{
    return(
        <>
         <tr>
                    <td className='table-data'>
                        <div className='data'>
                        <h5>Name :  {name}</h5>
                        <h5>Email-ID :  {email}</h5>
                        <h5>Website :  {website}</h5>
                        <h5>Gender :  {gender}</h5>
                        </div>
                    </td>
                    <td className='image'><img src={image} alt="" width="100px" height="100px"/></td>
           </tr> 
        </>
    );

};
export default Info;