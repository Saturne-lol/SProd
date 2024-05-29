<script setup lang="ts">

</script>

<template>
  <div class="nav2">
    <div class="links">
      <ul>
        <a href="customize.html">
          <li><i class="fa-solid fa-paintbrush"></i></li>
        </a>
        <a href="links.html">
          <li><i class="fa-solid fa-link"></i></li>
        </a>
        <a href="stats.html">
          <li><i class="fa-solid fa-chart-simple"></i></li>
        </a>
        <a href="contact.html">
          <li><i class="fa-solid fa-at"></i></li>
        </a>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.mainContainer .nav2 {
  display: none;
}

@media screen and (max-width: 1300px) {
  .nav2 {
    display: none;
  }

  @media screen and (max-width: 1300px) {
    .mainContainer .nav {
      display: none;
    }

    .mainContainer {
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 30fr 1fr;
      padding: 0px;
    }

    .mainContainer .nav2 {
      display: block;
      margin-bottom: 20px;
    }

    .mainContainer .nav2 .links ul {
      display: flex;
      justify-content: space-between;
      text-align: center;
    }

    .mainContainer .nav2 .links ul li {
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.4);
      padding: 5px;
      border-radius: 15px;
      cursor: pointer;
      margin-left: 30px;
      margin-right: 30px;
    }
  }
}
</style>