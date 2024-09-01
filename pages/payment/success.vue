<script setup lang="ts">
const { type } = useRoute().query as { type: string };

</script>

<template>
  <img src="/img/landing/background.jpg" id="background"></img>
  <div id="body">
    <div class="nav">
      <div class="links">
        <img src="/public/img/saturne.png" alt="">
        <ul>
          <li>
            <a href="/">
              HOME
            </a>
          </li>
          <li>
            <a href="/">
              ABOUT
            </a>
          </li>
          <li>
            <a href="/">
              PREMIUM
            </a>
          </li>
          <li>
            <a href="/">
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

    <!-- <h1>Bravo ! Vous venez de passer {{ type.slice(0,1) === '1' ? 'Premium' : 'Premium +' }}</h1> -->
    <div class="home">
      <div v-if="type.slice(0, 1) === '1'">
        <img src="/img/landing/premium.png" alt="">
        <h1>Vous avez obtenu Premium !!</h1>
        <button><a href="/">Back to Saturn</a></button>
      </div>

      <div v-else>
        <img src="/img/landing/premium2.png" alt="">
        <h1>Vous avez obtenu Premium plus !!</h1>
        <button><a href="/">Back to Saturn</a></button>
      </div>
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
  /*backdrop-filter: blur(3px);*/
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

.home img {
  width: 40%;
  height: auto;
  margin: 0 auto;
}

.home h1 {
  font-size: 300%;
  font-weight: 500;
  text-shadow: 0 0 10px #ffffff;
}

.home button {
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
  .home img {
    width: 50%;
  }

  .home h1 {
    font-size: 250%;
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

  .home img {
    width: 60%;
  }

  .home h1 {
    font-size: 200%;
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
  .home img {
    width: 70%;
  }

  .home h1 {
    font-size: 150%;
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