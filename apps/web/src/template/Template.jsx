import React from 'react'
import Head from 'next/head'
import Footer from '../componentes/Footer/Footer'

export default function Template({ children }){
    return(
        <>
            <Head>
                <title>Dyppu</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            <div className="whats d-none d-sm-none d-md-block">
                <ul>
                    <li className="whatsapp"><a href="https://wa.me/+522221977805" target="_blank" rel="noreferrer" className="icon-whatsapp"></a></li>
                    <li className="phone"><a href="tel:+52(222)4244646" target="_blank" rel="noreferrer" className="icon-number"></a></li>
                </ul>
            </div>
            {children}
            <Footer />
        </>
    )
}