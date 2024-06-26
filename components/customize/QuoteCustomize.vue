<script setup lang="ts">

</script>

<template>
  <div class="box" id="customizeBox3">
      <div class="padding">
        <div class="title">
          <Icon name="fa6-solid:quote-left" class="Icon"/>
          <h3>QUOTES</h3>
        </div>
        <div class="info">
          <h4>QUOTES SATURNE</h4>
          <Icon name="ic:baseline-edit" id="modif" /> <!-- @click="openModal('quotes')"/> -->
        </div>
      </div>
    </div> <!-- Quotes -->

    <div class="modal" v-if="false">
    <div class="center">
      <div class="content3inputs">
        <Icon name="maki:cross" id="closeModal" /> <!-- @click="closeModal" /> -->
        <div v-for="i in 3">
          <Icon name="fa6-solid:quote-left" class="Icon" /> <!-- v-if="data.quotes[i - 1]"/> -->
          <h5 v-if="data.quotes[i - 1]">-</h5>
          <input type="text" placeholder="Enter a quote" :id="'q' + i"
                 :value="data.quotes[i - 1] ? data.quotes[i - 1] : ''"/>
        </div>
        <button>
          <Icon name="material-symbols:check" id="save"  /> <!-- @click="actionModalQuotes"/> -->
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* BOX */
.content .box {
  position: relative;
  background-color: var(--dashboard-box-background);
  border: 1px solid var(--dashboard-border);
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

.content .box .padding .title .Icon {
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
  background-color: var(--dashboard-input-background);
  border: 1px solid var(--dashboard-border);
  padding: 4px;
  border-radius: 10px;
}

.content .box .padding .info #modif {
  font-size: 30px;
  padding: 4px;
  border-radius: 10px;
  margin-left: 5px;
  transition: 0.3s ease;
}

.content .box .padding .info #modif:hover {
  background-color: var(--dashboard-box-background);
}

/* MODAL */
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(15px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

#closeModal {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 3px;
  border-radius: 6px;
  font-size: 180%;
  z-index: 10;
  transition: 0.3s ease;
  cursor: pointer;
}

#closeModal:hover {
  background-color: var(--dashboard-button-close);
}

.modal .center {
  width: 50%;
  background-color: var(--dashboard-modal-background);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal .content3inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.modal .content3inputs div {
  display: flex;
  align-items: center;
  width: 100%;
}

.modal .content3inputs .Icon {
  font-size: 200%;
  margin-right: 10px;
}

.modal .content3inputs h5 {
  font-size: 100%;
  font-weight: 500;
  margin-right: 10px;
}

.modal input {
  flex: 1;
  font-size: 120%;
  font-weight: 400;
  background-color: var(--dashboard-input-background);
  border: 1px solid var(--dashboard-border);
  padding: 4px 12px;
  border-radius: 10px;
  outline: none;
}

.modal button {
  width: 35px;
  height: 35px;
  background-color: #46c94c;
  border: none;
  border-radius: 5px;
  transition: 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal button:hover {
  background-color: #35a13a;
}

.modal button #save {
  font-size: 180%;
  color: white;
}

@media screen and (max-width: 1000px) {
  .modal .center {
    width: 70%;
  }
}

@media screen and (max-width: 600px) {
  .modal .center {
    width: 90%;
  }

  .modal .content3inputs div {
    flex-direction: column;
    align-items: flex-start;
  }

  .modal input {
    width: 100%;
    margin-top: 10px;
  }
}
</style>