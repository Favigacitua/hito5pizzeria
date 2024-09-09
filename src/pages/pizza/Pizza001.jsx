import React, { useEffect, useState } from 'react';
import { Header } from '../../component/header/Header';
import Button from 'react-bootstrap/Button';

import './pizza.css';

export const Pizza001 = () => {
    
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas/p001');

                if (!response.ok) {
                    throw new Error('No se puede cargar correctamente');
                }

                
                const data = await response.json();

                
                if (data && data.id === 'p001') {
                    setPizza(data);
                } else {
                    setError('Pizza no encontrada');
                }

            } catch (error) {
                console.error('Error al cargar la pizza:', error);
                setError('Hubo un problema para cargar la información');
            }
        };

        fetchPizza();
    }, []);

    return (
        <>
            <Header />
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            {pizza && (
                <div className='pizzaContainer'>
                    <img
                        src={pizza.img}
                        alt={pizza.name}
                        style={{ width: '500px', height: 'auto' }}
                    />
                    <div className='content'>
                        <h2 style={{fontWeight:'bold', paddingBottom:'1rem'}}>{pizza.name}</h2>
                        <p style={{fontSize:'18px', color:'gray', paddingBottom:'1rem'}}>{pizza.desc}</p>
                        
                        {pizza.ingredients.map((ingredient, index) => (
                            <p key={index}>&#x1f355; {ingredient}</p>
                        ))}
                        <div style={{ height: '1px', backgroundColor: 'grey', margin: '10px 0', width: '100%', marginTop:'2rem' }}></div>
                    
                        <h3 style={{fontWeight:'bold', color:'black'}}>Precio: ${pizza.price}</h3>
                        <Button variant="dark" style={{height:'3rem', float:'right'}}>Añadir &#x1F6D2;</Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Pizza001;
