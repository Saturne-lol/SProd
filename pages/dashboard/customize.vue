<script setup lang="ts">
import type {Ref} from 'vue';
import {$fetch} from 'ofetch';

import CustomizeUsername from '~/components/dashboard/customize/CustomizeBox2.vue';
import CustomizeBox3 from '~/components/dashboard/customize/CustomizeBox3.vue';
import CustomizeBox4 from '~/components/dashboard/customize/CustomizeBox4.vue';
import CustomizeBox5 from '~/components/dashboard/customize/CustomizeBox5.vue';
import CustomizeBox6 from '~/components/dashboard/customize/CustomizeBox6.vue';
import CustomizeBox7 from '~/components/dashboard/customize/CustomizeBox7.vue';
import CustomizeBox8 from '~/components/dashboard/customize/CustomizeBox8.vue';
import CustomizeBox9 from '~/components/dashboard/customize/CustomizeBox9.vue';
import CustomizeBox15 from '~/components/dashboard/customize/CustomizeBox15.vue';
import CustomizeBox17 from '~/components/dashboard/customize/CustomizeBox17.vue';
import CustomizeBox20 from '../../components/dashboard/customize/CustomizeBox20.vue';
import CustomizeBoxUrl from '~/components/dashboard/customize/CustomizeBoxUrl.vue';
import CustomizeBoxDiscord from '~/components/dashboard/customize/CustomizeBoxDiscord.vue';
import CustomizeBox16 from '~/components/dashboard/customize/CustomizeBox16.vue';

interface Customize {
  url: string,
  username: string,
  bio: string,
  plan: string,
  discord: {
    invite: string,
    index: number,
  }[],
  linked: string,
  entry: string,
  view: boolean,
  quotes: string[],
  colors: string[]
}


const data: Customize = (await useFetch('/api/dashboard/customize/get', {server: true})).data.value as Customize;

const activeModal = ref('') as Ref<string>;

function openModal(modal: string) {
  activeModal.value = modal;
}

function closeModal() {
  activeModal.value = '';
}

function singleModalAction() {
  const dataType = activeModal.value as string;
  //@ts-ignore
  if (!dataType || !data.value || !data.value[dataType]) return;
  closeModal();
  const dataIn = (document.getElementById('singleModalInput') as HTMLInputElement)?.value;
  //@ts-ignore
  const lastValue = data.value[dataType] as string;
  //@ts-ignore
  data.value[dataType] = dataIn;
  $fetch(`/api/account/update-${dataType}`, {
    method: 'POST',
    body: JSON.stringify({data: dataIn})
  }).then(() => {
    useToast().add({
      title: 'Success',
      description: 'Your data has been updated',
      color: 'green',
      icon: 'i-material-symbols-check' //@TODO fix icon
    });
  }).catch((e) => {
    //@ts-ignore
    data.value[dataType] = lastValue;
    useToast().add({
      title: e.response.statusText,
      description: e.response._data,
      color: 'red',
      icon: 'mdi:alert-circle' //@TODO fix icon
    });
  });
}

async function uploadPdp(event: any) {
  const file = event.target.files[0];

  const uploadUrl = await $fetch('/api/account/update-pp', {
    method: 'GET'
  });

  const formData = new FormData();
  formData.append('file', file);

  $fetch(uploadUrl, {
    method: 'POST',
    body: formData
  }).then(() => {
    useToast().add({
      title: 'Success',
      description: 'Your profile picture has been updated',
      color: 'green',
      icon: 'i-material-symbols-check' //@TODO fix icon
    });
  }).catch(() => {
    useToast().add({
      title: 'Error',
      description: 'An error occurred while updating your profile picture',
      color: 'red',
      icon: 'mdi:alert-circle' //@TODO fix icon
    });
  });
}

async function uploadBackground(event: any) {
  const file = event.target.files[0];

  const uploadUrl = await $fetch('/api/account/update-background', {
    method: 'GET'
  });

  const formData = new FormData();
  formData.append('file', file);

  $fetch(uploadUrl, {
    method: 'POST',
    body: formData
  }).then(() => {
    useToast().add({
      title: 'Success',
      description: 'Your background has been updated',
      color: 'green',
      icon: 'i-material-symbols-check' //@TODO fix icon
    });
  }).catch(() => {
    useToast().add({
      title: 'Error',
      description: 'An error occurred while updating your background',
      color: 'red',
      icon: 'mdi:alert-circle' //@TODO fix icon
    });
  });
}
</script>

<template>
  <div class="content">
    <CustomizeBoxUrl id="customizeBox1" :url="data?.url"/>
    <CustomizeUsername id="customizeBox2" :username="data?.username"/>
    <CustomizeBox3 id="customizeBox3" :quotes="data?.quotes"/>
    <CustomizeBox4 id="customizeBox4" :bio="data?.bio"/>
    <CustomizeBox5 :uploadPdp="uploadPdp" id="customizeBox5"/>
    <CustomizeBox6 :uploadCursor="function(){}" id="customizeBox6"/>
    <CustomizeBox7 id="customizeBox7"/>
    <CustomizeBox8 :uploadBackground="uploadBackground" id="customizeBox8"/>
    <CustomizeBox9 :linked="data?.linked" id="customizeBox9"/>

    <CustomizeBoxDiscord v-for="i in 5" :index="i-1" :plan="data?.plan"
                         :invite="(data?.discord ?? []).find((d: any) => d.index === i-1)?.invite || ''"
                         :id="`customizeBox`+(i+9)"/>

    <CustomizeBox15 :entry="data?.entry" id="customizeBox15"/>
    <CustomizeBox16 :view="data?.view" id="customizeBox16"/>
    <CustomizeBox17 id="customizeBox17"/>
    <!--    <CustomizeBox18 :data="data" id="customizeBox18"/>-->
    <!--    <CustomizeBox19 :data="data" :updateColor="function(){}" id="customizeBox19"/>-->
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