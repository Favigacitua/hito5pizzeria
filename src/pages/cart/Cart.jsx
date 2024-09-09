import React, { useState, useEffect } from 'react';
import { PizzaTarjeta } from '../../component/pizzatarjeta/PizzaTarjeta';



export const Cart = ({ cart, setCart }) => {
  const [lista, setLista] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLista(cart);
  }, [cart]);

  useEffect(() => {
    calcularTotal();
  }, [lista]);

  const calcularTotal = () => {
    let totalPizzas = 0;
    lista.forEach(pizza => {
      const price = pizza.price || 0;
      const count = pizza.count || 0;
      totalPizzas += price * count;
    });
    setTotal(totalPizzas);
  };

  const handleIncrement = (id) => {
    const newList = lista.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setLista(newList);
    updateCart(newList);
  };

  const handleDecrement = (id) => {
    const newList = lista.map((pizza) => {
      if (pizza.id === id) {
        if (pizza.count === 1) {
          return null; 
        }
        return { ...pizza, count: pizza.count - 1 };
      }
      return pizza;
    }).filter(pizza => pizza !== null); 
    setLista(newList);
    updateCart(newList);
  };

  const updateCart = (newList) => {
    localStorage.setItem('cart', JSON.stringify(newList));
    setCart(newList);
  };


  return (
    
    <div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop:'6rem', height:'100%'}}>
        {lista.length === 0 ? (
          <p style={{margin:'3rem', width: '800px'}}>No hay pizzas en el carrito.</p>
        ) : (
          lista.map(pizza => (
            <PizzaTarjeta 
              key={pizza.id}
              pizza={pizza}
              increment={handleIncrement}
              decrement={handleDecrement}
            />
          ))
        )}
      </div>
      <h4 style={{margin:'5rem', fontWeight: 'bold', width: '800px',paddingBottom:'3rem'}}>Total: ${total}</h4>
    </div>
  );
};

export default Cart;
