<template>
    <div class="flex justify-content-between align-items-center mb-2">
        <h5>Comentariya</h5>
    </div>
    <ScrollPanel style="width: 100%; height: 300px" class="flex justify-between gap-2 relative">
        <div v-for="(item, itemId) in comments" :key="itemId" class="left w-full mb-2 shadow bg-slate-100 p-3 py-2 flex flex-col gap-2" style="border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
            <span class="flex items-center  gap-2">
                       <img :src="item.user.avatar ? item.user.avatar :'https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250'" style="width: 30px; height: 30px; border-radius: 50%;" alt="">
                       <span>
                        <h1 class="font-bold">{{ item.user.fio ? item.user.fio : 'Foydalanuvchi' }}</h1>
                        <h3 class="text-sm text-gray-400">{{ item.user.user_role?.name }}</h3>
                       </span>
            </span>
               <div class="bottom w-full">
            <!-- <div class="top">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 100%; object-fit: cover; border-radius: 12px; height: 50px;" alt="">
            </div> -->
            <div class="text flex items-center justify-center w-full">
               <p class="w-full flex items-center text-base font-medium ml-4">
            {{ item.text }}
               </p>
            </div>
        </div>
        </div>
    </ScrollPanel>
    <div class="bottom flex items-center gap-2 justify-between mt-1 border-t p-1 rounded-3xl">
        <div class="left">
            <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 45px; height: 45px; border-radius: 50%;" alt="">
        </div>
        <div class="right flex items-center justify-center w-full">
         <form @submit.prevent="addComment()" class="right flex items-center justify-center w-full">
               <input v-model="textComment" type="text" placeholder="Yozing" class="w-full outline-none p-2 bg-transparent " />
            <span class="flex items-center justify-center gap-2">
                 <i class="pi pi-paperclip cursor-pointer" @click="openFileSelector"></i>
  <input ref="fileInput" type="file" style="display: none;" @change="onFileChange" />
                <button type="button" @click="addComment()" class="flex items-center justify-center gap-2 p-2 w-[40px] transition active:scale-90 cursor-pointer h-[40px] rounded-full bg-green-500" >
                    <i class="pi pi-send cursor-pointer text-white"></i>
                </button>
            </span>
         </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import router from '../../router';
import axios from 'axios';
const fileInput = ref(null);
const type= ref("tasks");
const textComment=ref()
const taskId=router.currentRoute.value.params.url
console.log(taskId);
const comments=ref({})

  const openFileSelector = () => {
    fileInput.value.click();
  };
    const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Fayl bilan qaysi amalni bajaramiz
    console.log('Tanlangan fayl:', selectedFile);
  };

function  addComment(){
     axios
        .post('https://pm-api.essential.uz/api/comments/create',
        {
            column_id: taskId,
            type: type.value,
            text: textComment.value,
        },
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((res) => {
            if (res.status===200) {
                textComment.value = ""
                fetchTask()
            }
           console.log(res);
        })
        .catch((err) => {
            console.log(err);
            // loadingaddfile.value = false;
        });
}
function fetchTask() {
    axios
        .get(`https://pm-api.essential.uz/api/tasks/show/${taskId}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((res) => {
            if (res.status === 200) {
                comments.value = res.data[0].comment;
                console.log(comments.value, 6);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
fetchTask()

</script>
<style scoped></style>
