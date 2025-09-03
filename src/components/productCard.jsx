import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { decrement, increment, selectCounter, setCounter } from "../redux/CounterSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const count = useSelector((state) => selectCounter(state, product.id));

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

    const handleFirstAdd = () => {
    dispatch(increment(product.id));
    navigate(`/product/${product.id}`);
  };

  
  // useEffect(() => {
  //   const savedData = localStorage.getItem(`counter_${product.id}`);
  //   if (savedData) {
  //     dispatch(setCounter({ id: product.id, value: Number(savedData) }));
  //   }
  // }, [product.id, dispatch]);

  // useEffect(() => {
  //   localStorage.setItem(`counter_${product.id}`, count);
  // }, [count, product.id]);

  return (
    <div className="bg-white shadow-md rounded-lg">
      <div
        className="w-full sm:w-[20%] lg:w-[100%] flex flex-col"
        onClick={handleNavigate}
      >
        <img
          src={product.product_img}
          alt={product.product_name}
          className="w-60 h-60 object-cover mb-4 rounded"
        />
        <div className="p-3">
          <h4 className="text-lg font-semibold">{product.product_name}</h4>
          <p className="text-gray-500">Quantity: {product.qauntity}</p>
          <p className="text-blue-600 font-bold">₹{product.price}</p>
        </div>
      </div>



      {count===0 ?(
        <>
        <div className="flex "> 
         <button onClick={handleFirstAdd}> Add Item</button>
         </div>
        </>
      ) : (
        <>
        <div className="flex items-center mb-4 justify-center gap-4">
       
        <button onClick={() => dispatch(decrement(product.id))}> - </button>
        <h4>{count}</h4>
        <button onClick={() => dispatch(increment(product.id))}> + </button>
        </div>
        </>
      )
      
      }
    </div>
  );
};

export default ProductCard;
