<template>
     <div class="top w-full flex flex-col gap-2 h-[20vh] mb-20">
                <div class="title flex items-center justify-between">
                    <h1 class="font-bold text-3xl">{{ task.title }}</h1>
                    <div class="performers flex gap-2 items-center justify-center">
                        <AvatarGroup>
                            <div class="flex items-center gap-1" v-for="item in performers" @click="performersID(item.perfomer.user.id)">
                                <img
                                    :src="item.perfomer.user.avatar ? item.perfomer.user.avatar : 'https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250'"
                                    class="w-[45px] h-[45px] rounded-full"
                                    alt=""
                                />
                            </div>
                        </AvatarGroup>
                        <span @click="modalAddPerformer()" class="flex items-center justify-center gap-1 bg-blue-400 w-[45px] h-[45px] rounded-full cursor-pointer text-white">
                            <i class="pi pi-user-plus text-2xl"></i>
                        </span>
                        <OverlayPanel ref="op">
                            <div></div>
                            <div class="bottom flex items-center gap-3 flex-wrap">
                                <div class="action w-full flex items-center justify-end gap-2">
                                    <i class="pi pi-pencil cursor-pointer"></i>
                                    <i class="pi pi-trash cursor-pointer"></i>
                                </div>
                                <span class="flex items-center justify-center flex-col gap-2 p-3 w-full">
                                    <img
                                        :src="performer.avatar ? performer.avatar : `https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250`"
                                        class="w-24 card-img h-24 rounded-[50%] cursor-pointer"
                                        alt=""
                                    />
                                    <h1 class="font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ performer.fio }}</h1>
                                    <span class="flex items-center justify-center gap-3">
                                        <h2 class="font-sans font-medium bg-green-300 text-white pl-3 pr-3 pb-1 rounded">{{ performer.status }}</h2>
                                    </span>
                                    <h5 class="text-gray-500 font-italic">{{ performer.phone }}</h5>
                                </span>
                            </div>
                        </OverlayPanel>
                    </div>
                </div>
                <div class="image h-full">
                    <img class="w-full h-full object-cover rounded-lg" src="https://vp-leads.com/wp-content/uploads/2021/09/professiya-veb-analitik.jpg" alt="" />
                </div>
            </div>
    <section>
        <div class="container flex flex-col gap-4">
            <div class="bottom flex items-center max-[1100px]:flex-col justify-center gap-2">
                <div class="border p-3 h-[400px] rounded-xl w-1/2 max-[1100px]:w-full">
                    <div class="flex justify-content-between align-items-center mb-2">
                        <h5>Fayllar bo'limi.</h5>
                        <span class="flex items-center justify-center gap-1 text-sm">
                            <i class="pi pi-paperclip text-sm text-gray-400"></i>
                            <h5 class="text-gray-400">{{ filesLength }}</h5>
                        </span>
                    </div>
                    <div class="flex justify-content-between align-items-center mb-2">
                        <div class="left">
                            <span @click="openFileSelector" class=""
                                ><i class="pi pi-plus bg-blue-400 pl-2 pr-2 pb-1 pt-1 rounded-lg cursor-pointer text-white flex items-center justify-center gap-2"><h2 class="font-sans text-white font-medium text-lg">Add file</h2></i></span
                            >
                            <input ref="fileInput" type="file" style="display: none" @change="onFileChange" />
                        </div>
                        <!-- <div class="right">
                            <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                                <input type="text" class="p-2 outline-none" placeholder="Search..." />
                                <i class="pi pi-search mr-1 cursor-pointer"></i>
                            </div>
                        </div> -->
                    </div>
                    <ScrollPanel style="width: 100%; height: 305px">
                        <li v-for="item in task.files" class="flex flex-column border-b-2 p-1 flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div class="cards w-full flex items-center justify-between">
                                <div class="w-[100%] flex gap-2 text-white">
                                    <Image :src="item.path ? item.path : `https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg`" alt="Image" width="100" style="border-radius: 10px;" preview />
                                    <div class="">
                                        <span :class="editFile.id === item.id ? `hidden` : `text-900 mr-2 w-full font-bold mb-1 md:mb-0`">{{ item.name }}</span>
                                        <div :class="editFile.id === item.id ? `text flex items-center justify-center w-full` : `hidden`">
                                            <form class="text flex items-center justify-center w-full border-b rounded-md">
                                                <input v-model="editFile.name" autofocus type="text" class="w-full bg-transparent text-black outline-none font-bold p-2" />
                                                <span class="flex items-center justify-center gap-2">
                                                    <button @click="() => (editFile.id = null)" type="button" class="flex items-center justify-center gap-2 p-2 w-[20px] transition active:scale-90 cursor-pointer h-[20px] rounded-full bg-red-500">
                                                        <i class="pi pi-times cursor-pointer text-white"></i>
                                                    </button>
                                                    <button @click="editfile(item.id)" type="button" class="flex items-center justify-center gap-2 p-2 w-[20px] transition active:scale-90 cursor-pointer h-[20px] rounded-full bg-green-500">
                                                        <i class="pi pi-check cursor-pointer text-white"></i>
                                                    </button>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 pr-5 md:mt-0 flex align-items-center gap-3 cursor-pointer">
                                    <i @click="modalEditFile(JSON.stringify(item))" class="pi pi-file-edit" v-tooltip.top="'Taxrirlash'"></i>
                                    <i @click="modalDeleteFile(item.id)" class="pi pi-trash" v-tooltip.top="`O'chirish`"></i>
                                    <!-- <a :href="item.path" download
                                        ><button type="button"><i class="pi pi-download" v-tooltip.top="'Yuklab olish'"></i></button
                                    ></a> -->
                                    <i @click="downloadFile(item.id)" class="pi pi-download" v-tooltip.top="'Yuklab olish'"></i>
                                </div>
                            </div>
                        </li>
                    </ScrollPanel>
                </div>
                <div class="border p-3 rounded-xl w-1/2 h-[400px] max-[1100px]:w-full">
                    <Coments />
                </div>
            </div>
        </div>
    </section>
    <!--Begin Change Performe -->
    <Dialog v-model:visible="changePerformer" header="Add Performer" class="w-[30%]">
        <ChangePerformer />
    </Dialog>
    <!--Edit Change Performe -->
    <!-- Begin Modal AddFile -->
    <Dialog v-model:visible="modalAddFile" header="Delet Project" :style="{ width: '25rem' }">
        <div class="p-2 pt-0 text-center">
            <span class="flex flex-col gap-2">
                <img
                    :src="lokalSellectedFile ? lokalSellectedFile : 'https://avatars.mds.yandex.net/i?id=16b88c8f833b34fa8bcf2cfd2e256bf435b44003-4882464-images-thumbs&ref=rim&n=33&w=250&h=250'"
                    alt="File"
                    class="w-full card-img h-36 object-cover rounded-md"
                />
                <h1><input type="text" v-model="fileName" placeholder="Fayl nomini kiriting" class="w-full border-gray-300 p-2 border-x outline-none" autofocus style="border-bottom: 2px solid #e5e7eb" /></h1>
                <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Yuborishni istaysizmi?</h3>
            </span>
            <button @click="addFile()" class="text-white bg-blue-600 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                <ProgressSpinner style="width: 20px; height: 20px" :class="loadingaddfile ? 'block' : 'hidden'" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                <span :class="loadingaddfile ? 'block' : 'hidden'">Loading...</span> <span :class="loadingaddfile ? 'hidden' : 'block'">Yuborish</span>
            </button>
            <button @click="modalAddFile = false" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                Bekor qilish
            </button>
        </div>
    </Dialog>
    <!-- End Modal AddFile -->
    <!-- Begin Modal DeletFile -->
    <Dialog v-model:visible="modalDelFile" header="Delet Project" :style="{ width: '25rem' }">
        <div class="p-2 pt-0 text-center">
            <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">O'chirishni istaysizmi?</h3>
            <button @click="deletPerformer()" class="text-white bg-red-600 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                <ProgressSpinner style="width: 20px; height: 20px" :class="loadingaddfile ? 'block' : 'hidden'" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                <span :class="loadingaddfile ? 'block' : 'hidden'">Loading...</span> <span :class="loadingaddfile ? 'hidden' : 'block'">O'chirish</span>
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
import ChangePerformer from '../unikalURL/changePerformer.vue';
import Coments from '../unikalURL/coments.vue';

const changePerformer = ref(false);
const taskId = router.currentRoute.value.params.url;
const task = ref({});
const performers = ref({});
const performerId = ref();
const performer = ref({});
const selectedFile = ref();
const lokalSellectedFile = ref();
const type = ref('tasks');
const modalAddFile = ref(false);
const loadingaddfile = ref(false);
const modalDelFile = ref(false);
const fileId = ref();
const filesLength = ref();
const fileName = ref();
const editFile = ref({});

const op = ref();
const fileInput = ref(null);

const modalDeleteFile = (id) => {
    fileId.value = id;
    console.log(id);
    modalDelFile.value = true;
};
function modalEditFile(item) {
    editFile.value = JSON.parse(item);
    console.log(editFile.value);
}

const editfile = (id) => {
    console.log(id);
    console.log(editFile.value.name);
    const token = localStorage.getItem('token');
    const headers = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        Authorization: `Bearer ${token}`
    };

    axios
        .post(
            `https://pm-api.essential.uz/api/files/${id}/update`,
            {
                name: editFile.value.name
            },
            { headers }
        )
        .then((result) => {
            if (result.status === 200) {
                editFile.value.id = null;
                fetchTask();
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

const openFileSelector = () => {
    fileInput.value.click();
};
const onFileChange = (event) => {
    lokalSellectedFile.value = URL.createObjectURL(event.target.files[0]);
    selectedFile.value = event.target.files[0];
    if (selectedFile.value) {
        modalAddFile.value = true;
    }
    console.log('file', selectedFile.value);
};

const toggle = (event) => {
    fetchPerformerShow();
    op.value.toggle(event);
};
const performersID = (id) => {
    performerId.value = id;
    console.log(id);
    toggle(event);
};

function fetchPerformerShow() {
    axios
        .get(`https://pm-api.essential.uz/api/users/show/${performerId.value}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((res) => {
            performer.value = res.data;
            console.log(performer.value);
        })
        .catch((err) => {
            console.log(err);
        });
}
function addFile() {
    loadingaddfile.value = true;
    const formData = new FormData();
    formData.append('path', selectedFile.value);
    formData.append('type', type.value);
    formData.append('column_id', taskId);
    formData.append('name', fileName.value);
    axios
        .post('https://pm-api.essential.uz/api/files/create', formData, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((res) => {
            if (res.status === 200) {
                modalAddFile.value = false;
                loadingaddfile.value = false;
                fileName.value = '';
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Bajarildi',
                    showConfirmButton: false,
                    timer: 1500
                });
                fetchTask();
            }
        })
        .catch((err) => {
            console.log(err);
            loadingaddfile.value = false;
        });
}

function deletPerformer() {
    loadingaddfile.value = true;
    axios
        .delete(`https://pm-api.essential.uz/api/files/${fileId.value}/delete`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((res) => {
            if (res.status === 200) {
                swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: "O'chirildi",
                    showConfirmButton: false,
                    timer: 1500
                });
                loadingaddfile.value = false;
                modalDelFile.value = false;
                fetchTask();
            }
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

const downloadFile = (id) => {
    axios
        .get(`https://pm-api.essential.uz/api/files/show/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data.path]));
            console.log(response.data); // Faylni URL-ga aylantiramiz
            const link = document.createElement('a'); // Yangi <a> elementini yaratamiz
            link.href = url; // URL-ni bog'laymiz
            link.setAttribute('download', `${response.data.path}`); // Fayl nomini belgilaymiz
            document.body.appendChild(link); // Dokumentga qo'shamiz
            link.click(); // Faylni avtomatik ravishda yuklab olish uchun bosing
            window.URL.revokeObjectURL(url); // URL-ni qaytarib olish
        })
        .catch((error) => {
            console.error('Faylni yuklab olishda xatolik yuz berdi:', error);
        });
};

function fetchTask() {
    axios
        .get(`https://pm-api.essential.uz/api/tasks/show/${taskId}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((res) => {
            if (res.status === 200) {
                task.value = res.data[0];
                filesLength.value = res.data[0].files.length;
                performers.value = res.data[0].performers;
                // for (let i = 0; i < performers.value.length; i++) {
                //     performer.value = performers.value[i].perfomer
                // }
                // console.log(performer.value,6);
                console.log(performers.value, 7);
                console.log(task.value, 8);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
fetchTask();
// function fetchPerformers() {
//     axios.get(`https://pm-api.essential.uz/api/task-performers`,
//     {
//         task_id: taskId
//     },
//     {
//         headers: {
//             Authorization: 'Bearer ' + localStorage.getItem('token')
//         }
//     }).then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });
// }
// fetchPerformers()

const modalAddPerformer = () => {
    changePerformer.value = !changePerformer.value;
};
</script>
<style></style>
