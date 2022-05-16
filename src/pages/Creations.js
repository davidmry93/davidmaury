import React from 'react';
import { BsStars, BsHandThumbsUpFill, BsLaptop } from 'react-icons/bs';
import { SiFastapi } from 'react-icons/si';
import { BiShare } from 'react-icons/bi';


import { NavLink } from "react-router-dom";

const Creations = () => {
    return (
        <main class="creations">
            <section class="grille background-2">
                <article class="container">
                    <h2>Découvrez mes créations</h2>
                    <p>Et laissez-vous inspirer par mon protfolio. Vous retrouverez ici mes créations au grès de nos collaborations.</p>
                </article>
            </section>
            <section>
                <article class="container flex middle size-2 work">
                    <div class="left">
                        <h3>Mon 1er projet client :
                            <span class="block">la Compagnie Imagine</span>
                        </h3>
                        <div class="item">
                            <div>
                                <BsLaptop />
                            </div>
                            <div>
                                <h4>Un site vitrine</h4>
                                <p>Après un recueil des besoins, la solution d'un site vitrine mettant en avant les prestations de la compagnie est privilégié : un design unique et des animations magiques pour coller au mieux avec l'identité de son propriétaire.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div>
                                <BsStars />
                            </div>
                            <div>
                                <h4>Des fonctionnalités complètes</h4>
                                <p>Le site est administrable via un back-office : une interface administrateur avec login permettant de suivre l'activité et de mettre à jour le contenu du site (suivi des messages clients et des commentaires utilisateurs, ajout de nouveaux médias, etc.).</p>
                            </div>
                        </div>
                        <div class="item">
                            <div>
                                <BsHandThumbsUpFill />
                            </div>
                            <div>
                                <h4>Une solution web</h4>
                                <p>Chaque phase de conception, du design à la mise en ligne, s'est déroulée en collaboration avec la compagnie et dans le respect des standards du web. Proprement référencé, le site apparaît en première page des recherches Google sur la compagnie. </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={require("../assets/cie_imagine.png")} alt="" />
                    </div>
                </article>
            </section >
            <section >
                <article class="container flex middle size-2 work reverse">
                    <div>
                        <h3>Mon site React :
                            <span class="block">davidmaury.fr</span>
                        </h3>
                        <div class="item">
                            <div>
                                <SiFastapi />
                            </div>
                            <div>
                                <h4>Fluidité et robustesse</h4>
                                <p>Pour mon second site personnel, j'ai opté pour le framework front-end React. A la pointe de la technologie web, la quasi-totalité du code est exécutée par votre navigateur pour une expérience de navigation optimale.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div>
                                <BiShare />
                            </div>
                            <div>
                                <h4>Un espace partagé</h4>
                                <p>Ayant à coeur de vous proposer le meilleur aperçu de ce qu'un site peut offrir en 2022, vous pouvez consulter le code source de mon site sur ma page GitHub.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={require("../assets/davidmaury.png")} alt="" />
                    </div>
                </article>
            </section >
            <section class="background-2">
                <article class="container center">
                    <h2>On travaille ensemble ?</h2>
                    <nav>
                        <NavLink className="link-1" to="/contact">Formulaire de contact</NavLink>
                        <a class="link-2" href="#">davidmry93@gmail.com</a>
                    </nav>
                </article>
            </section>
        </main>
    );
};

export default Creations;