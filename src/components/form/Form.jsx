import React from 'react';
import olxLogo from "../../images/olx_logo.png";
import "../form/form.css";
import avatartImage from "../../images/avatar-img.png";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function Form() {
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1 ms-4">
                        <img width="40px" src={olxLogo} alt="olx-logo" />
                    </span>
                </div>
            </nav>

            <div className="container form-container">
                <h2 className='text-center pt-5' >Post your Data</h2>
                <form className='rounded olx-form'>

                    <fieldset className='fieldset'>

                        <div className='px-4 py-3'>
                            <h2>Selected Category</h2>
                            <p>Mobiles / tablets</p>

                        </div>
                        <hr />
                        <div className="px-4 py-3">
                            <h2 className=''>Include Some Details</h2>
                            <label className='' for="title" >Add title</label>
                            <input className='input-title mb-3 same-styling' type="text" name="" id="title" />
                            <label for="description">Description</label>
                            <textarea className='text-area rounded' name="" id="escription" cols="30" rows="3" />

                            <p className="mb-0">Brand</p>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value={1}>Smasung</option>
                                <option value={2}>Apple</option>
                                <option value={3}>vivo</option>
                            </select>
                        </div>
                        <hr />
                        <div className="px-4 py-3">
                            <label for="price">Price</label>
                            <input className='price same-styling' type="number" name="" id="price" />

                            <div className="uploadPhotoes my-3">
                                <h2 className='mt-2'>Upload your Pictures</h2>
                                <div className="row d-flex">
                                    <div className="col-12 col-md-4 upload-photo d-flex flex-column text-center p-4">
                                        <label for="file-input-1"><ion-icon name="camera-outline"></ion-icon></label>
                                        <input type="file" id='file-input-1' />
                                    </div>
                                    <div className="col-12 col-md-4 upload-photo d-flex flex-column text-center p-4">
                                        <label for="file-input-2"><ion-icon name="camera-outline"></ion-icon></label>
                                        <input type="file" name="" id="file-input-2" />
                                    </div>
                                    <div className="col-12 col-md-4 upload-photo d-flex flex-column text-center p-4">
                                        <label for="file-input-3"><ion-icon name="camera-outline"></ion-icon></label>
                                        <input type="file" name="" id="file-input-3" />
                                    </div>
                                </div>
                            </div>

                            <div className="location mb-4">
                                <h2>your Add location</h2>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>

                            <hr />

                            <div className="review-details my-4">
                                <h2>REVIEW YOUR DETAILS</h2>
                                <div className="avatar">
                                    <img width="100px" src={avatartImage} alt="avatar-image" />
                                    <label className='ms-3' htmlFor="name">Name :</label>
                                    <input className='same-styling' type="name" id='name' />
                                </div>
                                <p>your phone number</p>
                            </div>
                            <div className="show-my-phone-num d-flex justify-content-between">
                                <h2>show my phone number in Ads</h2>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                                </div>
                            </div>
                        </div>

                        <hr className='mb-0'/>


                        <button type="submit" className="submit-btn">Post Now</button>

                    </fieldset>

                </form>
            </div>
        </div>
    )
}

export default Form;
