

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AllProduct } from '../../constant/productData';
import SearchBar from '../../components/searchBar';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectCounter } from '../../redux/CounterSlice';


const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filterCard, setFilterCard] = useState('')
    useEffect(() => {
        if (id) {
            const productItem = AllProduct.find((item) => item.id === +id)
            console.log(productItem, "idxxx")
            setFilterCard(productItem)

        }

    }, [id])
    const [query, setQuery] = useState("")
    const handleSearch = (term) => {
        setQuery(term)
        console.log(query)
    }

    const dispatch = useDispatch();
    const productId = Number(id);
    const count = useSelector((state) => selectCounter(state, productId));

    return (
        <div>
            <div className="flex justify-between">

                <button
                    className="bg-red-500 px-4 py-2 rounded mb-4"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>

                <SearchBar onsearch={handleSearch} delay={400} />


            </div>
            <div className='flex justify-between w-[100%]'>
                <div className=" p-4 rounded-lg  max-w-md w-[100%] h-[100%]">
                    <img src={filterCard ? filterCard.product_img : "img"} alt="" className="w-full h-120 rounded-xl object-cover" style={{ mixBlendMode: 'darken' }} />

                </div>
                <div>
                    <h2>{filterCard.product_name}</h2>
                    <h2>{filterCard.product_type}</h2>
                    <p>{filterCard.description}</p>

                    <p>Quantity Left: {filterCard.qauntity}</p>
                    <h4 className='text-blue-600'> Price: ₹{filterCard.price}</h4>

                    <p></p>

                </div>
            </div>
            <div className="flex items-center mb-4 justify-center gap-4">

                <button onClick={() => dispatch(decrement(productId))}> - </button>
                <h4>{count}</h4>
                <button onClick={() => dispatch(increment(productId))}> + </button>
            </div>
        </div>
    )
}

export default ProductDetails
