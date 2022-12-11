import React from 'react';
import "../addDetails/add-details.css";
import olxLogo from "../../images/olx-logo2.jpg";
import picThree from "../../images/pic3.jpg";
import addTwo from "../../images/ad2.jpg";
import proOne from "../../images/pro_1.jpg";
import proTwo from "../../images/pro_2.jpg"
import proThree from "../../images/pro_3.jpg";
import proFour from "../../images/pro_4.jpg";
import picTwo from "../../images/pic2.jpg";
import locationPic from "../../images/location.png"

// let contry = document.getElementById('contry');
// let moving = document.getElementById('moving');
// let text = document.getElementById('text');
// let list = document.getElementById('list');


// // contry.addEventListener('click', () => {
// //     list.classList.toggle('hidden');
// //     moving.classList.toggle('roted')
// // });
// // function myfunction(omkar) {
// //     text.innerHTML = omkar;
// // }


// let eng_tag = document.getElementById('eng_tag');
// let hin_eng = document.querySelector('.hin_eng');
// let language = document.querySelector('.language');


// // language.addEventListener('click', () => {
// //     hin_eng.classList.toggle('display_div');
// // });
// // function languageolx(anyone) {
// //     eng_tag.innerHTML = anyone;
// // }

// let girl_img_id = document.getElementById('girl_img_id');
// let gropdwonid = document.getElementById('gropdwonid');

// // girl_img_id.addEventListener('click', () => {
// //     gropdwonid.classList.toggle('block_div')
// // });




// //  =============================== * ad 2 * ============================================



// let adicon2 = document.getElementById('adicon2');
// let ads_img2 = document.querySelector('.ads_img2');

// // adicon2.addEventListener('click', () => {
// //     ads_img2.style = 'display: none';
// // });




// //  =============================== * product img* ============================================


// // const swiper = new Swiper('.swiper', {

// //     loop: true,


// //     pagination: {
// //         el: '.swiper-pagination',
// //     },


// //     navigation: {
// //         nextEl: '.swiper-button-next',
// //         prevEl: '.swiper-button-prev',
// //     },

// // });


function AddDetails() {
  return (
    <div>
       <div>
        <div className="hedder">
          <div className="navbar">
            <img src={olxLogo} />
            <div className="contry_select" id="contry">
              <div className="select">
                <p id="text"> Select Your Contry </p>
                <i className="fa-solid fa-chevron-down" id="moving" />
              </div>
              <ul className="option_box" id="list">
                <li className="option" onclick="myfunction('USA')">
                  <i className="fa-solid fa-location-dot" />
                  <p>USA</p>
                </li>
                <li className="option" onclick="myfunction('Canada')">
                  <i className="fa-solid fa-location-dot" />
                  <p>Canada</p>
                </li>
                <li className="option" onclick="myfunction('India')">
                  <i className="fa-solid fa-location-dot" />
                  <p>India</p>
                </li>
                <li className="option" onclick="myfunction('Pakistan')">
                  <i className="fa-solid fa-location-dot" />
                  <p>Pakistan</p>
                </li>
                <li className="option" onclick="myfunction('New York')">
                  <i className="fa-solid fa-location-dot" />
                  <p>New York</p>
                </li>
              </ul>
            </div>
            <div className="search_box">
              <input type="text" className="searchclass" id="searchid" placeholder="Find Cars, mobile phone and More...." />
              <p> <i className="fa-solid fa-magnifying-glass" /> </p>
            </div>
            <div className="language">
              <p id="eng_tag"> English </p>
              <ul className="hin_eng">
                <li onclick="languageolx('English')"> English </li>
                <li onclick="languageolx('हिन्दी')">हिन्दी</li>
              </ul>
            </div>
            <div className="messeage">
              <i className="fa-regular fa-comment" />
            </div>
            <div className="messeage">
              <i className="fa-regular fa-bell" />
            </div>
            <div className="your_logo">
              <div className="girl_img" id="girl_img_id">
                <img src={picThree} />
              </div>
              <div className="dropdwon" id="gropdwonid">
                <div className="nameandimg">
                  <img src={picThree} />
                  <p> Puja Varma </p>
                </div>
                <ul>
                  <li>
                    <i className="fa-regular fa-user" />
                    <p>My Account</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-box" />
                    <p>My Orders</p>
                  </li>
                  <hr />
                  <li>
                    <i className="fa-regular fa-circle-question" />
                    <p>Help</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-gear" />
                    <p>Setting</p>
                  </li>
                  <hr />
                  <li>
                    <i className="fa-solid fa-right-from-bracket" />
                    <p>Log Out</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="selling_page">
              <button> <i className="fa-solid fa-plus" />
                <p>SELL</p>
              </button>
            </div>
          </div>
        </div>
        {/* =============================== * ad 1 * ============================================ */}
        <div className="ads_img2">
          <img src={addTwo} />
          <i className="fa-regular fa-rectangle-xmark" id="adicon2" />
        </div>
        {/* =============================== * product img * ============================================ */}
        <div className="product_img">
          <div className="image_discription">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide"> <img src={proOne} /> </div>
                {/* <div className="swiper-slide"> <img src={proTwo} /></div>
                <div className="swiper-slide"> <img src={proThree} /></div>
                <div className="swiper-slide"> <img src={proFour} /></div> */}
              </div>
              <div className="swiper-pagination" />
              <div className="swiper-button-prev" id="prev" />
              <div className="swiper-button-next" id="next" />
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
                <h3> ₹3,500</h3>
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
                <img src={picTwo} />
                <div>
                  <h2> AsKAki </h2>
                  <p>Member since Nov 2021</p>
                </div>
              </div>
              <a href="olx_chatbox.html"> Chat with Seller</a>
            </div>
            <div className="box" id="box3">
              <h2> Posted in </h2>
              <p>Bandra East, Mumbai</p>
              <img src={locationPic} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddDetails
