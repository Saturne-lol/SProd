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
  <div class="nav">
    <div class="sidemenu">
      <div class="navbar">
        <img src="/img/saturne.png" alt="">
        <h1>SATURNE.LOL</h1>
        <div class="links">
          <a href="#home">
            <h5>Home</h5>
          </a>
          <a href="#about">
            <h5>About</h5>
          </a>
          <a href="#premium">
            <h5>Premium</h5>
          </a>
          <a href="#vouches">
            <h5>Vouches</h5>
          </a>
        </div>
      </div>
      <div class="btn">
        <div class="login">
          <a href="/auth/login">Login</a>
        </div>
        <div class="started">
          <a href="/auth/login">Get Started</a>
        </div>
      </div>
    </div>
  </div>

  <!-- ------------------------ - END NAV BAR - ------------------------ -->

  <!-- ------------------------ - START HOME - ------------------------ -->
  <div class="home" id="home">
    <h1>Create your e-profile easily !</h1>
    <h3><span>Saturne.lol</span> makes it easy to create a modern profile</h3>
    <div class="btn">
      <div class="started">
        <a href="/auth/login">Get Started</a>
      </div>
      <div class="ReadMore">
        <a href="/auth/login">Read More</a>
      </div>
    </div>
    <video autoplay loop muted>
      <source src="/video/adsglt.mp4" type="video/mp4">
    </video>
  </div>

  <!-- ------------------------ - END HOME - ------------------------ -->
  <div class="wave1" id="about">
    <!--    <img src="@/assets/img/wave.png" alt="">-->
  </div>
  <!-- ------------------------ - START ABOUT - ------------------------ -->
  <div class="titleAboutAndVouch">
    <h1>Why choose Saturne</h1>
  </div>
  <div class="about">
    <div class="box">
      <Icon name="mdi:wand" class="icon" />
      <h3>FULLY CUSTOMIZABLE</h3>
      <h5>
        Express yourself in a unique way and create a modern,
        personalized e-profile effortlessly with our many options.
      </h5>
    </div>
    <div class="box">
      <Icon name="material-symbols:shield" class="icon"/>
      <h3>INSURED PROTECTION</h3>
      <h5>
        Enjoy peace of mind with Saturne.lol's insured protection.
        Your data and profile are safeguarded, ensuring a secure and worry-free experience.
      </h5>
    </div>
    <div class="box">
      <Icon name="pepicons-pop:code" class="icon"/>
      <h3>DEVELOPMENT</h3>
      <h5>
        Explore Saturne.lol and experience tShe result of meticulous development.
        Our platform is crafted with precision, ensuring a seamless and efficient user experience for you.
      </h5>
    </div>
    <div class="box">
      <Icon name="icon-park-outline:code-laptop" class="icon"/>
      <h3>RESPONSIVE</h3>
      <h5>
        Experience seamless accessibility on any device with Saturne.lol's responsive design.
        Your profile adapts effortlessly, providing an optimal viewing experience for everyone.
      </h5>
    </div>
    <div class="box">
      <Icon name="material-symbols:globe" class="icon"/>
      <h3>COMMUNITY APPROVAL</h3>
      <h5>
        Find out why Saturn.lol is so popular with our community.
        Join us and experience the positive feedback and approval that sets us apart.
      </h5>
    </div>
    <div class="box">
      <Icon name="bi:phone" class="icon"/>
      <h3>SUPPORT 24/7</h3>
      <h5>
        Saturne provides 24/7 support to ensure that our customers receive
        timely assistance wherever and whenever they need it.
      </h5>
    </div>
  </div>


  <!-- ------------------------ - END ABOUT - ------------------------ -->
  <div class="wave2" id="premium">
    <img src="/img/wave.png" alt="">
  </div>
  <!-- ------------------------ - START PLAN - ------------------------ -->
  <div class="titlePlan">
    <h1>Choose your plan</h1><br>
  </div>
  <div class="plan">
    <div class="box">
      <div class="flex">
        <i class="fa-solid fa-seedling"></i>
        <div class="texts">
          <h1>Classic Plan</h1>
          <h3>0.00€ - Lifetime</h3>
        </div>
      </div>
      <h5>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Host 24/7<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Static images and bio<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Static images and bio<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        3 Linked Social Network<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Number of box available: 2<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Show amount of profil viewer<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Special Discord role on our serveur<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Image Background<br>
<!--        <font-awesome-icon :icon="['solid', 'xmark']" class="icon" id="false"/>-->
        Premium Badge<br>
<!--        <font-awesome-icon :icon="['solid', 'xmark']" class="icon" id="false"/>-->
        Cursor Effect <br>
<!--        <font-awesome-icon :icon="['solid', 'xmark']" class="icon" id="false"/>-->
        Customizable font<br>
<!--        <font-awesome-icon :icon="['solid', 'xmark']" class="icon" id="false"/>-->
        Video background<br>
      </h5>
      <a href="/login" id="btnPlan1">Get Started</a>
    </div>
    <div class="box">
      <div class="flex">
        <i class="fa-solid fa-star"></i>
        <div class="texts">
          <h1>Advanced Plan</h1>
          <h3>1.00€/month</h3>
        </div>
      </div>
      <h5>
<!--        <font-awesome-icon :icon="['solid', 'info']" class="icon" id="info"/>-->
        All previous functions<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Dynamique images and bio<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Number of box available: 4<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Premium Badge<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Cursor Effect <br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Customizable font<br>
<!--        <font-awesome-icon :icon="['solid', 'xmark']" class="icon" id="false"/>-->
        4K Video background<br>
      </h5>
      <a href="" id="btnPlan2">Buy Now</a>
    </div>
    <div class="box">
      <div class="flex">
        <i class="fa-solid fa-gem"></i>
        <div class="texts">
          <h1>Premium Plan</h1>
          <h3>2.50€/month</h3>
        </div>
      </div>
      <h5>
<!--        <font-awesome-icon :icon="['solid', 'info']" class="icon" id="info"/>-->
        All previous functions<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Dynamique images and bio<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Number of box available: 6<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Premium Badge<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Cursor Effect <br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        Customizable font<br>
<!--        <font-awesome-icon :icon="['solid', 'check']" class="icon" id="true"/>-->
        4K Video background<br>
      </h5>
      <a href="" id="btnPlan3">Buy Now</a>
    </div>
  </div>
  <!-- ------------------------ - END PLAN - ------------------------ -->
  <div class="wave3" id="vouches">
    <img src="/img/wave.png" alt="">
  </div>
  <!-- ------------------------ - START VOUCHES - ------------------------ -->
  <div class="titleAboutAndVouch">
    <h1>Trusted by the community</h1>
  </div>
  <div class="vouches">
    <div class="box">
      <div class="flex">
        <img src="/img/LL123.gif" alt="">
        <div class="texts">
          <h1>!"' LL123™</h1>
          <h3>Owner du serveur NTM</h3>
        </div>
      </div>
      <h5>
        <!--        <font-awesome-icon :icon="['solid', 'quote-left']" class="icon" id="quote-left"/>-->
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsam cum corporis numquam
        at unde esse ducimus, vero nam consequuntur nemo iste hic modi laboriosam in, soluta eaque!
        Libero, accusamus.
        <!--        <font-awesome-icon :icon="['solid', 'quote-right']" class="icon" id="quote-right"/>-->
      </h5>
    </div>
    <div class="box">
      <div class="flex">
        <img src="/img/LL123.gif" alt="">
        <div class="texts">
          <h1>!"' LL123™</h1>
          <h3>Owner du serveur NTM</h3>
        </div>
      </div>
      <h5>
        <!--        <font-awesome-icon :icon="['solid', 'quote-left']" class="icon" id="quote-left"/>-->
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsam cum corporis numquam
        at unde esse ducimus, vero nam consequuntur nemo iste hic modi laboriosam in, soluta eaque!
        Libero, accusamus.
        <!--        <font-awesome-icon :icon="['solid', 'quote-right']" class="icon" id="quote-right"/>-->
      </h5>
    </div>
    <div class="box">
      <div class="flex">
        <img src="/img/LL123.gif" alt="">
        <div class="texts">
          <h1>!"' LL123™</h1>
          <h3>Owner du serveur NTM</h3>
        </div>
      </div>
      <h5>
        <!--        <font-awesome-icon :icon="['solid', 'quote-left']" class="icon" id="quote-left"/>-->
        <!--        <font-awesome-icon icon="fa-sold fa-quote-left" class="icon" id="quote-left"/>-->
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsam cum corporis numquam
        at unde esse ducimus, vero nam consequuntur nemo iste hic modi laboriosam in, soluta eaque!
        Libero, accusamus.
        <!--        <font-awesome-icon :icon="['solid', 'quote-right']" class="icon" id="quote-right"/>-->
        <!--        <font-awesome-icon icon="fa-sold fa-quote-right" class="icon" id="quote-left"/>-->
        <!--        <font-awesome-icon :icon="['fas', 'quote-left']" />-->
<!--        <font-awesome-icon :icon="['fas', 'quote-left']"/>-->
<!--        <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt"/>-->
      </h5>
    </div>
  </div>

  <!-- ------------------------ - END VOUCHES - ------------------------ -->
  <div class="wave4">
    <img src="/img/wave.png" alt="">
  </div>
  <div class="wave5">
    <img src="/img/wave.png" alt="">
  </div>
  <!-- ------------------------ - START FOOTER - ------------------------ -->
  <div class="footer">
    <div class="texts">
      <div class="title">
        <h3>Copyright © 2024 saturne.lol</h3>
      </div>
      <div class="links">
        <a href="">Privacy</a>
        <a href="">PolicyTerms of Service</a>
        <a href="">Discord</a>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  user-select: none
}

body {
  background-color: #fac9ff;
  font-family: Peoppins, sans-serif;
  color: #000;
  overflow-x: hidden
}

::-webkit-scrollbar {
  width: 10px
}

::-webkit-scrollbar-track {
  background: #f1f1f1
}

::-webkit-scrollbar-thumb {
  background: #754485;
  border-radius: 10px
}

.nav {
  justify-content: center;
  margin-left: 20%;
  margin-right: 20%;
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 100
}

.sidemenu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between
}

.nav .navbar {
  display: flex;
  align-items: center
}

.nav .navbar img {
  width: 80px;
  height: 80px
}

.nav .navbar h1 {
  margin-left: 20px
}

.nav .navbar .links {
  display: flex;
  margin-left: 30px
}

.nav .navbar .links h5 {
  color: #000;
  font-size: 95%;
  font-weight: 700;
  position: relative;
  margin-right: 20px
}

.nav .navbar .links h5::after {
  content: '';
  width: 0;
  height: 2px;
  background: #754485;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: .5s
}

.nav .navbar .links h5:hover::after {
  width: 100%
}

.nav .btn {
  display: flex
}

.nav .btn .login a {
  background-color: #754485;
  color: #fff;
  border: #754485 solid 2px;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  transition: .3s ease
}

.nav .btn .login a:hover {
  background-color: #542d61;
  border: #542d61 solid 2px
}

.nav .btn .started a {
  background-color: #fac9ff;
  color: #000;
  border: #754485 solid 2px;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  transition: .3s ease
}

.nav .btn .started a:hover {
  background-color: #754485;
  color: #fff
}

.nav .btn .started {
  padding-left: 15px
}

.home {
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  z-index: 90
}

.home h1 {
  font-size: 250%;
  margin-bottom: 10px
}

.home h3 {
  font-size: 150%;
  margin-bottom: 20px
}

.home h3 span {
  color: #754485
}

.home .btn {
  display: flex;
  justify-content: center;
  margin-bottom: 30px
}

.home .btn .started a {
  background-color: #fac9ff;
  color: #000;
  border: #754485 solid 2px;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  transition: .3s ease
}

.home .btn .started a:hover {
  background-color: #754485;
  color: #fff
}

.home .btn .ReadMore a {
  background-color: #754485;
  color: #fff;
  border: #754485 solid 2px;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  transition: .3s ease
}

.home .btn .ReadMore a:hover {
  background-color: #542d61;
  border: #542d61 solid 2px
}

.home .btn .ReadMore {
  padding-left: 15px
}

.home video {
  width: 60%;
  height: auto;
  box-shadow: 0 16px 32px rgba(0, 0, 0)
}

.wave1 img {
  position: relative;
  top: 8px;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  z-index: -10
}

.about {
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-rows:1fr 1fr;
  color: #fac9ff;
  background-color: #754485;
  text-align: center;
  place-items: center;
  z-index: 80
}

.box {
  width: 400px;
  height: 200px
}

.box .icon {
  font-size: 300%;
  padding: 10px
}

.box h3 {
  font-size: 200%;
  font-weight: 500
}

.box h5 {
  font-size: 90%;
  font-weight: 500
}

.wave2 img {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  z-index: -10;
  transform: rotate(180deg)
}

.plan {
  width: 100%;
  height: 500px;
  gap: 10%;
  display: flex;
  justify-content: center
}

.plan .box {
  width: auto;
  height: 450px;
  padding: 20px;
  border-radius: 25px;
  background-color: #fac9ff;
  border: 5px solid #754485;
  color: #754485;
  transition: .5s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between
}

.plan .box:hover {
  background-color: #754485;
  color: #fac9ff
}

.plan .box:hover #info {
  color: #fac9ff
}

.plan .box .flex {
  display: flex;
  align-items: center;
  text-align: center
}

.plan .box h5 {
  text-align: left
}

.plan .box h5 .icon {
  font-size: 100%;
  line-height: 5px
}

#info {
  color: #754485;
  margin-left: 3px;
  margin-right: 1px;
  transition: .5s ease
}

#true {
  color: #67ce47;
  margin-right: -3px
}

#false {
  color: #e64646
}

#btnPlan1, #btnPlan2, #btnPlan3 {
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  background-color: #fac9ff;
  border: #754485 solid 2px;
  color: #754485;
  transition: .5s ease;
  align-self: flex-end;
  position: relative
}

.wave3 img {
  position: relative;
  top: 8px;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  z-index: -10
}

.vouches {
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-rows:1fr;
  color: #fac9ff;
  background-color: #754485;
  place-items: center;
  padding-bottom: 100px;
  z-index: 80
}

.vouches .box .flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px
}

.vouches .box .flex img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, .3);
  margin-right: 20px
}

.vouches .box .flex .texts {
  white-space: nowrap
}

.vouches .box .flex .texts h1 {
  font-size: 300%;
  font-weight: 700
}

.vouches .box .flex .texts h3 {
  font-size: 150%;
  font-weight: 300;
  margin-top: -20px;
  margin-left: 3px
}

.vouches .box .icon {
  font-size: 150%
}

.vouches .box h5 {
  font-size: 100%;
  font-weight: 500
}

#quote-left {
  margin-bottom: -12px
}

#quote-right {
  margin-top: -12px
}

.wave4 img {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  z-index: -10;
  transform: rotate(180deg)
}

.wave5 img {
  position: relative;
  top: 8px;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  z-index: -10
}

.footer {
  width: 100%;
  height: auto;
  padding-bottom: 5px;
  background-color: #754485
}

.footer .texts {
  width: 100%;
  display: flex;
  justify-content: space-between
}

.footer h3 {
  color: #fac9ff;
  margin-left: 15px;
  white-space: nowrap
}

.footer a {
  color: #fac9ff;
  margin-right: 20px;
  white-space: nowrap;
  position: relative
}

.footer a::after {
  content: '';
  width: 0;
  height: 2px;
  background: #fac9ff;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 1s
}

.footer a:hover::after {
  width: 100%
}

.titleAboutAndVouch {
  background-color: #754485;
  text-align: center;
  color: #fac9ff;
  font-size: 150%
}

.titlePlan {
  background-color: #fac9ff;
  text-align: center;
  color: #754485;
  font-size: 150%
}

@media screen and (max-width: 1400px) {
  .nav .sidemenu .navbar .links {
    display: none
  }

  .nav {
    justify-content: space-between;
    margin-left: 25px;
    margin-right: 25px
  }

  .home video {
    width: 80%;
    height: auto
  }

  .about {
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr
  }

  .plan {
    align-items: center;
    flex-direction: column;
    height: 1200px;
    gap: 1%
  }

  .plan .box {
    width: 50%;
    height: 380px
  }

  .plan .box {
    width: 60%;
    height: 380px
  }

  .vouches {
    height: 800px;
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr 1fr;
    gap: 140px;
    padding-bottom: 200px
  }

  .titleAboutAndVouch {
    padding-top: 50px;
    padding-bottom: 50px
  }

  .titlePlan {
    padding-bottom: 20px
  }
}

@media screen and (max-width: 850px) {
  .about {
    display: flex;
    flex-direction: column;
    height: 1500px;
    gap: 50px
  }
}

@media screen and (max-width: 685px) {
  .nav .navbar img {
    width: 70px;
    height: 70px
  }

  .navbar h1 {
    font-size: 150%
  }

  .home h1 {
    font-size: 180%;
    margin-bottom: 10px
  }

  .home h3 {
    font-size: 110%;
    margin-bottom: 20px
  }

  .footer .texts {
    width: 100%;
    flex-direction: column;
    text-align: center
  }
}

@media screen and (max-width: 550px) {
  .plan {
    height: 1500px
  }

  .plan .box {
    height: 480px
  }

  .plan .box .texts h1 {
    font-size: 180%
  }

  .plan .box .texts h3 {
    font-size: 180%
  }
}

@media screen and (max-width: 500px) {
  .nav .btn .started {
    display: none
  }

  .plan .box .texts h1 {
    font-size: 150%
  }

  .plan .box .texts h3 {
    font-size: 150%
  }
}

@media screen and (max-width: 375px) {
  .nav .navbar img {
    width: 60px;
    height: 60px;
    margin-right: -15px
  }

  .navbar h1 {
    font-size: 120%
  }

  .home h1 {
    font-size: 120%;
    margin-bottom: 10px
  }

  .home h3 {
    font-size: 100%;
    margin-bottom: 20px
  }

  .plan {
    height: 1800px
  }

  .plan .box {
    height: 500px
  }

  .plan .box .texts h1 {
    font-size: 120%
  }

  .plan .box .texts h3 {
    font-size: 120%
  }
}
</style>