import React from 'react';
import { NavLink } from "react-router-dom";
import { CgWorkAlt } from 'react-icons/cg';
import { BsCodeSlash } from 'react-icons/bs';


const Home = () => {
    return (
        <main class="home">
            <section class="hero">
                <article class="container flex middle">
                    <div>
                        <h1>Ensemble, concevons<span class="block">votre solution web</span></h1>
                        <p class="size-1">A la recherche d'une présence sur le web ? Un site vitrine, un blog, une solution e-commerce ?</p>
                        <nav>
                            <NavLink className="link-1" to="/profil">Mon profil</NavLink>
                            <NavLink className="link-2" to="/contact">Me contacter</NavLink>
                        </nav>
                    </div>
                    <div class="right-hero">
                        <img src={require("../assets/profil.jpg")} alt="Photo de profil - David MAURY" />
                    </div>
                </article>
            </section>
            <section class="grille">
                <article class="container center">
                    <h2>Vous cherchez un développeur web ?</h2>
                    <p class="small-container size-1" >Passionné par le développement web, je suis disponible pour vous accompagner dans votre projet : recueil des besoins, création de maquettes, intégration, développement back-end et mise en ligne.</p>
                </article>
            </section>
            <section>
                <article class="container flex middle size-2 work">
                    <div>
                        <h3>Alors,
                            <span class="block">travaillons ensemble !</span>
                        </h3>
                        <div class="item">
                            <div>
                                <BsCodeSlash />
                            </div>
                            <div>
                                <h4>Pour créer votre site</h4>
                                <p>Vous êtes restaurateur, artisan, artiste ou bien vous cherchez à créer un site pour votre entreprise ou votre association ? Je suis à votre écoute et étudie avec vous la faisibilité de votre projet via un recueil de vos besoins et une évaluation de la technologie web la mieux adaptée à la création de votre site internet.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div>
                                <CgWorkAlt />
                            </div>
                            <div>
                                <h4>Pour rejoindre votre équipe</h4>
                                <p>Vous êtes à la recherche d'une nouvelle personne dans votre équipe de devs ? Je possède plusieurs expériences dans le domaine de la programmation et du développement mais aussi celui de la gestion de projet. Ouvert à toutes les opportunités, je serai ravi d'échanger avec vous et vous invite à consulter mon profil.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={require("../assets/creation_web.png")} alt="creation web" />
                    </div>
                </article>
            </section >
            <section class="background-2">
                <article class="container center">
                    <h2>Une question, un projet ?</h2>
                    <nav>
                        <NavLink className="link-1" to="/contact">Formulaire de contact</NavLink>
                        <a class="link-2" href="#">davidmry93@gmail.com</a>
                    </nav>
                </article>
            </section>
        </main >
    );
};

export default Home;