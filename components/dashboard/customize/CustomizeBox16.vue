<script setup lang="ts">
const data = defineProps({view: Boolean});
let view = ref(data.view);

function update() {
  dashboard.customize.set.view(view.value).then(async (r) => {
    if (!r) view.value = !view.value;
  });
}
</script>

<template>
  <div>
    <div class="box">
      <div class="padding">
        <div class="title">
          <Icon name="mdi:eye" class="Icon" />
          <h3>VIEWS</h3>
        </div>
        <div class="info">
          <h4>SHOW PROFILE VIEWS</h4>
          <div class="switch">
            <input class="input" id="view" type="checkbox" v-model="view" @change="update" />
            <label class="label" for="view"></label>
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