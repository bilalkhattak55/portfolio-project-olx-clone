import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../card/card.css";
import cardImage from "../../images/card-1.jfif"
import { Link } from "react-router-dom"
// import { color } from '@mui/system';
// import { getAllPosts } from '../../helpers/helpers';
// import AddDetails from '../addDetails/AddDetails';
// import { height } from '@mui/system';

const Card = ({ getindex }) => {
    // const [showDetails, setShowDetails] = useState(false)
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
          setPosts(response.data);
        }).catch((err)=> console.log(err))
        
      }, []);

    // const changeToDetails = () => {
    //     setShowDetails(true)
    // }
    // const { description } = props;

    // // Shorten the description to the first 100 characters
    // const shortenedDescription = description.substring(0, 100) + '...';

    const cardClick = (index) => {
        getindex(index)
        console.log("item=>",index)
        // console.log("index=>",index)
        
    }
    return (
       <div>
      {/* <Link onClick={hand} style={{textDecoration:'none', color:"black"}} to='/add-details'> */}
          <div className='container d-flex my-5 text-center '>
            {posts && posts.map((item, index) => (
                
                <Link style={{textDecoration:'none', color:"black"}}  to='/add-details' >
                <div  key={index}  onClick={()=> cardClick(item)} className="col-12 col-md-4 col-lg-3 gy-3 card">
                    <img src={item.image} style={{height:"150px", objectFit:"conatain", backgroundColor:'black', width:"100%" }} className="card-img-top" alt="Card-image" />
                    <div className="card-body">
                        <p style={{color:"red"}}>{item.id}</p>
                        <p>{item.title.substring(0,30)}</p>
                        <h5 className="card-title">{item.price}</h5>
                        <p className="card-text">{item.description.substring(0, 30)}</p>
                    </div>
                </div>
                </Link>

            ))
            }
        </div>
        {/* </Link>   */}
        </div>

       

    

            

      
       
    
       
    
        
        
        
        
       
    )
}

export default Card;
