import React, { useEffect, useContext } from 'react';
import { Card } from './Card';
import { ProductosContext } from '../context/ProductosContext';

export const Catalog = () => {

    const { loadProducts, loadProductsAsync, products } = useContext(ProductosContext);

    const obtenerProductos = async () => {
        console.log('Antes');

        await loadProductsAsync();

        console.log('Despues');
    }

    useEffect(() => {
        obtenerProductos();
    }, []);

    if( products.length === 0 ){
        return (<h1>Cargando...</h1>);
    }

    return (
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Catálogo de Productos</h2>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay= { 100 }>
                    <div className="col-lg-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">Todos</li>
                            <li data-filter=".filter-coordinacion">Coordinación</li>
                            <li data-filter=".filter-motricidad">Motricidad</li>
                            <li data-filter=".filter-musicales">Musicales</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay= { 200 }>
                    {
                        ( products.length > 0 ) &&
                        (
                            products.map( (prod) => (
                                <Card key = { prod.id } producto = { prod } />
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    )
}
