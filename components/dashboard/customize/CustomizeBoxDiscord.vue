<script setup lang="ts">
const PlanEnum = {
  FREE: "FREE",
  PREMIUM: "PREMIUM",
  PREMIUM_PLUS: "PREMIUM_PLUS",
}

const props = defineProps({
  index: Number,
  invite: String,
  plan: String,
});

// let invite = props.index !== undefined ? await dashboard.customize.get.invite(props.index) : "";
let invite = props.invite;
const visibleModal = ref(false);
const inputInvite = ref("");
// const plan = await dashboard.global.getPlan();

function updateInvite() {
  if (!visibleModal.value) return;
  if (!inputInvite.value) inputInvite.value = "delete_invite";
  if (props.index === undefined) return;
  dashboard.customize.set.invite(props.index, inputInvite.value).then(async (r) => {
    visibleModal.value = false;
    if (!r) return inputInvite.value = "";
    invite = inputInvite.value.toLowerCase();
    if (invite === "delete_invite") invite = "";
  });
}

if (import.meta.client) {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") visibleModal.value = false;
    if (e.key === "Enter") updateInvite();
  });
}

const needPremium = ((props.index ?? -1) > 0 && props.plan !== PlanEnum.PREMIUM && props.plan !== PlanEnum.PREMIUM_PLUS) ||
  ((props.index ?? -1) > 2 && props.plan !== PlanEnum.PREMIUM_PLUS);

</script>

<template>
  <div>
    <div class="box">
      <div class="premium" v-if="needPremium">
        <h1>Premium{{ index !== undefined ? (index > 2 ? "+" : "") : "" }}</h1>
        <h2>Emplacement de serveur</h2>
      </div>
      <div class="padding">
        <div class="title">
          <Icon name="akar-icons:discord-fill" class="Icon" />
          <h3>BOX N°{{ index !== undefined ? index + 1 : "?" }} (SERVER)</h3>
        </div>
        <div class="info">
          <h4>discord.gg/{{ invite || "" }}</h4>
          <div class="IconM">
            <Icon name="ic:baseline-edit" id="modif" @click="visibleModal = true" />
          </div>
        </div>
      </div>
    </div>
    <div class="modal" v-if="visibleModal">
      <div class="center">
        <div class="content1input">
          <Icon name="maki:cross" id="closeModal" @click="visibleModal = false" />
          <Icon name="akar-icons:discord-fill" class="Icon" />
          <h5>-</h5>
          <input type="text" placeholder="discord.gg/" id="discordModalInput" maxlength="60" v-model="inputInvite" />
          <button @click="updateInvite">
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

.premium {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  backdrop-filter: blur(3px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.premium h1 {
  font-size: 150%;
  font-weight: 700;
  text-shadow: 0 0 25px #000000;
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

.info .IconM {
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  margin-left: 5px;
  transition: 0.3s ease;
}

.info .IconM #modif {
  font-size: 18px;
}

.info .IconM:hover {
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