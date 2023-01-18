import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Productt from '../../images/product-12.jpg'
import { Link } from 'react-router-dom';
import "../categories/category.css"
import VisibilityIcon from '../../images/vsblty.svg';
import VisibilityIconn from '../../images/vsblty1.svg';

const CategoryJewellary = () => {
    const [dataa, setDataa] = useState([]);
    const [active, setActive] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/jewelery")
            .then((res) => {
                setLoading(false)
                // console.log("resData=>", res.data)
                setDataa(res.data)
            })
            .catch((err) => console.log(err))
    }, [])
   

    const viewChangeLarge = () => {
        //     const bigOne = document.querySelector('.bigOne').classList.remove("jewellary-cardd")
        //     bigOne.map((itm)=> {
        //         return (
        //             itm.classList.add('jewellary-cardd-big')
        //         )
        //     })

        setActive(true)

    }

    const viewChangeSmall = () => {
        setActive(false)
    }

    console.log("dataaa=>>>>", dataa)
    return (
        <div className="container">
            <div className='row container d-flex'>

                <div className="side-menu col-12 col-md-4">
                    <h2 className='mt-4'>Jewellaries in karachi, pakistan</h2>
                    <hr className='mt-5' />
                    <h2>Filter</h2>
                    <hr />
                    <h2>Categories</h2>

                    {/* //////Navbar/////// */}
                    <div className="categories-navbar">
                        <div className="flex-shrink-0 p-3 bg-white" style={{ width: '280px' }}>
                            <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                                <svg className="bi pe-none me-2" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
                                <span className="fs-5 fw-semibold">Collapsible</span>
                            </a>
                            <ul className="list-unstyled ps-0">
                                <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                                        Home
                                    </button>
                                    <div className="collapse" id="home-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-5">
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">Overview</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">Updates</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                        Dashboard
                                    </button>
                                    <div className="collapse" id="dashboard-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-5">
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">Overview</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">Weekly</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">Monthly</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Annually</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                        Orders
                                    </button>
                                    <div className="collapse" id="orders-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-5">
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">New</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">Processed</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">Shipped</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Returned</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="border-top my-3" />
                                <li className="mb-1">
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                        Account
                                    </button>
                                    <div className="collapse" id="account-collapse" style={{}}>
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-5">
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">New...</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">Profile</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded mb-1">Settings</a></li>
                                            <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Sign out</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* ///////Navbar ended///////// */}


                </div>

                {/* //////// */}

                <div className="jewellary-card col-12 col-md-8">

                    <span className='d-flex jewellary-span'>
                        <p className='ms-2'>Only photoes /</p>
                        <h2 className='ms-3 me-2'> View</h2>
                        {
                            active === true
                                ?
                                <img width={35} onClick={viewChangeSmall} src={VisibilityIconn} alt="icon" />
                                :
                                <img width={35} onClick={viewChangeLarge} src={VisibilityIcon} alt="icon" />

                        }


                        {/* <button onClick={viewChange}>viewChange</button> */}
                        {/* <button onClick={()=> setActive('itt')} >viewChange</button> */}
                        <h2 className='ms-4'>Sort by</h2>

                    </span>
                    <hr className='mt-0' />
                    <div className="jewellary-card">
                        <div className="row">
                            {dataa.map((itemm, index) => {
                                return (
                                    <div key={itemm.id} className="col-12">
                                        <Link style={{ textDecoration: 'none', color: "black" }} to={`/category-details/${itemm.id}`} >
                                            <div className={`m-4 border rounded bigOne ${active === true ? 'jewellary-cardd-big' : 'jewellary-cardd'} `}>
                                                {/* <div className={`m-4 border rounded bigOne ${ active === itt ? 'jewellary-cardd-big' : 'jewellary-cardd' }`}> */}

                                                <div style={{ backgroundColor: 'black', display: "flex", alignItems: 'center', justifyContent: 'center' }} className={`text-center ${active === true ? 'jewellary-img-div-big' : 'jewellary-img-div'}`}>
                                                    {/* <img src={itemm.image}className="card-img-top big jewellary-img" alt="Card-image" /> */}
                                                    <img src={itemm.image} className={`card-img-top big ${active == true ? 'jewellary-img-big' : 'jewellary-img'}  `} alt="Card-image" />
                                                </div>

                                                <div className="ms-3 card-body p-4">
                                                    {/* <p style={{ color: "red" }}>{item.id}</p> */}
                                                    <p>{itemm.title.substring(0, 30)}</p>
                                                    <h5 className="card-title">{itemm.price}</h5>
                                                    <p className="card-text">{itemm.description.substring(0, 30)}</p>
                                                </div>

                                            </div>

                                        </Link>

                                    </div>)

                            })
                            }
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default CategoryJewellary