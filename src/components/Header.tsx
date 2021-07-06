import React, { useContext, useEffect, useState } from 'react';
import { ProductosContext } from '../context/ProductosContext';

export const Header = () => {

    const { carrito } = useContext(ProductosContext);

    const [cantidad, setCantidad] = useState(0);

    const sumarCarrito = () => {
      setCantidad( carrito.length );
    }

    useEffect(() => {
      sumarCarrito()
    }, [ carrito ]);

    console.log(carrito.length);

    return (
        <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
    
          <div className="logo">
            <h1 className="text-light"><a href="index.html"><span>Cognitilab</span></a></h1>
          </div>
    
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a className="getstarted scrollto" href="#about">Catalogo de Productos</a></li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  <span className="badge rounded-pill" style={{ fontSize: 15, position: 'absolute', right: 0,top: 0, backgroundColor: '#eb5d1e' }}>{ cantidad }</span>
                  <i style={{ fontSize: 40, color: '#eb5d1e' }} className="bi bi-cart2"></i>
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
        </div>
      </header>
    )
}
