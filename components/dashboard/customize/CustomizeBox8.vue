<script setup lang="ts">
defineProps({
  uploadBackground: Function
});
</script>

<template>
  <div class="box">
    <div class="padding">
      <div class="title">
        <Icon name="ic:baseline-insert-photo" class="Icon" />
        <h3>BACKGROUND</h3>
      </div>
      <div class="dragDrop">
        <label class="uploadFile" for="fileBackground">
          <a href="">
            <div class="IconClose">
              <Icon name="maki:cross" />
            </div>
          </a>
          <div class="icon">
            <Icon name="ic:baseline-insert-photo" class="Icon" />
          </div>
          <div class="text">
            <span>Click to upload image</span>
          </div>
          <input type="file" id="fileBackground" accept=".png, .jpg, .jpeg" @change="uploadBackground($event)" />
        </label>
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
  display: flex;
  flex-direction: column;
  height: 100%;
  /* Ajouté pour que la boîte prenne toute la hauteur disponible */
}

.padding {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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

.uploadFile {
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  background-color: var(--dashboard-input-background);
  border: 1px solid var(--dashboard-border);
  padding: 30px 0;
  border-radius: 10px;
  transition: 0.4s ease;
}

.uploadFile:hover {
  background-color: var(--dashboard-box-background);
}

.uploadFile .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.uploadFile .icon .Icon {
  font-size: 500%;
  fill: #fff;
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

.IconClose {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 3px;
  border-radius: 6px;
  z-index: 5;
  transition: 0.3s ease;
}

.IconClose:hover {
  background-color: var(--dashboard-button-close);
}
</style>
