<script setup lang="ts">
const data = defineProps({ entry: String });
let entry = data.entry as string;
const entryVisible = ref(false);

function updateQuotes() {
  if (!entryVisible.value) return;
  dashboard.customize.set.entry(entry).then(async (r) => {
    entryVisible.value = false;
  });
}

if (import.meta.client) {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") entryVisible.value = false;
    if (e.key === "Enter") updateQuotes();
  });
}
</script>

<template>
  <div>
    <div class="box">
      <div class="padding">
        <div class="title">
          <Icon name="streamline:emergency-exit-solid" class="Icon" />
          <h3>ENTRY MESSAGE</h3>
        </div>
        <div class="info">
          <h4>{{ entry }}</h4>
          <Icon name="ic:baseline-edit" id="modif" @click="entryVisible = true" />
        </div>
      </div>
    </div>
    <div class="modal" v-if="entryVisible">
      <div class="center">
        <div class="content1input">
          <Icon name="maki:cross" id="closeModal" @click="entryVisible = false" />
          <Icon name="streamline:emergency-exit-solid" class="Icon" />
          <h5>-</h5>
          <input type="text" placeholder="Enter a welcome message" id="singleModalInput" maxlength="60" v-model="entry" />
          <button @click="updateQuotes">
            <Icon name="material-symbols:check" id="save" />
          </button>
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

.info {
  display: flex;
  align-items: center;
}

.info h4 {
  flex: 1;
  font-size: 80%;
  font-weight: 400;
  background-color: var(--dashboard-input-background);
  border: 1px solid var(--dashboard-border);
  padding: 4px;
  border-radius: 10px;
}

.info #modif {
  font-size: 30px;
  padding: 4px;
  border-radius: 10px;
  margin-left: 5px;
  transition: 0.3s ease;
}

.info #modif:hover {
  background-color: var(--dashboard-box-background);
}

.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(15px);
  z-index: 100;
  overflow: hidden;
}

#closeModal {
  position: absolute;
  top: 50px;
  right: 50px;
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
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 auto;
}

.modal .content1input {
  display: grid;
  grid-template-columns: 1fr 1fr 8fr 1fr;
  justify-content: center;
  align-items: center;
}

.modal h5 {
  font-size: 100%;
  font-weight: 500;
}

.modal .Icon {
  font-size: 200%;
}

.modal input {
  width: 100%;
  font-size: 120%;
  font-weight: 400;
  background-color: var(--dashboard-input-background);
  border: 1px solid var(--dashboard-border);
  padding: 4px 12px 4px 12px;
  border-radius: 10px;
  outline: none;
}

.modal button {
  width: 25px;
  height: 25px;
  background-color: #46c94c;
  border: none;
  border-radius: 5px;
  transition: 0.3s ease;
  cursor: pointer;
}

.modal .content1input button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
}

.modal button:hover {
  background-color: #35a13a;
}

.modal button #save {
  font-size: 180%;
}
</style>
