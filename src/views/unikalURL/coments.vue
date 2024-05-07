<template>
    <div class="flex justify-content-between align-items-center mb-2">
        <h5>Comentariya</h5>
    </div>
    <ScrollPanel style="height: 300px;" class="flex overflow-hidden justify-between gap-2 relative">
        <div v-for="(item, itemId) in comments" :key="itemId" class="left w-full mb-2 shadow bg-slate-100 p-3 py-2 flex flex-col gap-2" style="border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px">
            <span class="flex realative items-center gap-2">
                <img
                    :src="item.user.avatar ? item.user.avatar : 'https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250'"
                    style="width: 30px; height: 30px; border-radius: 50%"
                    alt=""
                />
                <span>
                    <h1 class="font-bold">{{ item.user.fio ? item.user.fio : 'Foydalanuvchi' }}</h1>
                    <h3 class="text-sm text-gray-400">{{ item.user.user_role?.name }}</h3>
                </span>
                <span class="flex absolute right-6 items-center gap-2">
                    <i @click="() => modalEditComment(JSON.stringify(item))" class="pi pi-pencil cursor-pointer"></i>
                    <i @click="modalDeleteComment(item.id)" class="pi pi-trash cursor-pointer"></i>
                </span>
            </span>
            <div class="bottom w-full">
                <div :class="edittextComment.id === item.id ? `hidden` : `text flex items-center justify-center w-full`">
                    <p class="w-full flex items-center text-base font-medium ml-4">
                        {{ item.text }}
                    </p>
                </div>
                <div :class="edittextComment.id === item.id ? `text flex items-center justify-center w-full` : `hidden`">
                    <form  class="text flex items-center justify-center w-full bg-slate-200 rounded-md">
                        <input v-model="edittextComment.text" autofocus type="text" class="w-full bg-transparent outline-none p-2" />
                       <span class="flex items-center justify-center g-2">
                         <button @click="()=> edittextComment.id = null" type="button" class="flex items-center justify-center gap-2 p-2 w-[30px] transition active:scale-90 cursor-pointer h-[30px] rounded-full bg-red-500">
                        <i class="pi pi-times cursor-pointer text-white"></i>
                        </button>
                        <button @click="editComment(item.id)" type="button" class="flex items-center justify-center gap-2 p-2 w-[30px] transition active:scale-90 cursor-pointer h-[30px] rounded-full bg-green-500">
                        <i class="pi pi-send cursor-pointer text-white"></i>
                        </button>
                       </span>
                    </form>
                </div>
            </div>
        </div>
    </ScrollPanel>
    <div class="bottom flex items-center gap-2 justify-between mt-1 border p-1 rounded-3xl">
        <!-- <div class="left">
            <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 45px; height: 45px; border-radius: 50%" alt="" />
        </div> -->
        <div class="right flex items-center justify-center w-full">
            <form @submit.prevent="addComment()" class="right flex items-center justify-center w-full">
                <input v-model="textComment" type="text" placeholder="Yozing" class="w-full outline-none p-2 bg-transparent" />
                <span class="flex items-center justify-center gap-2">
                    <i class="pi pi-paperclip cursor-pointer" @click="openFileSelector"></i>
                    <input ref="fileInput" type="file" style="display: none" @change="onFileChange" />
                    <button type="button" @click="addComment()" class="flex items-center justify-center gap-2 p-2 w-[40px] transition active:scale-90 cursor-pointer h-[40px] rounded-full bg-green-500">
                        <i class="pi pi-send cursor-pointer text-white"></i>
                    </button>
                </span>
            </form>
        </div>
    </div>
    <!-- Begin Modal DeletFile -->
    <Dialog v-model:visible="modalDelcomment" header="Delet Project" :style="{ width: '25rem' }">
        <div class="p-2 pt-0 text-center">
            <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">O'chirishni istaysizmi?</h3>
            <button @click="deletComment()" class="text-white bg-red-600 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                <ProgressSpinner style="width: 20px; height: 20px" :class="isloading ? 'block' : 'hidden'" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                <span :class="isloading ? 'block' : 'hidden'">Loading...</span> <span :class="isloading ? 'hidden' : 'block'">O'chirish</span>
            </button>
            <button @click="modalAddFile = false" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                Bekor qilish
            </button>
        </div>
    </Dialog>
    <!-- End Modal Delet -->
</template>
<script setup>
import { ref } from 'vue';
import router from '../../router';
import axios from 'axios';
const fileInput = ref(null);
const type = ref('tasks');
const textComment = ref();
const taskId = router.currentRoute.value.params.url;
console.log(taskId);
const comments = ref({});
const modalDelcomment = ref(false);
const commentID = ref();
const isloading = ref(false);
const edittextComment=ref({})



function modalEditComment(item) {
    edittextComment.value = JSON.parse(item);
    console.log(edittextComment.value);
}

const openFileSelector = () => {
    fileInput.value.click();
};
const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Fayl bilan qaysi amalni bajaramiz
    console.log('Tanlangan fayl:', selectedFile);
};

function addComment() {
    axios
        .post(
            'https://pm-api.essential.uz/api/comments/create',
            {
                column_id: taskId,
                type: type.value,
                text: textComment.value
            },
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
        .then((res) => {
            if (res.status === 200) {
                textComment.value = '';
                fetchTask();
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
                comments.value.sort((a,b)=> a.id - b.id);
                console.log(comments.value, 6);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
fetchTask();

const modalDeleteComment = (id) => {
    commentID.value = id;
    console.log(id);
    modalDelcomment.value = true;
};

function deletComment() {
    isloading.value = true;
    axios
        .delete(`https://pm-api.essential.uz/api/comments/${commentID.value}/delete`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((res) => {
            console.log(res.data);
            isloading.value = false;
            modalDelcomment.value = false;
            fetchTask();
        })
        .catch((err) => {
            isloading.value = false;
            console.log(err);
        });
}
deletComment()

const editComment = (id) => {
    console.log(id);
    const token = localStorage.getItem('token');
    const headers = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        Authorization: `Bearer ${token}`
    };

    axios
        .post(
            `https://pm-api.essential.uz/api/comments/${id}/update`,
            {
                text: edittextComment.value.text
            }, 
            { headers }
        )
        .then((result) => {
            if (result.status === 200) {
                edittextComment.value.id=null
                fetchTask()
            }
        })
        .catch((error) => {
            console.error(error);
        });
};
</script>
<style scoped></style>
