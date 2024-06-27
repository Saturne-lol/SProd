<script setup lang="ts">
import CustomizeSoon from '~/components/customize/CustomizeSoon.vue';

</script>

<template>
  <div>
    <div class="box">
      <CustomizeSoon />
      <div class="padding">
        <div class="title">
          <Icon name="bi:spotify" class="Icon" />
          <h3>SPOTIFY</h3>
        </div>
        <div class="dragDrop">
          <div class="connexion">
            <h4>AD.sglt
              <Icon name="bi:check-circle" id="check" />
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  position: relative;
  background-color: var(--dashboard-box-background);
  border: 1px solid var(--dashboard-border);
  border-radius: 20px;
}

.padding {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.title .Icon {
  margin-right: 10px;
}

.dragDrop {
  flex-grow: 1;
}

.connexion h4 {
  width: min-content;
  white-space: nowrap;
  font-weight: 300;
  background-color: #424242;
  padding: 4px;
  border-radius: 10px;
}

.connexion #check {
  margin-right: 5px;
  margin-left: 6px;
  color: var(--check);
}
</style>