import React from 'react';
import data from '../data';
import Rating from "../components/Rating";
import { Link, useParams } from 'react-router-dom';
export default function ProductScreen(props){
    const {id} = useParams ();
    const product=data.products.find((x)=>x._id === (id))

return (
<div>
    <Link to="/">Back to Homepage</Link>
        <div className="row top">
            <div className="col-2">
            <img className="large" src={product.image} alt={product.name}></img>
            </div>

            <div className="col-1">
            <ul>
                <li><h1>{product.name}</h1></li>
                <li> <Rating rating={product.rating} numReview={product.numReview}></Rating></li>
                <li>Price: ${product.price} </li>
                <li>Description: <p>{product.description}</p></li>
            </ul>
            </div>

            <div className="col-1">
                <div className="card card-body"> 
                    <ul>
                        <li>
                            <div className="row">
                                <div><h2> Price</h2></div>
                                <div className="price">${product.price}</div>
                            </div>
                        </li>

                        <li>
                            <div className="row">
                                <div><h2>Status:</h2></div>
                                <div>
                                    {product.countInStock > 0 ? (<span className="success"><h2>In Stock</h2></span>):
                                    (<span className="error"><h2>Out of Stock</h2></span>)}
                                </div>
                             </div>
                        </li>

                        <li>
                            <button className="primary block">Add to Cart </button>
                        </li>
                    </ul>
                </div>
            </div>

    </div>
</div>
);
}