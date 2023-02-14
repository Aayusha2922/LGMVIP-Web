import React from "react";
import './User.css';
const Users = (props) => {
    return (
        <>
                 <div className="bigbox">
                    <div className="upper">
                        <div><img src={props.avatar} alt="" /></div>
                    </div>
                    
                    <div className="lower">
                    <h4>User ID: {props.id}</h4>
                    <h4>{props.name}{props.lname}</h4>
                    <h4>{props.email}</h4>
                    </div>
                 </div>
                   
        </>
    );
}
export default Users;