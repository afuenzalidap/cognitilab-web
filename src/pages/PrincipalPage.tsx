import React, { useContext, useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Main } from '../components/Main';

export const PrincipalPage = () => {

    return (
        <>
            <Header />
            <Hero />
            <Main />
            <Footer />
        </>
    )
}
