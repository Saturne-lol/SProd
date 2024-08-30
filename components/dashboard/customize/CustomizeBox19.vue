<script setup lang="ts">
const data = defineProps({
  colors: {
    type: Object, // Spécifiez que c'est un objet
    required: true, // Indiquez si la prop est requise
    default: () => ({
      box: '#FFFFFF',
      box_outline: '#FFFFFF',
      profile_outline: '#FFFFFF',
      icon_color: '#FFFFFF'
    })
  }
});

let colors = ref([
  {key: 'box', name: 'Color box', value: data.colors.box},
  {key: 'box_outline', name: 'Box outline colors', value: data.colors.box_outline},
  {key: 'profile_outline', name: 'Profile outline color', value: data.colors.profile_outline},
  {key: 'icon_color', name: 'Icon color', value: data.colors.icon_color}
]);

function updateColor(value: string, key: string) {
  dashboard.customize.set.color(value, key).then((r) => {
    if (r) return;
    const colorToUpdate = colors.value.find((c) => c.key === key);
    if (!colorToUpdate) return;
    colorToUpdate.value = data.colors[key];
  });
}
</script>

<template>
  <div class="box">
    <div class="padding">
      <div class="title">
        <Icon name="iconoir:fill-color-solid" class="Icon"/>
        <h2>COLOR</h2>
      </div>
      <div class="color">
        <div v-for="color in colors">
          <label for="BoxColor">{{ color.name }} :</label>
          <div class="info">
            <input type="color" :id="color.key" :name="color.key"
                   @change="(e) => color.value = (e?.target as any).value || '#FFFFFF'"
                   @blur="updateColor(color.value, color.key)"
                   v-model="color.value"/>
            <input type="text" :id="color.key + '_hex'" :name="color.key + '_hex'" pattern="#[0-9A-Fa-f]{6}"
                   title="Entrez une couleur valide au format #RRGGBB"
                   :value="color.value.toUpperCase()"
                   @blur="updateColor(color.value, color.key)"/>
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
