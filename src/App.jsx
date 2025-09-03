import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router'
import Sidebar from './components/Sidebar'
import Product from './pages/productPage/Product'
import NotFound from './pages/NotFound'
import Cart from './pages/cart/Cart'
import ProductDetails from './pages/productPage/ProductDetails'

const App = () => {
  return (
    <div>
<BrowserRouter>

<div className="flex flex-col h-full">

  <Header/>

  <div className="flex flex-1 pt-14">

    <Sidebar/>

    <main className='flex-1  p-6 bg-gray-100  pt-8 ml-36 h-full'>

      <Routes>
        <Route path='/product' element={<Product/>}/>
           <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </main>
  </div>

</div>
</BrowserRouter>
    </div>
  )
}

export default App
