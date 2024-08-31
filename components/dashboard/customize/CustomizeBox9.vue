<script setup lang="ts">
const {linked} = defineProps({linked: String});
</script>

<template>
  <div>
    <div class="box">
      <div class="padding">
        <div class="title">
          <Icon name="akar-icons:discord-fill" class="Icon"/>
          <h3>BOX N°1 (PROFIL)</h3>
        </div>
        <div class="connexion" v-if="linked!=='false'">
          <h4>{{ linked }}
            <Icon name="bi:check-circle" id="check"/>
          </h4>
        </div>
        <div class="connexion" v-else>
          <h4>Join our <a href="https://discord.gg/saturne"> discord server</a>
            <Icon name="radix-icons:cross-circled" id="uncheck"/>
          </h4>
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

.connexion h4 {
  width: min-content;
  white-space: nowrap;
  font-weight: 300;
  background-color: #424242;
  padding: 4px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.connexion a {
  color: rgba(233, 159, 255, 0.6);
}

#check,
#uncheck {
  margin-right: 5px;
  margin-left: 6px;
}

#check {
  color: var(--check);
}

#uncheck {
  color: var(--uncheck);
  font-size: 120%;
}
</style>