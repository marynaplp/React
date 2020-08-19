import React from "react";
//import {useParams} from "react-router-dom"

function Product({match}) {
    return (
      <div className="product">{`Product is a ${match.params.productId}`}</div>
    );
}
export default Product