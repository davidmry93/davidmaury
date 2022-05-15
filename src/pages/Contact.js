import React from 'react';
import { GoMail } from 'react-icons/go';

const Contact = () => {
    return (
        <main class="contact">
           <section>
               <article class="container">
                    <div class="info">
                        <h3><span>Travaillons ensemble</span></h3>
                        <p>Besoin de renseignements, de conseils, ou vous souhaitez me contacter pour un projet ? Je prends le temps de répondre à vos messages.</p>
                        <div>
                            <GoMail/>
                            <a href="mailto:davidmry93@gmail.com">davidmry93@gmail.com</a>
                        </div>
                    </div>
                    <form action="">
                        <input type="text" name="name" id="name" placeholder='Nom Complet' />
                        <input type="email" name="mail" id="mail" placeholder='Email' />
                        <input type="tel" name="tel" id="tel" placeholder='Téléphone'/>
                        <textarea name="message" id="message" cols="30" rows="4" placeholder='Message'></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
               </article>
           </section>
        </main>
    );
};

export default Contact;