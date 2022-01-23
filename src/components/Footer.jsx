import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        display: "FLY London Outlet",
        path: "/about"
    },
    {
        display: "FLY London Terazije     ",
        path: "/about"
    },
    {
        display: "FLY London Kralja Petra        ",
        path: "/about"
    },
    {
        display: "FLY London Merkator        ",
        path: "/about"
    },
    {
        display: "FLY London Beo Shopping        ",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Kako kupiti",
        path: "/about"
    },
    {
        display: "Uslovi korišćenja",
        path: "/about"
    },
    {
        display: "Načini plaćanja",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Kontakt
                        </div>
                        <div className="footer__content">
                            <p>
                                
Beogradskog Bataljona 38, 11000 Beograd
                            </p>
                            <p>
                            office@dip-trade.co.rs
                            </p>
                            <p>
                            011/23-94-224

                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                        Prodajna mesta

                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Informacije
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                        DIP-TRADE d.o.o. je privatno preduzeće, osnovano 1998. godine. U svom višegodišnjem poslovanju bavi se uvozom, izvozom, veleprodajom i maloprodajom obuće, odeće, aksesoara, sportske opreme i pratećeg programa i proizvodnjom naočara za sunce.

U našoj ponudi možete pronaći brojne svetske robne marke obuće i aksesoara vrhunskog kvaliteta koje zastupamo. Robne marke obuće koje zastupamo su FLY LONDON, SOFTINOS, FOREVA, ASPORTUGUESAS, LEMON JELLY, TATUAGGI, JJ HEITOR, HELENE ROUGE, EXCEED, THE FLEXX, TAKE ME, RIA MENORCA, MARILA, STARLOVE, ART, VERBENAS, BEARPAW. Robne marke koje se bave proizvodnjom kožne galanterije a nalaze se u našoj ponudi su UGGARI i PULICATI.U našoj ponudi nalaze se naočare za sunce robnih marki FLY LONDON EYEWEAR i DIP SUNGLASSES.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
