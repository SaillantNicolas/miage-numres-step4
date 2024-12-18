import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" style="cursor:pointer;">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/" style="text-decoration: none;">click ici</a>
        </div>


        <div class="topnav">
          <a href="#" class="fa fa-facebook" aria-label="Lien vers Facebook"></a>
          <a href="#" class="fa fa-twitter" aria-label="Lien vers twitter"></a>
          <a href="#" class="fa fa-google" aria-label="Lien vers google"></a>
          <a href="#" class="fa fa-linkedin" aria-label="Lien vers linkedin"></a>
          <a href="#" class="fa fa-youtube" aria-label="Lien vers youtube"></a>
          <a href="#" class="fa fa-instagram" aria-label="Lien vers instagram"></a>
          <a href="#" class="fa fa-pinterest" aria-label="Lien vers pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost" aria-label="Lien vers snapchat"></a>
          <a href="#" class="fa fa-skype" aria-label="Lien vers skype"></a>
          <a href="#" class="fa fa-android" aria-label="Lien vers android"></a>
          <a href="#" class="fa fa-dribbble" aria-label="Lien vers dribbble"></a>
          <a href="#" class="fa fa-vimeo" aria-label="Lien vers vimeo"></a>
          <a href="#" class="fa fa-tumblr" aria-label="Lien vers tumblr"></a>
          <a href="#" class="fa fa-vine" aria-label="Lien vers vine"></a>
          <a href="#" class="fa fa-foursquare" aria-label="Lien vers foursquare"></a>
          <a href="#" class="fa fa-stumbleupon" aria-label="Lien vers stumbleupon"></a>
          <a href="#" class="fa fa-flickr" aria-label="Lien vers flickr"></a>
          <a href="#" class="fa fa-yahoo" aria-label="Lien vers Yahoo"></a>
          <a href="#" class="fa fa-reddit" aria-label="Lien vers reddit"></a>
          <a href="#" class="fa fa-rss" aria-label="Lien vers rss"></a>
        </div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h5>description</h5>
              <div id="quiz">
                <h2>A TOI DE JOUER</h2>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img src="/question.png" width="500" height="600" alt="Image d'un point d'interrogation pour le quizz">
            </div>
        </div>

        <div class="footer">
          <h2>@2024</h2>
        </div>
`

initQuizz();