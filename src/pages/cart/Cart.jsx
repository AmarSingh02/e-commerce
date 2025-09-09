// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment, reset, selectCart, selectTotalCount } from '../../redux/CounterSlice';
// import { AllProduct } from '../../constant/productData';
// import { addToCart } from '../../redux/viewCartSlice';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector(selectCart);
//   const totalCount = useSelector(selectTotalCount);

//   // Prepare cart items with full details
//   const cartItems = Object.keys(cart)
//     .filter((id) => cart[id] > 0)
//     .map((id) => {
//       const product = AllProduct.find((item) => item.id === Number(id));
//       return {
//         ...product,
//         quantity: cart[id],
//         totalPrice: cart[id] * product.price,
//       };
//     });

//   const grandTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

//   // Sync the Redux "viewCart" slice whenever cart changes
//   useEffect(() => {
//     cartItems.forEach(item => {
//       dispatch(addToCart(item));
//     });
//   }, [cartItems, dispatch]);

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Your Cart ({totalCount} items)</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="space-y-4">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex justify-between items-center border p-4 rounded">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.product_img}
//                   alt={item.product_name}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{item.product_name}</h3>
//                   <p className="text-gray-600">₹{item.price} each</p>
//                   <p className="text-blue-600">Total: ₹{item.totalPrice}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <button
//                   className="bg-gray-300 px-3 py-1 rounded"
//                   onClick={() => dispatch(decrement(item.id))}
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   className="bg-gray-300 px-3 py-1 rounded"
//                   onClick={() => dispatch(increment(item.id))}
//                 >
//                   +
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                   onClick={() => dispatch(reset(item.id))}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {cartItems.length > 0 && (
//         <div className="mt-6 text-right">
//           <h3 className="text-lg font-bold">Grand Total: ₹{grandTotal}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, selectCartItems, selectTotalCount } from '../../redux/CounterSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalCount = useSelector(selectTotalCount);

  const grandTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart ({totalCount} items)</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded">
              <div className="flex items-center gap-4">
                <img
                  src={item.product_img}
                  alt={item.product_name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.product_name}</h3>
                  <p className="text-gray-600">₹{item.price} each</p>
                  <p className="text-blue-600">Total: ₹{item.price * item.quantity}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={() => dispatch(decrement(item.id))}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={() => dispatch(increment(item))}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => dispatch(reset(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <h3 className="text-lg font-bold">Grand Total: ₹{grandTotal}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
