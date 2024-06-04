<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="title">
      <h3>Copyright © 2024 saturne.lol</h3>
    </div>
    <div class="links">
      <a href="">Privacy</a>
      <a href="">Policy Terms of Service </a>
      <a href="">Discord</a>
    </div>
  </footer>
</template>

<style scoped>

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.footer h3{
  font-weight: 500;
}

.footer a{
  margin-right: 30px;
}

@media screen and (max-width: 750px) {
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 10px;
    border-radius: 20px;
    margin-top: 30px;
  }

  .footer h3{
    font-size: 90%;
  }

  .footer a{
    font-size: 80%;
    margin-right: 20px;
  }
}

  @media screen and (max-width: 600px) {
    .footer {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 350px) {
    .footer a{
      font-size: 80%;
      margin-right: 10px;
    }
  }
</style>