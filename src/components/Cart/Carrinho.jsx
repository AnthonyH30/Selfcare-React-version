import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import CarrinhoStyle from './CarrinhoStyle';


const Carrinho = () => {

  const {totalPrice, plusQntCart, minusQntCart, RemoveItemCart, cartIsOpen, setCartIsOpen, cartItens } = useContext(CartContext)

  if(cartIsOpen){
    return (
        <CarrinhoStyle>
          <div className='cart-header'>
            <p>Total: {totalPrice}</p>
            <h2>SelfCare Cart</h2>
            <button onClick={() => {setCartIsOpen(false)}} className='close-cart'><i class="fa-solid fa-times"></i></button>
          </div>
            <ul>
              {cartItens.map(item => <li key={item.id}>
                <img width='100px' src={require('../../assets/' + item.image + '.jpg')} alt={item.nome} />
                <div className='content'>
                  <div className='title-price'>
                    <h3>{item.nome}</h3>
                    <p>R$<span>{item.preco}</span></p>
                  </div>
                  <div className='qnt'>
                    <button className='add' onClick={() => {plusQntCart(item)}}><i class="fa-solid fa-plus"></i></button>
                    <p>{item.qnt}</p>
                    <button className='remove' onClick={() => {minusQntCart(item)}}><i class="fa-solid fa-minus"></i></button>
                  </div>
                  <button className='delete' onClick={() => RemoveItemCart(item.id)} title='Remove'><i class="fa-sharp fa-solid fa-trash"></i></button>
                </div>
              </li>)}
            </ul>
        </CarrinhoStyle>
      )
  } else{
    return null
  }
}

export default Carrinho;