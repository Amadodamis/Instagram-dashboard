import React from "react";
import '../../css/App.css';
import '../../css/body.css';

function hardcodedUsers(props) {
    /*
    {array.map((user,i)=>{
        return (
            {user }   
             )
        })
    }
    
    */


    const { array, fotoUser } = props;
    
    console.log(array[0])

    return (
        <div className='list-users'>
            <ul className='ul-style'>
                {array[0]}

            </ul>
        </div>
    );
}

export default hardcodedUsers;
