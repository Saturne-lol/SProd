<script setup lang="ts">

</script>

<template>
    <video src="/public/video/dashboard.mp4" id="background" autoplay loop muted></video>
    <div id="body">
        <div class="nav">
            <div class="links">
                <img src="/public/img/saturne.png" alt="">
                <ul>
                    <li>
                        <a href="/#home">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="/#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="/#premium">
                            PREMIUM
                        </a>
                    </li>
                    <li>
                        <a href="/#vouches">
                            VOUCHES
                        </a>
                    </li>
                </ul>
            </div>
            <div class="buttons">
                <a href="/login">
                    <button>Login</button>
                </a>
                <a href="/login">
                    <button>Get Started</button>
                </a>
            </div>
        </div>

        <div class="home">
            <h1><img src="/public/img/saturne.png" alt=""> • Hey notre système solaire est bientôt prêt ... Vous êtes
                sur le point d'entrer sur Saturne</h1> <br>

            <h2><img src="/public/img/purpleGalaxy.png" alt=""> • Les premiers arrivants sur Saturne auront accès à la
                BETA 1.0, pour y accéder vous devrait :</h2>
            <br>
            <h3>
                • Accepter le règlement du <a href="https://discord.gg/saturne">serveur discord</a> <br>
                • Créer un ticket et nous en informer <br>
            </h3>
            <br>
            <h2><img src="/public/img/pinkGalaxy.png" alt=""> • Une fois accepter pour la BETA vous devrait rendre dans
                le salon <a href="https://discord.com/channels/1129015826410901556/1203707731257729034"
                    target="_blank"># 🌟・suggestion</a> : </h2>
            <br>
            <h3>
                • Nous partager toutes les suggestions que vous pourriez avoir en tête <br>
                • Les problèmes que notre site pourrait rencontrer <br>
            </h3>
            <br>
            <h2><img src="/public/img/blueGalaxy.png" alt=""> • Les récompenses seront les suivantes :</h2>
            <br>
            <h3>
                • Un badge de BETA exclusif pour la participation à cette première BETA <br>
                • Pour les plus concurrents d'entre vous un badge en plus sera disponible, à vous de vous surpasser !!
                <br>
            </h3>
        </div>

        <div class="waveTop"></div>
        <div class="background">
            <div class="footer">
                <h3>Copyright © 2024 saturne.lol</h3>
                <div class="links">
                    <a href="">Privacy</a>
                    <a href="">PolicyTerms of Service</a>
                    <a href="https://discord.gg/saturne">Discord</a>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
#body {
    width: 100%;
    height: 100vh;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    user-select: none;
    overflow-x: hidden;
    backdrop-filter: blur(3px);
}

#background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    object-fit: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    filter: brightness(0.30);
}

.waveTop {
    position: relative;
    width: 100%;
    height: 120px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255, 255, 255, 0.05)" d="M0,64 C120,80 240,32 360,64 C480,96 600,128 720,64 C840,0 960,32 1080,64 C1200,96 1320,32 1440,64 L1440,320 L0,320 Z"></path></svg>') repeat-x;
    background-size: contain;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

.background {
    background-color: rgba(255, 255, 255, 0.05);
}

/* ----- NAV ----- */

.nav {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.nav .links {
    display: flex;
    align-items: center;
}

.nav img {
    width: 80px;
    height: 80px;
    margin-right: 50px;
}

.nav ul {
    display: flex;
}

.nav ul li {
    font-size: 95%;
    font-weight: 500;
    position: relative;
    margin: 10px;
}

.nav ul li::after {
    content: '';
    width: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 0;
    bottom: -4px;
    transition: 0.5s;
}

.nav ul li:hover::after {
    width: 100%;
}

.nav button {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    transition: 0.5s ease;
    cursor: pointer;
    margin: 10px;
}

.nav button:hover {
    background-color: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.6);
}

/* ----- HOME ----- */
.home {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
}


/* ----- FOOTER ----- */

.footer {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
}

.footer h3 {
    font-weight: 500;
}

.footer .links a {
    position: relative;
    margin: 20px;
}

.footer .links a::after {
    content: '';
    width: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 0;
    bottom: -4px;
    transition: 0.5s;
}

.footer .links a:hover::after {
    width: 100%;
}

/* ----- RESPONSIVE ----- */
@media screen and (max-width: 1300px) {
    .nav {
        width: 60%;
    }
}

@media screen and (max-width: 1100px) {
    .nav {
        width: 70%;
    }
}

@media screen and (max-width: 950px) {
    .nav {
        width: 80%;
    }

    .home {
        width: 80%;
    }
}

@media screen and (max-width: 850px) {
    .nav {
        width: 90%;
    }
}

@media screen and (max-width: 750px) {

    .nav img {
        margin-right: 0px;
    }

    .nav ul {
        display: none;
    }

    .footer h3 {
        font-size: 90%;
    }

    .footer .links a {
        font-size: 80%;
        margin: 10px;
    }
}

@media screen and (max-width: 600px) {
    .footer {
        width: 100%;
        text-align: center;
        flex-direction: column;
    }

    .footer h3 {
        font-size: 90%;
    }

    .footer .links a {
        font-size: 80%;
        margin: 10px;
    }

    .home h1 {
        font-size: 100%;
    }

    .home h2 {
        font-size: 90%;
    }

    .home h3 {
        font-size: 80%;
    }
}
</style>