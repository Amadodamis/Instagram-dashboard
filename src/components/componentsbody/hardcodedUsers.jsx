import React from "react";
import '../../css/App.css';
import '../../css/body.css';

function hardcodedUsers(props) {

    const {array} = props;

    return (
        <div className='list-users'>
            <ul className='ul-style'>
                {array.map((user, i) => {
                    return (
                        <li key={i} >
                            {user.img}
                            {user.a}
                        </li>
                    )
                })
                }

            </ul>
        </div>
    );
}

export default hardcodedUsers;
