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
    <div class="home" id="home">
      <div class="text">
        <h1>Create your e-profile easily !</h1>
        <h3><span>Saturne.lol</span> makes it easy to create a modern profile</h3>
      </div>
      <div class="buttons">
        <button href="">Get Started</button>
        <button href="">Read More</button>
      </div>
      <video autoplay loop muted>
        <source src="public/video/adsglt.mp4" type="video/mp4">
      </video>
    </div>

    <div class="waveTop" id="about"></div>

    <div class="background">
      <div class="about">
        <h1>Why choose Saturne</h1>
        <div class="info">
          <div class="box">
            <Icon name="ph:magic-wand-fill" class="Icon" />
            <h3>FULLY CUSTOMIZABLE</h3>
            <h5>
              Express yourself in a unique way and create a modern,
              personalized e-profile effortlessly with our many options.
            </h5>
          </div>
          <div class="box">
            <Icon name="material-symbols:shield-lock" class="Icon" />
            <h3>INSURED PROTECTION</h3>
            <h5>
              Enjoy peace of mind with Saturne.lol's insured protection.
              Your data and profile are safeguarded, ensuring a secure and worry-free experience.
            </h5>
          </div>
          <div class="box">
            <Icon name="ph:code-bold" class="Icon" />
            <h3>DEVELOPMENT</h3>
            <h5>
              Explore Saturne.lol and experience the result of meticulous development.
              Our platform is crafted with precision, ensuring a seamless and efficient user experience for you.
            </h5>
          </div>
          <div class="box">
            <Icon name="material-symbols:responsive-layout-outline-rounded" class="Icon" />
            <h3>RESPONSIVE</h3>
            <h5>
              Experience seamless accessibility on any device with Saturne.lol's responsive design.
              Your profile adapts effortlessly, providing an optimal viewing experience for everyone.
            </h5>
          </div>
          <div class="box">
            <Icon name="ph:globe" class="Icon" />
            <h3>COMMUNITY APPROVAL</h3>
            <h5>
              Find out why Saturn.lol is so popular with our community.
              Join us and experience the positive feedback and approval that sets us apart.
            </h5>
          </div>
          <div class="box">
            <Icon name="material-symbols:contact-support-rounded" class="Icon" />
            <h3>SUPPORT 24/7</h3>
            <h5>
              Saturne provides 24/7 support to ensure that our customers receive
              timely assistance wherever and whenever they need it.
            </h5>
          </div>
        </div>
      </div>
    </div>


    <div class="waveBottom" id="premium"></div>

    <div class="premium">
      <h1>Choose your plan</h1>
      <div class="grid">
        <div class="box">
          <div class="info">
            <Icon name="material-symbols:grass" class="Icon" />
            <div class="text">
              <h2>Classic Plan</h2>
              <h3>0.00€ - Lifetime</h3>
            </div>
          </div>
          <p>
            <Icon name="material-symbols:check" id="check" />
            - Host 24/7<br>
            <Icon name="material-symbols:check" id="check" />
            - Static images<br>
            <Icon name="material-symbols:check" id="check" />
            - Static bio<br>
            <Icon name="material-symbols:check" id="check" />
            - 3 Linked Social Network<br>
            <Icon name="material-symbols:check" id="check" />
            - Number of box : 2<br>
            <Icon name="material-symbols:check" id="check" />
            - Amount of profil viewer<br>
          </p>
          <button>Get Started</button>
        </div>
        <div class="box">
          <div class="info">
            <Icon name="solar:stars-minimalistic-broken" class="Icon" />
            <div class="text">
              <h2>Advanced Plan</h2>
              <h3>5.00€ - Lifetime</h3>
            </div>
          </div>
          <p>
            <Icon name="ion:information" id="info" />
            - All previous functions<br>
            <Icon name="material-symbols:check" id="check" />
            - Dynamique images<br>
            <Icon name="material-symbols:check" id="check" />
            - Dynamique bio<br>
            <Icon name="material-symbols:check" id="check" />
            - Number of box : 4<br>
            <Icon name="material-symbols:check" id="check" />
            - Premium Badge<br>
            <Icon name="material-symbols:check" id="check" />
            - Cursor Effect <br>
            <Icon name="material-symbols:check" id="check" />
            - Customizable font<br>
          </p>
          <button>Buy Now</button>
        </div>
        <div class="box">
          <div class="info">
            <Icon name="basil:diamond-solid" class="Icon" />
            <div class="text">
              <h2>Premium Plan</h2>
              <h3>2.00€/month</h3>
            </div>
          </div>
          <p>
            <Icon name="ion:information" id="info" />
            - All previous functions<br>
            <Icon name="material-symbols:check" id="check" />
            - Host on your own domain<br>
          </p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>

    <div class="waveTop" id="vouches"></div>

    <div class="background">
      <div class="vouches">
        <h1>Trusted by the community</h1>
        <div class="grid">
          <div class="box">
            <div class="info">
              <img src="/public/img/AD.gif" alt="">
              <div class="text">
                <h2>AD</h2>
                <h3>Owner du serveur saturne</h3>
              </div>
            </div>
            <p>
              <Icon name="bxs:quote-alt-left" />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsam cum corporis numquam
              at unde esse ducimus, vero nam consequuntur nemo iste hic modi laboriosam in, soluta eaque!
              Libero, accusamus.
              <Icon name="bxs:quote-alt-right" />
            </p>
          </div>
          <div class="box">
            <div class="info">
              <img src="/public/img/Cleboost.png" alt="">
              <div class="text">
                <h2>Cleboost</h2>
                <h3>Owner du serveur saturne</h3>
              </div>
            </div>
            <p>
              <Icon name="bxs:quote-alt-left" />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsam cum corporis numquam
              at unde esse ducimus, vero nam consequuntur nemo iste hic modi laboriosam in, soluta eaque!
              Libero, accusamus.
              <Icon name="bxs:quote-alt-right" />
            </p>
          </div>
          <div class="box">
            <div class="info">
              <img src="/public/img/BF.png" alt="">
              <div class="text">
                <h2>BF</h2>
                <h3>Owner du serveur saturne</h3>
              </div>
            </div>
            <p>
              <Icon name="bxs:quote-alt-left" />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsam cum corporis numquam
              at unde esse ducimus, vero nam consequuntur nemo iste hic modi laboriosam in, soluta eaque!
              Libero, accusamus.
              <Icon name="bxs:quote-alt-right" />
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="waveBottom"></div>

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
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
}

.waveBottom {
  position: relative;
  width: 100%;
  height: 120px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255, 255, 255, 0.05)" d="M0,64 C120,80 240,32 360,64 C480,96 600,128 720,64 C840,0 960,32 1080,64 C1200,96 1320,32 1440,64 L1440,320 L0,320 Z"></path></svg>') repeat-x;
  background-size: contain;
  rotate: 180deg;
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
}

.home .text {
  text-align: center;
}

.home .text span {
  color: rgba(233, 159, 255, 0.6);
}

.home .buttons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.home .buttons button {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  transition: 0.5s ease;
  cursor: pointer;
  margin: 10px;
}

.home .buttons button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.home video {
  width: 100%;
}

/* ----- ABOUT ----- */

.about {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.about h1 {
  font-size: 250%;
  font-weight: 700;
  margin-bottom: 20px;
}

.about .info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;
}

.about .info .Icon {
  font-size: 400%;
}

.about .info h3 {
  font-size: 120%;
  font-weight: 500;
  margin: 20px;
}

.about .info h5 {
  font-size: 100%;
  font-weight: 200;
}

/* ----- PREMIUM ----- */

.premium {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 100px;
}

.premium h1 {
  font-size: 250%;
  font-weight: 700;
  margin-bottom: 20px;
}

.premium .grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.premium .grid .box {
  position: relative;
  width: 80%;
  border-radius: 20px;
  padding: 30px;
  margin: 0 auto;
}

.premium .grid .box {
  background-color: rgba(255, 255, 255, 0.05);
}

.premium .grid .box .info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.premium .grid .box .info .Icon {
  font-size: 400%;
  margin-right: 20px;
}

.premium .grid .box .info h2 {
  font-size: 160%;
  font-weight: 700;
}

.premium .grid .box .info h3 {
  font-size: 150%;
  font-weight: 300;
}

.premium .grid .box p {
  font-weight: 300;
  font-size: 100%;
  text-align: left;
  margin-bottom: 30px;
}

.premium .grid .box button {
  position: relative;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 8px 14px 8px 14px;
  border-radius: 10px;
  transition: 0.5s ease;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.premium .grid .box button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.6);
}


/* ----- VOUCHES ----- */
.vouches {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.vouches h1 {
  font-size: 250%;
  font-weight: 700;
  margin-bottom: 20px;
}

.vouches .grid {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vouches .grid .box {
  position: relative;
  width: 100%;
  border-radius: 20px;
  padding: 30px;
  margin: 0 auto;
}

.vouches .grid .box .info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.vouches .grid .box .info img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.vouches .grid .box .info h2 {
  font-size: 200%;
  font-weight: 700;
}

.vouches .grid .box .info h2,
.vouches .grid .box .info h3 {
  text-align: left;
}

.vouches .grid .box p {
  text-align: left;
  margin-bottom: 30px;
}

/* ----- FOOTER ----- */

.footer {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
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