<script setup lang="ts">

// const {pending, data: username} = useFetch(`/api/account/getUser`, {lazy: true}) as {
//   pending: Ref<boolean>,
//   data: Ref<{ username: string, id: number, avatar: string, other: object }>
// };
//
// function createAccountIfNotExists() {
//   const {data: exist} = useFetch(`/api/account/is-exist`, {lazy: true}) as { data: Ref<boolean> }
//   if (!exist.value) useFetch(`/api/account/create`)
// }
//
// createAccountIfNotExists();

definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <div class="content">
    <div class="box" id="customizeBox1">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-globe"></i>
          <h3>DOMAINE AND PSEUDO</h3>
        </div>
        <div class="info">
          <h4>saturne.lol/ad</h4>
          <i class="fa-solid fa-pen" id="modif"></i>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox2">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-user"></i>
          <h3>DISPLAY NAME</h3>
        </div>
        <div class="info">
          <h4>AD</h4>
          <i class="fa-solid fa-pen" id="modif"></i>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox3">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-question"></i>
          <h3>QUOTES</h3>
        </div>
        <div class="info">
          <h4>[QUOTES SATURNE]</h4>
          <i class="fa-solid fa-pen" id="modif"></i>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox4">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-question"></i>
          <h3>DESCRIPTION</h3>
        </div>
        <div class="info">
          <h4>[DESCRIPTION SATURNE]</h4>
          <i class="fa-solid fa-pen" id="modif"></i>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox5">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-question"></i>
          <h3>PROFIL PICTURE</h3>
        </div>
        <div class="dragDrop">
          <label class="uploadFile" for="filePP">
            <a href=""><i class="fa-solid fa-xmark" id="boxClose"></i></a>
            <div class="icon">
              <i class="fa-solid fa-image"></i>
            </div>
            <div class="text">
              <span>Click to upload image</span>
            </div>
            <input type="file" id="filePP" accept=".png, .jpg, .jpeg">
          </label>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox6">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-arrow-pointer"></i>
          <h3>CURSOR</h3>
        </div>
        <div class="dragDrop">
          <label class="uploadFile" for="fileCursor">
            <a href=""><i class="fa-solid fa-xmark" id="boxClose"></i></a>
            <div class="icon">
              <i class="fa-solid fa-image"></i>
            </div>
            <div class="text">
              <span>Click to upload image</span>
            </div>
            <input type="file" id="fileCursor" accept=".png, .jpg, .jpeg, .gif">
          </label>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox7">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-music"></i>
          <h3>AUDIO</h3>
        </div>
        <!-- J'AI PAS FAIS DE LECTEUR MP3 ENCORE, JE VAIS LE FAIRE, DONC PASSE A AUTRE CHOSE LE TEMPS QUE JE LE FASSE -->
        <div class="dragDrop">
          <label class="uploadFile" for="audio">
            <a href=""><i class="fa-solid fa-xmark" id="boxClose"></i></a>
            <div class="icon">
              <i class="fa-solid fa-volume-high"></i>
            </div>
            <div class="text">
              <span>Click to upload audio</span>
            </div>
            <input type="file" id="audio" accept=".mp3, .mp4">
          </label>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox8">
      <div class="padding">
        <div class="title">
          <i class="fa-regular fa-image"></i>
          <h3>BACKGROUND</h3>
        </div>
        <div class="dragDrop">
          <label class="uploadFile" for="fileBackground">
            <a href=""><i class="fa-solid fa-xmark" id="boxClose"></i></a>
            <div class="icon">
              <i class="fa-solid fa-image"></i>
            </div>
            <div class="text">
              <span>Click to upload image</span>
            </div>
            <input type="file" id="fileBackground" accept=".png, .jpg, .jpeg, .gif, .mp4">
          </label>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox9">
      <div class="padding">
        <div class="title">
          <i class="fa-brands fa-discord"></i>
          <h3>BOX N°1 (PROFIL)</h3>
        </div>
        <div class="connexion">
          <h4>.inaudible (123171317456306177) <i class="fa-solid fa-check"></i></h4>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox10">
      <div class="padding">
        <div class="title">
          <i class="fa-brands fa-discord"></i>
          <h3>BOX N°2 (SERVER)</h3>
        </div>
        <div class="info">
          <h4>discord.gg/campement</h4>
          <i class="fa-solid fa-pen" id="modif"></i>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox11">
      <div class="padding">
        <div class="title">
          <i class="fa-brands fa-discord"></i>
          <h3>BOX N°3 (SERVER)</h3>
        </div>
        <div class="info">
          <h4>discord.gg/</h4>
          <i class="fa-solid fa-pen" id="modif"></i>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox12">
      <div class="padding">
        <div class="title">
          <i class="fa-brands fa-discord"></i>
          <h3>BOX N°4 (SERVER)</h3>
        </div>
        <div class="info">
          <h4>discord.gg/</h4>
          <i class="fa-solid fa-pen" id="modif"></i>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox13">
      <div class="padding">
        <div class="title">
          <i class="fa-brands fa-discord"></i>
          <h3>BOX N°5 (SERVER)</h3>
        </div>
        <div class="info">
          <h4>discord.gg/</h4>
          <i class="fa-solid fa-pen" id="modif"></i>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox14">
      <div class="padding">
        <div class="title">
          <i class="fa-brands fa-discord"></i>
          <h3>BOX N°6 (SERVER)</h3>
        </div>
        <div class="info">
          <h4>discord.gg/</h4>
          <i class="fa-solid fa-pen" id="modif"></i>
        </div>
      </div>
    </div>

    <div class="box" id="customizeBox15">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-question"></i>
          <h3>ENTRY MESSAGE</h3>
        </div>
        <div class="info">
          <h4>Click to enter ...</h4>
          <i class="fa-solid fa-pen" id="modif"></i>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox16">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-eye"></i>
          <h3>VIEWS</h3>
        </div>
        <div class="info">
          <h4>SHOW PROFILE VIEWS</h4>
          <div class="switch">
            <input class="input" id="view" type="checkbox" checked>
            <label class="label" for="view"></label>
          </div>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox17">
      <div class="soon">
        <div class="padding">
          <div class="title">
            <i class="fa-brands fa-spotify"></i>
            <h3>SPOTIFY</h3>
          </div>
          <div class="dragDrop">
            <div class="connexion">
              <!--
              <a href=""><i class="fa-brands fa-spotify"></i> LINK ACCOUNT</a>
              -->
              <h4>AD.sglt <i class="fa-solid fa-check"></i></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox18">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-font"></i>
          <h2>FONT</h2>
        </div>
        <div class="dragDrop">
          <label class="uploadFile" for="font">
            <a href=""><i class="fa-solid fa-xmark" id="boxClose"></i></a>
            <div class="icon">
              <i class="fa-solid fa-font"></i>
            </div>
            <div class="text">
              <span>Click to upload font</span>
            </div>
            <input type="file" id="font" accept=".ttf, .otf">
          </label>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox19">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-palette"></i>
          <h2>COLOR</h2>
        </div>
        <div class="color">
          <!-- LES COMMENTAIRES SONT POUR TOI MON PTI CLEMENT -->
          <!-- FAUDRAIT METTRE UNE COULEUR DE BASE -->

          <label for="BoxColor">Color box :</label>
          <!-- COULEUR DES BOX (DISCORD PROFIL, SERVEUR DISCORD) MAIS AUSSI DE LA BOX DES INCONS -->
          <div class="info">
            <input type="color" id="BoxColor" name="BoxColor">
            <input type="text" id="BoxHexColor" name="BoxHexColor" pattern="#[0-9A-Fa-f]{6}"
                   title="Entrez une couleur valide au format #RRGGBB" value="#000000">
          </div>

          <label for="BoxOutlineColor">Box outline colors :</label>
          <!-- COULEUR DES CONTOURS DES BOX (DISCORD PROFIL, SERVEUR DISCORD) ET DE LA BOX DES INCONS -->
          <div class="info">
            <input type="color" id="BoxOutlineColor" name="BoxOutlineColor">
            <input type="text" id="BoxOutlineHexColor" name="BoxOutlineHexColor"
                   pattern="#[0-9A-Fa-f]{6}" title="Entrez une couleur valide au format #RRGGBB"
                   value="#000000">
          </div>

          <label for="ProfilPictureOutlineColor">Profile outline color :</label>
          <!-- COULEUR DES CONTOUR DE LA PP -->
          <div class="info">
            <input type="color" id="ProfilPictureOutlineColor" name="ProfilPictureOutlineColor">
            <input type="text" id="ProfilPictureOutlineHexColor"
                   name="ProfilPictureOutlineHexColor" pattern="#[0-9A-Fa-f]{6}"
                   title="Entrez une couleur valide au format #RRGGBB" value="#000000">
          </div>

          <label for="IconColor">Icon color :</label>
          <!-- COULEUR DES ICONS (3 icons en bas a gauche mais aussi de l'icon view) -->
          <div class="info">
            <input type="color" id="IconColor" name="IconColor">
            <input type="text" id="IconHexColor" name="IconHexColor" pattern="#[0-9A-Fa-f]{6}"
                   title="Entrez une couleur valide au format #RRGGBB" value="#000000">
          </div>
        </div>
      </div>
    </div>
    <div class="box" id="customizeBox20">
      <div class="padding">
        <div class="title">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          <h2>GLOW EFFECT</h2>
        </div>
        <div class="effect">
          <label for="ProfilPictureOutlineColor">Display Name Glow :</label>
          <div class="info">
            <i class="fa-solid fa-user"></i>
            <div class="inputs">
              <input type="color" id="IconGlow" name="IconGlow">
              <input type="text" id="IconHexGlow" name="IconHexGlow" pattern="#[0-9A-Fa-f]{6}"
                     title="Entrez une couleur valide au format #RRGGBB">
            </div>
            <div class="switch">
              <input class="input" id="IconSwitch" type="checkbox">
              <label class="label" for="IconSwitch"></label>
            </div>
          </div>
          <label for="ProfilPictureOutlineColor">Quote Glow :</label>
          <div class="info">
            <i class="fa-solid fa-question"></i>
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
            <i class="fa-solid fa-question"></i>
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
            <i class="fa-brands fa-discord"></i>
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


.content {
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(60, 1fr);
  grid-auto-rows: max-content;
  gap: 10px;
}

.content .box {
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
}

.content .box .soon {
  z-index: 10;
  backdrop-filter: blur(10px);
  border-radius: 20px;
}

.content .box .padding {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.content .box .padding .title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.content .box .padding .title i {
  margin-right: 10px;
}

.content .box .padding .info {
  display: flex;
  align-items: center;
}

.content .box .padding .info h4 {
  flex: 1;
  font-size: 80%;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 4px;
  border-radius: 10px;
}

.content .box .padding .info #modif {
  padding: 7px;
  border-radius: 10px;
  margin-left: 5px;
  transition: 0.3s ease;
}

.content .box .padding .info #modif:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* --------------------------------------- SWITCH --------------------------------------- */

.content .box .padding .switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin-right: 10px;
  margin-left: 10px;
}

.content .box .padding .switch .input {
  display: none;
}

.content .box .padding .switch .label {
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

.content .box .padding .switch .label::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  background-color: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.content .box .padding .switch .input:checked + .label {
  background-color: #7f4caf;
}

.content .box .padding .switch .input:checked + .label::before {
  transform: translateX(16px);
}

.content .box .padding .switch.light .label {
  background-color: #BEBEBE;
}

.content .box .padding .switch.light .input:checked + .label {
  background-color: #9B9B9B;
}

.content .box .padding .switch.light .input:checked + .label::before {
  transform: translateX(6px);
}

.content .box .padding .switch.dark .label {
  background-color: #4B4B4B;
}

.content .box .padding .switch.dark .input:checked + .label {
  background-color: #717171;
}

.content .box .padding .switch.dark .input:checked + .label::before {
  transform: translateX(16px);
}

/* --------------------------------------- UPLOAD --------------------------------------- */

.content .box .padding .dragDrop {
  flex-grow: 1;
}

.content .box .padding .dragDrop .uploadFile {
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 30px 0px 30px 0px;
  border-radius: 10px;
  transition: 0.4s ease;
}

.content .box .padding .dragDrop .uploadFile img,
.content .box .padding .dragDrop .uploadFile video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0px;
  border-radius: 10px;
}

.content .box .padding .dragDrop .uploadFile:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.content .box .padding .dragDrop .uploadFile .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content .box .padding .dragDrop .uploadFile .icon i {
  font-size: 500%;
  fill: #fff;
}

.content .box .padding .dragDrop .uploadFile .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content .box .padding .dragDrop .uploadFile .text span {
  font-weight: 400;
}

.content .box .padding .dragDrop .uploadFile input {
  display: none;
}

/* BOX 1 DISCORD ET BOX SPOTIFY */

.content .box .padding .connexion h4 {
  width: min-content;
  white-space: nowrap;
  font-weight: 300;
  background-color: #424242;
  padding: 4px;
  border-radius: 10px;
}

.content .box .padding .connexion i {
  color: #bc6bff;
  margin-right: 5px;
  margin-left: 6px;
}

.content .box .padding .color .info,
.content .box .padding .effect .info {
  margin-bottom: 5px;
}


.content .box .padding .color input[type="color"],
.content .box .padding .effect input[type="color"] {
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}

.content .box .padding .color input[type="text"],
.content .box .padding .effect input[type="text"] {
  background-color: transparent;
  border: none;
  outline: none;
}


.content .box .padding .color input[type='color'],
.content .box .padding .effect input[type='color'] {
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

.content .box .padding .color input[type='color']::-webkit-color-swatch,
.content .box .padding .effect input[type='color']::-webkit-color-swatch {
  border: none;
  border-radius: 50%;
}

.content .box .padding .color .info,
.content .box .padding .effect .inputs {
  flex: 1;
  font-size: 80%;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 4px;
  border-radius: 10px;
}

.content .box .padding .effect .info i {
  margin-left: 6px;
  margin-right: 12px;
}

#customizeBox1 {
  grid-column: 1 / 16;
}

#customizeBox2 {
  grid-column: 16 / 31;
}

#customizeBox3 {
  grid-column: 31 / 46;
}

#customizeBox4 {
  grid-column: 46 / 61;
}

#customizeBox5 {
  grid-column: 1 / 12;
}

#customizeBox6 {
  grid-column: 12 / 23;
}

#customizeBox7 {
  grid-column: 1 / 23;
}

#customizeBox8 {
  grid-column: 23 / -1;
  grid-row: 2 / 4;
}

#customizeBox9 {
  grid-column: 1 / 21;
}

#customizeBox10 {
  grid-column: 21 / 41;
}

#customizeBox11 {
  grid-column: 41 / 61;
}

#customizeBox12 {
  grid-column: 1 / 21;
}

#customizeBox13 {
  grid-column: 21 / 41;
}

#customizeBox14 {
  grid-column: 41 / 61;
}

#customizeBox15 {
  grid-column: 1 / 21;
}

#customizeBox16 {
  grid-column: 21 / 41;
}

#customizeBox17 {
  grid-column: 41 / 61;
}

#customizeBox18 {
  grid-column: 1 / 16;
}

#customizeBox19 {
  grid-column: 16 / 31;
}

#customizeBox20 {
  grid-column: 31 / 61;
}

#boxClose {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 2px 5px 2px 5px;
  border-radius: 6px;
  font-size: 150%;
  z-index: 10;
  transition: 0.3s ease;
}

#boxClose:hover {
  background-color: #ffffff73;
}

@media screen and (max-width: 1550px) {
  .content .box .padding .title h3 {
    font-size: 90%;
  }

  .content .box .padding .dragDrop .uploadFile .text span {
    font-size: 90%;
    text-align: center;
  }
}

@media screen and (max-width: 1000px) {
  #customizeBox1 {
    grid-column: 1 / 31;
  }

  #customizeBox2 {
    grid-column: 31 / 61;
  }

  #customizeBox3 {
    grid-column: 1 / 31;
  }

  #customizeBox4 {
    grid-column: 31 / 61;
  }

  #customizeBox5 {
    grid-column: 1 / 31;
  }

  #customizeBox6 {
    grid-column: 31 / 61;
  }

  #customizeBox7 {
    grid-column: 31 / 61;
    grid-row: 10 / 11;
  }

  #customizeBox8 {
    grid-column: 1 / 61;
    grid-row: 4 / 6;
  }

  #customizeBox9 {
    grid-column: 1 / 31;
  }

  #customizeBox10 {
    grid-column: 31 / 61;
  }

  #customizeBox11 {
    grid-column: 1 / 31;
  }

  #customizeBox12 {
    grid-column: 31 / 61;
  }

  #customizeBox13 {
    grid-column: 1 / 31;
  }

  #customizeBox14 {
    grid-column: 31 / 61;
  }

  #customizeBox15 {
    grid-column: 1 / 21;
  }

  #customizeBox16 {
    grid-column: 21 / 41;
  }

  #customizeBox17 {
    grid-column: 41 / 61;
  }

  #customizeBox18 {
    grid-column: 1 / 31;
  }

  #customizeBox19 {
    grid-column: 1 / 31;
  }

  #customizeBox20 {
    grid-column: 31 / 61;
  }
}

@media screen and (max-width: 750px) {
  .content .box .padding .info h4 {
    font-size: 70%;
  }

  .content .box .padding .connexion h4 {
    font-size: 80%;
  }
}

@media screen and (max-width: 700px) {
  #customizeBox7 {
    grid-column: 1 / 61;
  }

  #customizeBox15 {
    grid-column: 1 / 31;
  }

  #customizeBox16 {
    grid-column: 31 / 61;
  }

  #customizeBox17 {
    grid-column: 1 / 61;
  }

  #customizeBox18 {
    grid-column: 1 / 61;
  }

  #customizeBox19 {
    grid-column: 1 / 61;
  }

  #customizeBox20 {
    grid-column: 1 / 61;
  }
}

@media screen and (max-width: 600px) {
  #customizeBox1 {
    grid-column: 1 / 61;
  }

  #customizeBox2 {
    grid-column: 1 / 61;
  }

  #customizeBox3 {
    grid-column: 1 / 61;
  }

  #customizeBox4 {
    grid-column: 1 / 61;
  }

  #customizeBox5 {
    grid-column: 1 / 61;
  }

  #customizeBox6 {
    grid-column: 1 / 61;
  }

  #customizeBox7 {
    grid-column: 1 / 61;
  }

  #customizeBox8 {
    grid-column: 1 / 61;
  }

  #customizeBox9 {
    grid-column: 1 / 61;
  }

  #customizeBox10 {
    grid-column: 1 / 61;
  }

  #customizeBox11 {
    grid-column: 1 / 61;
  }

  #customizeBox12 {
    grid-column: 1 / 61;
  }

  #customizeBox13 {
    grid-column: 1 / 61;
  }

  #customizeBox14 {
    grid-column: 1 / 61;
  }

  #customizeBox15 {
    grid-column: 1 / 61;
  }

  #customizeBox16 {
    grid-column: 1 / 61;
  }

  #customizeBox17 {
    grid-column: 1 / 61;
  }

  #customizeBox18 {
    grid-column: 1 / 61;
  }

  #customizeBox19 {
    grid-column: 1 / 61;
  }

  #customizeBox20 {
    grid-column: 1 / 61;
  }
}
</style>