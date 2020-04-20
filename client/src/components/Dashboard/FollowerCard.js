import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

const axios = require('axios');

function FollowerCard(props){

    const [ user, setUser ]= useState([]);
    const [ firstName, setUserFirstName ] = useState([]);
    const [ lastName, setUserLastName ] = useState([]);
    const [ id, setId ] = useState();

    // console.log(`calling follower card for: `, props.id)
    useEffect( function(){
        getUser();
        // console.log('use effect is called for follower');
    }, [] );

   async function getUser(){
    console.log(`calling axios.get for user: `, props.id)
    const user = await axios.get( `/api/friend/${props.id}`);

    if( user.error ){
        console.log(`error getting from db`, user.error)
        return;
    }
    
    setUser( user );
    console.log( `Retrieved user data:`, user);
    let firstName = user.data.firstName;
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    setUserFirstName( firstName )
    let lastName = user.data.lastName;
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
    setUserLastName( lastName )
    console.log(`User first:`, firstName , `user last`, lastName)
    let id = user.data._id;
    setId( id )
   }

   function executeScrollToTop (){
    console.log(`Calling scroll function`)
    
    window.scrollTo(0, 0)  
   }

    return(
                <div class="col-6 col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <img class="rounded-circle" alt="70x70" src="https://placehold.it/70x70" data-holder-rendered="true" />
                            </div>
                            
                            <div class="card-body">
                            <Link to={'/user/'+id}>
                                <h5 class="card-title" onClick={executeScrollToTop}>{firstName} {lastName}</h5>
                            </Link>
                                <a href="#" class="btn btn-primary">Follow</a>
                            </div>
                        </div>
                    </div>
    )

}

export default FollowerCard;
