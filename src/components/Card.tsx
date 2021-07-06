import React, { useContext } from 'react';
import { Producto } from '../interfaces/appInterfaces';
import { ProductosContext } from '../context/ProductosContext';

type Props = {
    producto: Producto;
}

export const Card = ({ producto }: Props) => {

    const { setCarrito, carrito } = useContext(ProductosContext);

    const agregarCarrito = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      const newProducto = {
        Producto: producto.Producto,
        Precio: producto.Precio,
        Cantidad: 1
      }

      setCarrito([
        ...carrito,
        newProducto
      ]);
    }

    return (
        <div className="col-lg-3 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap border shadow p-3 mb-5 bg-body rounded">
            {
              (producto.Foto.length > 0) &&
              (
                <>
                  <img src= { producto.Foto } className="img-fluid" alt="" /> 
                  <div style={{ backgroundColor: '#F5D21E', paddingRight: 10, borderRadius: 50, marginInline: 10 }}>
                    <h4 className="d-flex justify-content-end" style = {{ color: '#FF1616', fontSize: 30, fontWeight: 'bold' }}>{ ( producto.Disponible ) ? '$ ' + producto.Precio : 'No Disponible'}</h4>
                  </div>
                </>
              )
            }
            <div className="portfolio-info">
              <p>{ producto.Descripcion }</p>
            </div>
            <div className="portfolio-links">
              {
                ( producto.Disponible ) &&
                ( <a href="/#" onClick = { (e: React.MouseEvent<HTMLElement>) => agregarCarrito(e) } data-gallery="portfolioGallery" className="portfolio-lightbox" title={ producto.Producto }><i style = {{ fontSize: 40 }} className="bi bi-plus"></i></a> )
              }
            </div>
          </div>
        </div>
    )
}
