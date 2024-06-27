<script setup lang="ts">
import CustomizeSoon from '~/components/customize/CustomizeSoon.vue';

</script>

<template>
  <div>
    <div class="box">
      <CustomizeSoon />
      <div class="padding">
        <div class="title">
          <Icon name="ph:magic-wand-fill" class="Icon" />
          <h2>GLOW EFFECT</h2>
        </div>
        <div class="effect">
          <label for="ProfilPictureOutlineColor">Display Name Glow :</label>
          <div class="info">
            <Icon name="ph:person-arms-spread-fill" class="Icon" />
            <div class="inputs">
              <input type="color" id="IconGlow" name="IconGlow" />
            </div>
            <div class="switch">
              <input class="input" id="IconSwitch" type="checkbox" />
              <label class="label" for="IconSwitch"></label>
            </div>
          </div>
          <label for="ProfilPictureOutlineColor">Quote Glow :</label>
          <div class="info">
            <Icon name="fa6-solid:quote-left" class="Icon" />
            <div class="inputs">
              <input type="color" id="IconGlow" name="IconGlow">
              <input type="text" id="IconHexGlow" name="IconHexGlow" pattern="#[0-9A-Fa-f]{6}"
                title="Entrez une couleur valide au format #RRGGBB">
            </div>
            <div class="switch">
              <input class="input" id="QuoteSwitch" type="checkbox">
              <label class="label" for="QuoteSwitch"></label>
            </div>
          </div>
          <label for="ProfilPictureOutlineColor">Description Glow :</label>
          <div class="info">
            <Icon name="pajamas:information" class="Icon" />
            <div class="inputs">
              <input type="color" id="IconGlow" name="IconGlow">
              <input type="text" id="IconHexGlow" name="IconHexGlow" pattern="#[0-9A-Fa-f]{6}"
                title="Entrez une couleur valide au format #RRGGBB">
            </div>
            <div class="switch">
              <input class="input" id="DescriptionSwitch" type="checkbox">
              <label class="label" for="DescriptionSwitch"></label>
            </div>
          </div>
          <label for="ProfilPictureOutlineColor">Box Glow :</label>
          <div class="info">
            <Icon name="akar-icons:discord-fill" class="Icon" />
            <div class="inputs">
              <input type="color" id="IconGlow" name="IconGlow">
              <input type="text" id="IconHexGlow" name="IconHexGlow" pattern="#[0-9A-Fa-f]{6}"
                title="Entrez une couleur valide au format #RRGGBB">
            </div>
            <div class="switch">
              <input class="input" id="BoxSwitch" type="checkbox">
              <label class="label" for="BoxSwitch"></label>
            </div>
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

.Icon {
  margin-right: 10px;
}

.effect .info {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.inputs {
  flex: 1;
  font-size: 80%;
  font-weight: 400;
  background-color: var(--dashboard-input-background);
  border: 1px solid var(--dashboard-border);
  padding: 4px;
  border-radius: 10px;
}

.inputs input[type="color"] {
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border: none;
  margin-right: 6px;
  margin-left: 6px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.inputs input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 50%;
}

.inputs input[type="text"] {
  background-color: transparent;
  border: none;
  outline: none;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin-right: 10px;
  margin-left: 10px;
}

.input {
  display: none;
}

.label {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 24px;
  background-color: #aaaaaa;
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.label::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.input:checked+.label {
  background-color: #7f4caf;
}

.input:checked+.label::before {
  transform: translateX(16px);
}
</style>
