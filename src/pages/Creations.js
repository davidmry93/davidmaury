import React from 'react';
import { BsStars, BsHandThumbsUpFill, BsLaptop } from 'react-icons/bs';
import { SiFastapi } from 'react-icons/si';
import { BiShare } from 'react-icons/bi';


import { NavLink } from "react-router-dom";

const Creations = () => {
    return (
        <main class="creations">
            <section class="small-section">
                <article class="container">
                    <h2>Découvrez mes créations</h2>
                    <p>Et laissez-vous inspirer par mon protfolio. Vous retrouverez ici mes créations au grès de nos collaborations.</p>
                </article>
            </section>
            <section class="side-content">
                <article class="container">
                    <div class="left">
                        <h3>Mon 1er projet client :
                            <span>la Compagnie Imagine</span>
                        </h3>
                        <div class="sub">
                            <div>
                                <BsLaptop />
                            </div>
                            <div class="content">
                                <h4>Un site vitrine</h4>
                                <p>Après un recueil des besoins, la solution d'un site vitrine mettant en avant les prestations de la compagnie est privilégié : un design unique et des animations magiques pour coller au mieux avec l'identité de son propriétaire.</p>
                            </div>
                        </div>
                        <div class="sub">
                            <div>
                                <BsStars />
                            </div>
                            <div class="content">
                                <h4>Des fonctionnalités complètes</h4>
                                <p>Le site est administrable via un back-office : une interface administrateur avec login permettant de suivre l'activité et de mettre à jour le contenu du site (suivi des messages clients et des commentaires utilisateurs, ajout de nouveaux médias, etc.).</p>
                            </div>
                        </div>
                        <div class="sub">
                            <div>
                                <BsHandThumbsUpFill />
                            </div>
                            <div class="content">
                                <h4>Une solution web</h4>
                                <p>Chaque phase de conception, du design à la mise en ligne, s'est déroulée en collaboration avec la compagnie et dans le respect des standards du web. Proprement référencé, le site apparaît en première page des recherches Google sur la compagnie. </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/img/cie_imagine.png`} alt="" />
                    </div>
                </article>
            </section >
            <section class="side-content">
                <article class="container">
                    <div class="left">
                        <h3>Mon site React :
                            <span>davidmaury.fr</span>
                        </h3>
                        <div class="sub">
                            <div>
                                <SiFastapi />
                            </div>
                            <div class="content">
                                <h4>Fluidité et robustesse</h4>
                                <p>Pour mon second site personnel, j'ai opté pour le framework front-end React. A la pointe de la technologie web, la quasi-totalité du code est exécutée par votre navigateur pour une expérience de navigation optimale.</p>
                            </div>
                        </div>
                        <div class="sub">
                            <div>
                                <BiShare />
                            </div>
                            <div class="content">
                                <h4>Un espace partagé</h4>
                                <p>Ayant à coeur de vous proposer le meilleur aperçu de ce qu'un site peut offrir en 2022, vous pouvez consulter le code source de mon site sur ma page GitHub.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/img/davidmaury.png`} alt="" />
                    </div>
                </article>
            </section >
            <section class="home-4">
                <article class="container">
                    <h2>On travaille ensemble ?</h2>
                    <nav class="nav-secondary">
                        <NavLink to="/contact">Formulaire de contact</NavLink>
                        <a href="#">davidmry93@gmail.com</a>
                    </nav>
                </article>
            </section>
        </main>
    );
};

export default Creations;