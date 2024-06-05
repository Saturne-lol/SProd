<script setup lang="ts">
useSeoMeta({
  title: 'Saturne.lol',
  description: 'Saturne.lol makes it easy to create a modern online profile !',
  ogTitle: 'Saturne.lol',
  ogDescription: 'Saturne.lol makes it easy to create a modern online profile !',
  ogImage: '/favicon/icon.ico',
  ogUrl: 'https://saturne.lol',
  twitterTitle: 'Saturne.lol',
  twitterDescription: 'Saturne.lol makes it easy to create a modern online profile !',
  twitterImage: '/favicon/icon.ico',
  twitterCard: 'summary'
})
</script>

<template>
  <video src="/public/video/dashboard.mp4" id="background" autoplay loop muted></video>
  <div id="body">
    <div class="nav">
      <div class="links">
        <img src="/public/img/saturne.png" alt="">
        <ul>
          <a href="#home">
            <li>HOME</li>
          </a>
          <a href="#about">
            <li>ABOUT</li>
          </a>
          <a href="#premium">
            <li>PREMIUM</li>
          </a>
          <a href="#vouches">
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
      <h1>404</h1>
      <h2>You're lost in this immense galaxy...</h2>
      <button>Back to Saturn</button>
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
  width: 50%;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home h1, 
.home h2{
  font-size: 600%;
  font-weight: 500;
  text-shadow: 0 0 10px #ffffff;
}

.home h2{
  font-size: 300%;
}

.home button{
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  transition: 0.5s ease;
  cursor: pointer;
  margin: 10px;
}

.home button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.6);
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
@media screen and (max-width: 1600px) {
  .premium .grid .box .info .Icon {
    font-size: 300%;
  }

  .premium .grid .box .info h2 {
    font-size: 130%;
  }

  .premium .grid .box .info h3 {
    font-size: 120%;
  }
}

@media screen and (max-width: 1300px) {
  .nav {
    width: 60%;
  }

  .premium .grid .box .info .Icon {
    font-size: 220%;
  }

  .premium .grid .box .info h2 {
    font-size: 110%;
  }

  .premium .grid .box .info h3 {
    font-size: 100%;
  }
}

@media screen and (max-width: 1150px) {
  .premium .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  .premium .grid .box .info .Icon {
    font-size: 400%;
  }

  .premium .grid .box .info h2 {
    font-size: 200%;
  }

  .premium .grid .box .info h3 {
    font-size: 150%;
  }
}

@media screen and (max-width: 1100px) {
  .nav {
    width: 70%;
  }

  .about .info {
    grid-template-columns: repeat(2, 1fr);
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

  .about .info {
    grid-template-columns: repeat(1, 1fr);
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
  .home .text h1 {
    font-size: 150%;
  }

  .home .text h3 {
    font-size: 100%;
  }

  .about .info .Icon {
    font-size: 300%;
  }

  .premium .grid .box .info .Icon {
    font-size: 250%;
  }

  .premium .grid .box .info h2 {
    font-size: 120%;
  }

  .premium .grid .box .info h3 {
    font-size: 110%;
  }

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