<script setup lang="ts">
defineProps({
  data: Object,
  updateColor: Function
});
const colorList = ["Color box", "Box outline colors", "Profile outline color", "Icon color"];
</script>

<template>
  <div class="box">
    <div class="padding">
      <div class="title">
        <Icon name="iconoir:fill-color-solid" class="Icon" />
        <h2>COLOR</h2>
      </div>
      <div class="color">
        <div v-for="(color, i) in colorList" :key="i">
          <label for="BoxColor">{{ color }} :</label>
          <div class="info">
            <input type="color" id="BoxColor" name="BoxColor" @change="updateColor($event.target.value, i)"
              :value="data.colors[i]" />
            <input type="text" id="BoxHexColor" name="BoxHexColor" pattern="#[0-9A-Fa-f]{6}"
              title="Entrez une couleur valide au format #RRGGBB" :value="data.colors[i]" />
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
  display: flex;
  flex-direction: column;
  height: 100%;
}

.padding {
  height: 100%;
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

.color {
  flex-grow: 1;
}

.color .info {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.color .info input[type="color"] {
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}

.color .info input[type="text"] {
  background-color: transparent;
  border: none;
  outline: none;
}

.color input[type='color'] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  padding: 0;
  width: 25px;
  height: 25px;
  border: none;
  margin-right: 6px;
  margin-left: 6px;
}

.color input[type='color']::-webkit-color-swatch {
  border: none;
  border-radius: 50%;
}

.color .info {
  flex: 1;
  font-size: 80%;
  font-weight: 400;
  background-color: var(--dashboard-input-background);
  border: 1px solid var(--dashboard-border);
  padding: 4px;
  border-radius: 10px;
}
</style>
