import React from 'react'

export const Hero = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>¿Qué son los juguetes didácticos?</h1>
                        <h2>Es una técnica de enseñaza que se ejecuta a través del entretenimiento que tiene por objetivo un aprendizaje lúdico. Los juguetes didácticos ayudan a potenciar las habilidades cognitivas en la etapa de la infancia.</h2>
                        <div>
                            <a href="#about" className="btn-get-started scrollto">Catalogo de Productos</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        {/*<img src="assets/img/hero-img.svg" className="img-fluid animated" alt="" />*/}
                        <img src="assets/Cognitilab2.png" className="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
