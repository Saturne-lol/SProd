<script setup lang="ts">

</script>

<template>
  <div class="nav2">
    <div class="links">
      <ul>
        <li>
          <a href="/dashboard/customize">
            <Icon name="fa6-solid:paintbrush" class="Icon" />
            <h5>CUSTOMIZE</h5>
          </a>
        </li>
        <li>
          <a href="/dashboard/links">
            <Icon name="ph:link-simple-bold" class="Icon" />
            <h5>YOUR LINKS</h5>
          </a>
        </li>
        <li>
          <a href="/dashboard/stats">
            <Icon name="ion:stats-chart" class="Icon" />
            <h5>YOUR STATS</h5>
          </a>
        </li>
        <li>
          <a href="/dashboard/contact">
            <Icon name="material-symbols:alternate-email-rounded" class="Icon" />
            <h5>CONTACT US</h5>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.nav2 {
  display: none;
}

@media screen and (max-width: 1300px) {
  .nav2 {
    display: block;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 10px;
  }

  .nav2 .links ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav2 .links ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav2 .links ul li:hover {
    background-color: rgba(255, 255, 255, 0.041);
    border-radius: 20px;
  }

  .nav2 .links ul li .Icon {
    font-size: 200%;
    margin: 4px;
  }

  .nav2 .links ul li a {
    text-align: center;
  }

  .nav2 .links ul li h5 {
    font-size: 70%;
    font-weight: 500;
  }
}

@media screen and (max-width: 380px) {
  .nav2 .links ul li .Icon {
    font-size: 150%;
  }

  .nav2 .links ul li h5 {
    font-size: 60%;
  }
}
</style>