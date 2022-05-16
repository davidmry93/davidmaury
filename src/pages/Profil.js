import React from 'react';

const Profil = () => {
    return (
        <main class="profil">
            <section>
                <article class="container">
                    <h1>Mon profil <span>en détail</span></h1>
                    <p>Je vous propose ici de découvrir mon parcours et mes compétences. Issu d'un Master en géopolitique, je me suis réorienté en 2018 dans le développement web. Je possède également des compétences en Systèmes d'Information Géographique (SIG) ainsi qu'en gestion de projet.</p>
                    <a href="#" class="button1">Consulter mon CV</a>
                </article>
            </section>
            <section class="container">
                <article class="competence">
                    <div>
                        <h3>Front-end</h3>
                        <h4>Du design à l'intégration</h4>
                        <p>Le développement front-end correspond à la partie du code permettant l'affichage d'un site internet.</p>
                        <p>Ce code est interprété par le navigateur et contient les textes, les images (HTML) ainsi que le style et les propriétés d'affichage (CSS).</p>
                        <p>Le language JavaScript fait également partie du développement front-end, puisqu'il permet d'efefctuer certaines animations (comme la petite flèche en bas à droite vous permettant de scroller la page vers le haut).</p>
                    </div>
                    <div>
                        <div>
                            <img src={require("../assets/lunacy.png")} alt="lunacy" />
                            <p><span class="bolder">Lunacy</span> - Logiciel de design inspiré de Sketch (MacOS)</p>
                        </div>
                        <div>
                            <img src={require("../assets/html.png")} alt="HTML" />
                            <p><span class="bolder">HTML5</span> - Langage de balise pour l'hypertexte. Respect de la sémantique optimisée pour le référencement naturel (SEO).</p>
                        </div>
                        <div>
                            <img src={require("../assets/css.png")} alt="HTML" />
                            <p><span class="bolder">CSS3</span> - Feuilles de style en cascade. Utilisation de SASS/SCSS pour optimiser les fonctionnalités.</p>
                        </div>
                        <div>
                            <img src={require("../assets/js.png")} alt="HTML" />
                            <p><span class="bolder">JavaScript</span> - Langage de script léger, orienté objet, principalement connu comme le langage de script des pages web, il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que Node.js, Apache CouchDB voire Adobe Acrobat.</p>
                        </div>
                        <div>
                            <img src={require("../assets/logo192.png")} alt="HTML" />
                            <p><span class="bolder">React</span> - React est un framework front-end JavaScript. il permet aux développeurs de créer de grandes applications web qui peuvent modifier les données, sans avoir à recharger la page. L'objectif principal de React est d'être rapide, évolutif et simple.</p>
                        </div>
                    </div>
                </article>
            </section>
            <section class="container">
                <article class="competence">
                    <div>
                        <h3>Back-end</h3>
                        <h4>L'architecture applicative</h4>
                        <p>Le développement back end englobe généralement la mise en place, la configuration et le maintien de plusieurs composantes essentielles d’un projet web.</p>
                        <p>Du serveur, aux bases de données, en passant par l'intégration d'un back-office ou le développement d'API (Applications Partagées sur Internet) ; le développement back-end est le moteur d'un site internet.</p>
                        <p>Selon vos projets, diverses solutions sont possibles.</p>
                    </div>
                    <div>
                        <div>
                            <img src={require("../assets/lunacy.png")} alt="lunacy" />
                            <p><span class="bolder">Lunacy</span> - Logiciel de design inspiré de Sketch (MacOS)</p>
                        </div>
                        <div>
                            <img src={require("../assets/html.png")} alt="HTML" />
                            <p><span class="bolder">HTML5</span> - Langage de balise pour l'hypertexte. Respect de la sémantique optimisée pour le référencement naturel (SEO).</p>
                        </div>
                        <div>
                            <img src={require("../assets/css.png")} alt="HTML" />
                            <p><span class="bolder">CSS3</span> - Feuilles de style en cascade. Utilisation de SASS/SCSS pour optimiser les fonctionnalités.</p>
                        </div>
                        <div>
                            <img src={require("../assets/js.png")} alt="HTML" />
                            <p><span class="bolder">JavaScript</span> - Langage de script léger, orienté objet, principalement connu comme le langage de script des pages web, il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que Node.js, Apache CouchDB voire Adobe Acrobat.</p>
                        </div>
                        <div>
                            <img src={require("../assets/logo192.png")} alt="HTML" />
                            <p><span class="bolder">React</span> - React est un framework front-end JavaScript. il permet aux développeurs de créer de grandes applications web qui peuvent modifier les données, sans avoir à recharger la page. L'objectif principal de React est d'être rapide, évolutif et simple.</p>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <article class="container">
                    <h2>A Nantes ou ailleurs</h2>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43327.50420675673!2d-1.570922474640191!3d47.256309215612724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ee447381ca13%3A0x1c0d3755a0e17fc0!2s44300%20Nantes!5e0!3m2!1sfr!2sfr!4v1652627084331!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </article>
            </section>
        </main>

    );
};

export default Profil;