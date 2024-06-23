<script setup lang="ts">

import { ref } from 'vue'

const title = ref('')
const description = ref('')

function submit() {
    console.log(title.value, description.value)
}
</script>

<template>
    <video src="/public/video/dashboard.mp4" id="background" autoplay loop muted></video>
    <div id="body">
        <div class="nav">
            <div class="links">
                <img src="/public/img/saturne.png" alt="">
                <ul>
                    <a href="/#home">
                        <li>HOME</li>
                    </a>
                    <a href="/#about">
                        <li>ABOUT</li>
                    </a>
                    <a href="/#premium">
                        <li>PREMIUM</li>
                    </a>
                    <a href="/#vouches">
                        <li>VOUCHES</li>
                    </a>
                </ul>
            </div>
            <div class="buttons">
                <button>Login</button>
                <button>Get Started</button>
            </div>
        </div>

        <div class="home">
            <h1>Title :</h1>
            <input type="text" v-model="title" />
            <h1>Description :</h1>
            <textarea v-model="description" rows="10"></textarea>
            <h1>Screen (falcultative) :</h1>
            <label class="uploadFile" for="fileInput">
                <div class="icon">
                    <Icon name="ic:baseline-insert-photo" class="Icon" />
                </div>
                <div class="text">
                    <span>Click to upload screen</span>
                </div>
                <input type="file" id="fileInput" accept=".png, .jpg, .jpeg" />
                <!--
                <div class="icon">
                    <Icon name="material-symbols:check" class="Icon" />
                </div>
                <div class="text">
                    <span>[FIleName].[extension] upload</span>
                </div>
                -->
            </label>
        </div>

        <div class="waveTop"></div>
        <div class="background">
            <div class="footer">
                <h3>Copyright © 2024 saturne.lol</h3>
                <div class="links">
                    <a href="">Privacy</a>
                    <a href="">PolicyTerms of Service</a>
                    <a href="">Discord</a>
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

input,
textarea {
    width: 100%;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    margin: 10px 0;
    resize: none;
    transition: 0.4s ease;
}

input:hover,
textarea:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.uploadFile {
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 10px 0 10px 0;
    border-radius: 10px;
    transition: 0.4s ease;
}

.uploadFile:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.uploadFile .icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.uploadFile .icon .Icon {
    font-size: 300%;
}

.uploadFile .text {
    display: flex;
    align-items: center;
    justify-content: center;
}

.uploadFile .text span {
    font-weight: 400;
}

.uploadFile input {
    display: none;
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
}
</style>