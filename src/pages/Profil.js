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
                <h2>Mes compétences <span>web</span></h2>
                <article class="competence">
                    <div>
                        <h3>Front-end</h3>
                        <h4>Du design à l'intégration</h4>
                        <p>Le développement front-end correspond à la partie du code permettant l'affichage d'un site internet.</p>
                        <p>Ce code est interprété par le navigateur et contient les textes, les images (HTML) ainsi que le style et les propriétés d'affichage (CSS).</p>
                        <p>Le language JavaScript fait également partie du développement front-end, puisqu'il permet d'efefctuer certaines animations (comme la petite flèche en bas à droite vous permettant de scroller la page vers le haut).</p>
                    </div>
                    <div>

                    </div>
                </article>
            </section>
        </main>

    );
};

export default Profil;