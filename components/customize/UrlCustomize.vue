<script setup lang="ts">

</script>

<template>
  <div class="box" id="customizeBox1">
    <div class="padding">
      <div class="title">
        <Icon name="ph:planet-fill" class="Icon"/>
        <h3>DOMAINE AND PSEUDO</h3>
      </div>
      <div class="info">
        <h4>saturne.lol/<!--{{ data.url }}--></h4>
        <Icon name="ic:baseline-edit" id="modif"/><!--@click="openModal('url')"/> -->
      </div>
    </div>
  </div>
  <div class="modal" v-if="false">
    <div class="center">
      <div class="content1input">
        <Icon name="maki:cross" id="closeModal" @click="/*closeModal*/"/>
        <Icon name="ph:planet-fill" class="Icon"/>
        <!--
        <Icon name="ph:person-arms-spread-fill" class="Icon"/> POUR LA BOX DISPLAY NAME
        <Icon name="pajamas:information" class="Icon"/> POUR LA BOX DESCRIPTION
        <Icon name="streamline:emergency-exit-solid" class="Icon"/> POUR LA BOX ENTRY MESSAGE
        -->
        <h5>-</h5>
        <input type="text" :placeholder="/*placeHolderText()*/''" id="singleModalInput" maxlength="60"/>
        <button @click="/*singleModalAction*/''">
          <Icon name="material-symbols:check" id="save"/>
        </button>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>