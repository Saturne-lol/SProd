<script setup lang="ts">
import {$fetch} from 'ofetch';

async function uploadPdp(event: any) {
  const file = event.target.files[0];

  const uploadUrl = await $fetch('/api/dashboard/customize/set-profile', {
    method: 'GET',
    params: {
      extension: file?.name.split('.').pop() || ''
    }
  });

  const formData = new FormData();
  formData.append('file', file);

  useToast().add({
    title: 'Start uploading',
    description: 'Your profile image is being uploaded',
    color: 'blue',
    icon: 'i-material-symbols-check' //@TODO fix icon
  });

  $fetch(uploadUrl, {
    method: 'POST',
    body: formData
  }).then(() => {
    useToast().add({
      title: 'Success',
      description: 'Your profile image has been updated',
      color: 'green',
      icon: 'i-material-symbols-check' //@TODO fix icon
    });
  }).catch((e) => {
    useToast().add({
      title: 'Error',
      description: e.message,
      color: 'red',
      icon: 'mdi:alert-circle' //@TODO fix icon
    });
  });
}
</script>

<template>
  <div>
    <div class="box">
      <div class="padding">
        <div class="title">
          <Icon name="ic:baseline-insert-photo" class="Icon" />
          <h3>PROFIL PICTURE</h3>
        </div>
        <div class="dragDrop">
          <label class="uploadFile" for="filePP">
            <a href="">
              <div class="IconClose">
                <Icon name="maki:cross" />
              </div>
            </a>
            <div class="icon">
              <Icon name="ic:baseline-insert-photo" class="Icon" />
            </div>
            <div class="text">
              <span>Click to upload image</span>
            </div>
            <input type="file" id="filePP" accept=".png, .jpg, .jpeg;" @change="uploadPdp($event)" />
          </label>
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

.dragDrop {
  flex-grow: 1;
}

.uploadFile {
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  background-color: var(--dashboard-input-background);
  border: 1px solid var(--dashboard-border);
  padding: 30px 0;
  border-radius: 10px;
  transition: 0.4s ease;
}

.uploadFile:hover {
  background-color: var(--dashboard-box-background);
}

.uploadFile .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.uploadFile .icon .Icon {
  font-size: 500%;
  fill: #fff;
}

.uploadFile .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.uploadFile .text span {
  font-weight: 400;
}

.uploadFile input {
  display: none;
}

.IconClose {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 3px;
  border-radius: 6px;
  z-index: 5;
  transition: 0.3s ease;
}

.IconClose:hover {
  background-color: var(--dashboard-button-close);
}
</style>
