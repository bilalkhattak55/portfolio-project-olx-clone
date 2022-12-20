// import React, { useEffect, useState } from 'react';
import "../addDetails/add-details.css";
import addTwo from "../../images/ad2.jpg";
import proOne from "../../images/pro_1.jpg";
import picTwo from "../../images/pic2.jpg";
import locationPic from "../../images/location.png";
import { useEffect, useState } from "react";
import axios from "axios";
// import { getAllPosts } from '../../helpers/helpers';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';



function AddDetails({gettindx}) {
  const [data,setData]=useState("")
  console.log(data);
  // const singleProduct = () => {
  //   const { id } = useParams();
  // }

//   useEffect(() => {
// setSingleProduct(`${id}?id=${id}`)
//   }, [])
useEffect(()=>{

  axios.get(`https://fakestoreapi.com/products/${gettindx}`).then((res)=>{
  setData(res.data)
  }).catch((err)=>{
  console.log(err);
  })
  
  
  },[])
  return (

    <div>
      {/* =============================== * ad 1 * ============================================ */}
      <div className="ads_img2">
        <img src={addTwo} alt='img' />
      </div>
      {/* =============================== * product img * ============================================ */}

      <div className="product_img d-flex flex-row">
        <div className="image_discription">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide"> <img src={data.image} alt='img' /> </div>

            </div>
            <div className="swiper-pagination" />

          </div>
          <div className="descriptiopn">
            <h3> descriptiopn </h3>
            <p>Convert your TV into smart TV using HDMI of your TV. All online platform available downloaded. <br />
              Include MI stick, Bluetooth remote, Power adapter. <br />
              Condition new. <br />
              MRP 3,500</p>
          </div>
        </div>
        <div className="product_details">
          <div className="box">
            <div className="price">
              <h3>Rs: 6,500</h3>
              <div>
                <p><i className="fa-solid fa-share-nodes" /> </p>
                <p> <i className="fa-regular fa-heart" /> </p>
              </div>
            </div>
            <span> Mi TV Stick </span>
            <div className="location">
              <p>Ghatkopar West, Mumbai, Maharashtra</p>
              <p>Today</p>
            </div>
          </div>
          <div className="box" id="box2">
            <p className="Seller_description"> Seller Description </p>
            <div className="seller_detail">
              <img src={picTwo}  alt='img'/>
              <div>
                <h2> Bilal khattak</h2>
                <p>Member since Nov 2021</p>
              </div>
            </div>

          </div>
          <div className="box" id="box3">
            <h2> Posted in </h2>
            <p>Karachi, Pakistan</p>
            <img src={locationPic}  alt='img'/>
          </div>
        </div>
      </div>

    </div>

  )
}

export default AddDetails;
