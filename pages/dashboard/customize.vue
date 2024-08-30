<script setup lang="ts">
import type {Ref} from "vue";
import {$fetch} from "ofetch";

import CustomizeBox2 from '~/components/dashboard/customize/CustomizeBox2.vue';
import CustomizeBox3 from '~/components/dashboard/customize/CustomizeBox3.vue';
import CustomizeBox4 from '~/components/dashboard/customize/CustomizeBox4.vue';
import CustomizeBox5 from '~/components/dashboard/customize/CustomizeBox5.vue';
import CustomizeBox6 from '~/components/dashboard/customize/CustomizeBox6.vue';
import CustomizeBox7 from '~/components/dashboard/customize/CustomizeBox7.vue';
import CustomizeBox8 from '~/components/dashboard/customize/CustomizeBox8.vue';
import CustomizeBox9 from '~/components/dashboard/customize/CustomizeBox9.vue';
import CustomizeBox10 from '~/components/dashboard/customize/CustomizeBox10.vue';
import CustomizeBox11 from '~/components/dashboard/customize/CustomizeBox11.vue';
import CustomizeBox12 from '~/components/dashboard/customize/CustomizeBox12.vue';
import CustomizeBox13 from '~/components/dashboard/customize/CustomizeBox13.vue';
import CustomizeBox14 from '~/components/dashboard/customize/CustomizeBox14.vue';
import CustomizeBox15 from '~/components/dashboard/customize/CustomizeBox15.vue';
import CustomizeBox16 from '~/components/dashboard/customize/CustomizeBox16.vue';
import CustomizeBox17 from '~/components/dashboard/customize/CustomizeBox17.vue';
import CustomizeBox18 from '~/components/dashboard/customize/CustomizeBox18.vue';
import CustomizeBox19 from '../../components/dashboard/customize/CustomizeBox19.vue';
import CustomizeBox20 from '../../components/dashboard/customize/CustomizeBox20.vue';
import CustomizeBoxUrl from "~/components/dashboard/customize/CustomizeBoxUrl.vue";
import CustomizeBoxDiscord from "~/components/dashboard/customize/CustomizeBoxDiscord.vue";

interface Customize {
  data: Ref<{
    url: string,
    username: string,
    bio: string,
    plan: number,
    discord: {
      invite: string,
      index: number,
    }[],
    linked: string | null,
    enter: string,
    views: boolean,
    quotes: string[],
    colors: string[]
  }>
}


const colorList = ["Color box", "Box outline colors", "Profile outline color", "Icon color"]

let {data} = await useFetch("/api/account/get-customize", {server: true}) as Customize
for (let i = 0; i < 5; i++) {
  if (!data.value.discord[i]) data.value.discord[i] = {invite: "", index: i}
}
data.value.discord = data.value.discord.sort((a, b) => a.index - b.index)

const activeModal = ref("") as Ref<string>

function openModal(modal: string) {
  activeModal.value = modal
}

function closeModal() {
  activeModal.value = ""
}

function singleModalAction() {
  const dataType = activeModal.value as string
  //@ts-ignore
  if (!dataType || !data.value || !data.value[dataType]) return
  closeModal()
  const dataIn = (document.getElementById("singleModalInput") as HTMLInputElement)?.value;
  //@ts-ignore
  const lastValue = data.value[dataType] as string
  //@ts-ignore
  data.value[dataType] = dataIn
  $fetch(`/api/account/update-${dataType}`, {
    method: "POST",
    body: JSON.stringify({data: dataIn})
  }).then(() => {
    useToast().add({
      title: "Success",
      description: "Your data has been updated",
      color: "green",
      icon: "i-material-symbols-check", //@TODO fix icon
    })
  }).catch((e) => {
    //@ts-ignore
    data.value[dataType] = lastValue
    useToast().add({
      title: e.response.statusText,
      description: e.response._data,
      color: "red",
      icon: "mdi:alert-circle", //@TODO fix icon
    })
  })
}

function actionModalQuotes() {
  closeModal()
  const quotes = [] as string[]
  for (let i = 1; i < 4; i++) {
    const q = (document.getElementById("q" + i) as HTMLInputElement)?.value;
    if (q) quotes.push(q)
  }
  $fetch("/api/account/update-quotes", {
    method: "POST",
    body: JSON.stringify(quotes)
  }).then(() => {
    data.value.quotes = quotes
    useToast().add({
      title: "Success",
      description: "Your quotes have been updated",
      color: "green",
      icon: "i-material-symbols-check", //@TODO fix icon
    })
  }).catch((e) => {
    useToast().add({
      title: e.response.statusText,
      description: e.response._data,
      color: "red",
      icon: "mdi:alert-circle", //@TODO fix icon
    })
  })
}

function actionModalDiscord() {
  const index = parseInt(activeModal?.value.split("_")[0] as string) || 0
  if (index < 0 || index > 5) return

  let invite = (document.getElementById("discordModalInput") as HTMLInputElement)?.value;
  if (invite.split("/").length > 4) {
    closeModal()
    return useToast().add({
      title: "Error",
      description: "Invalid discord invite",
      color: "red",
      icon: "mdi:alert-circle", //@TODO fix icon
    })
  }
  invite = invite.split("/")[invite.split("/").length - 1]
  const lastValue = data.value?.discord[index]?.invite || ""
  closeModal()

  data.value.discord[index] = {invite, index}
  $fetch("/api/account/update-discord", {
    method: "POST",
    body: JSON.stringify({index, invite})
  }).then(() => {
    useToast().add({
      title: "Success",
      description: "Your discord invite has been updated",
      color: "green",
      icon: "i-material-symbols-check", //@TODO fix icon
    })
  }).catch((e) => {
    data.value.discord[index] = {invite: lastValue, index}
    useToast().add({
      title: e.response.statusText,
      description: e.response._data,
      color: "red",
      icon: "mdi:alert-circle", //@TODO fix icon
    })
  })
}

function viewState() {
  const view = (document.getElementById("view") as HTMLInputElement)?.checked;
  $fetch("/api/account/update-view", {
    method: "POST",
    body: JSON.stringify({view})
  })
}

function placeHolderText() {
  switch (activeModal.value) {
    case "url":
      return "Enter a url"
    case "username":
      return "Enter a username"
    case "bio":
      return "Enter a bio"
    case "enter":
      return "Enter a welcome message"
  }
}

if (import.meta.client) {
  if (singleModalAction) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (["bio", "enter"].includes(activeModal.value)) return singleModalAction()
        if (activeModal.value === "quotes") return actionModalQuotes()
      }
      if (e.key === "Escape") return closeModal()
    })
  }
}

function updateColor(event: any, i: number) {
  const lastColor = data.value.colors[i]
  data.value.colors[i] = event
  $fetch("/api/account/update-colors", {
    method: "POST",
    body: JSON.stringify(data.value.colors)
  }).then(() => {
    useToast().add({
      title: "Success",
      description: "Your color has been updated",
      color: "green",
      icon: "i-material-symbols-check", //@TODO fix icon
    })
  }).catch((e) => {
    data.value.colors[i] = lastColor
    useToast().add({
      title: e.response.statusText,
      description: e.response._data,
      color: "red",
      icon: "mdi:alert-circle", //@TODO fix icon
    })
  })
}

async function uploadPdp(event: any) {
  const file = event.target.files[0]

  const uploadUrl = await $fetch("/api/account/update-pp", {
    method: "GET",
  })

  const formData = new FormData()
  formData.append("file", file)

  $fetch(uploadUrl, {
    method: "POST",
    body: formData
  }).then(() => {
    useToast().add({
      title: "Success",
      description: "Your profile picture has been updated",
      color: "green",
      icon: "i-material-symbols-check", //@TODO fix icon
    })
  }).catch(() => {
    useToast().add({
      title: "Error",
      description: "An error occurred while updating your profile picture",
      color: "red",
      icon: "mdi:alert-circle", //@TODO fix icon
    })
  })
}

async function uploadBackground(event: any) {
  const file = event.target.files[0]

  const uploadUrl = await $fetch("/api/account/update-background", {
    method: "GET",
  })

  const formData = new FormData()
  formData.append("file", file)

  $fetch(uploadUrl, {
    method: "POST",
    body: formData
  }).then(() => {
    useToast().add({
      title: "Success",
      description: "Your background has been updated",
      color: "green",
      icon: "i-material-symbols-check", //@TODO fix icon
    })
  }).catch(() => {
    useToast().add({
      title: "Error",
      description: "An error occurred while updating your background",
      color: "red",
      icon: "mdi:alert-circle", //@TODO fix icon
    })
  })
}
</script>

<template>
  <div class="content">
    <CustomizeBoxUrl id="customizeBox1"/>
    <CustomizeBox2 id="customizeBox2"/>
    <CustomizeBox3 id="customizeBox3"/>
    <CustomizeBox4 id="customizeBox4"/>
    <CustomizeBox5 :data="data" :uploadPdp="uploadPdp" id="customizeBox5"/>
    <CustomizeBox6 :uploadCursor="null" id="customizeBox6"/>
    <CustomizeBox7 id="customizeBox7"/>
    <CustomizeBox8 :uploadBackground="uploadBackground" id="customizeBox8"/>

    <CustomizeBox9 :data="data" id="customizeBox9"/>

    <CustomizeBoxDiscord v-for="i in 5" :index="i-1" :id="`customizeBox`+(i+9)"/>

    <CustomizeBox15 :data="data" :openModal="openModal" :closeModal="closeModal" :singleModalAction="singleModalAction"
                    :activeModal="activeModal" id="customizeBox15"/>
    <CustomizeBox16 :data="data" :viewState="viewState" id="customizeBox16"/>
    <CustomizeBox17 id="customizeBox17"/>
    <CustomizeBox18 :data="data" id="customizeBox18"/>
    <CustomizeBox19 :data="data" :updateColor="updateColor" id="customizeBox19"/>
    <CustomizeBox20 id="customizeBox20"/>
  </div>
</template>

<style scoped>
.content {
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(60, 1fr);
  grid-auto-rows: max-content;
  gap: 10px;
  box-sizing: border-box;
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
  .content {
    display: flex;
    flex-direction: column;
  }
}
</style>