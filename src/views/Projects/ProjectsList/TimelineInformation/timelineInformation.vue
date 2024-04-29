<template>
  <div>
    <input type="file" ref="fileInput" @change="handleFileChange">
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const fileInput = ref(null);
const email = "admin1@gmail.com";
const password = "11111111";
const userRoleId = "3";
const username = "213123";

function handleFileChange(event) {
  fileInput.value = event.target.files[0];
}

async function submitForm() {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("avatar", fileInput.value, fileInput.value.name);
  formData.append("user_role_id", userRoleId);
  formData.append("username", username);
  console.log(formData);

  try {
    const response = await axios.post("https://pm-api.essential.uz/api/users/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer 5|Q5xlBDuntt59kd9xfOej3vpYV833ZPSRsejna8eQ11a50f66"
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
</script>