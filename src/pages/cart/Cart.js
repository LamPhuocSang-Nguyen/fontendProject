import Cart from "../../components/cart/Cart"
import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export function ShowCart(){
    return (
        <div>
          <Header />
          <Cart></Cart>
            <div>
                <h1>Và 1 vài thông tin khác</h1>
            </div>
          <Footer />
        </div>
      )
}