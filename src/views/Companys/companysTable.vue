<template >
         <div class="list absolute w-[80%] max-[1024px]:w-[100%] max-[900px]:w-[100%]">
        <div class="card">
            <div class="flex align-items-center justify-content-between mb-4">
                <h5 class="text-4xl font-medium">{{ data.length }} Clients</h5>
                <div class="left flex items-center justify-center gap-3">
                    <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                        <input type="text" @input="search" v-model="searchDataInput" class="p-2 outline-none" placeholder="Search..." />
                        <i class="pi pi-search mr-2 cursor-pointer"></i>
                    </div>
                </div>
            </div>
            <ul v-for="(item, itemkey) in data" :key="item.id" class="w-full p-0 mx-0 mt-0 mb-4 list-none">
                <li class="flex items-center gap-2 justify-between py-2 border-bottom-1 max-[900px]:w-[90%] surface-border">
                    <div class="w-[25%] flex items-center gap-2">
                        <h1 class="font-bold text-gray-500">{{ itemkey + 1 }}.</h1>
                        <div class="w-[50px]">
                            <img :src="item?.logo ? item.logo : 'https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250'" class="w-[50px] h-[50px] rounded-full object-cover">
                        </div>
                        <span @click="gotoPerformersInfo(item.id)" class="w-[130px] cursor-pointer text-900 line-height-3 flex flex-col gap-2">
                            <h1 class="font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.name }}</h1>
                            <h4 class="text-slate-400 text-sm whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.phone }}</h4>
                        </span>
                    </div>
                    <div class="w-[85%] flex gap-3 items-center justify-between">
                        <span class="flex flex-col w-[200px] items-center justify-center gap-1">
                            <span class="flex items-center w-full justify-center g-1">
                                <i class="pi pi-map-marker text-orange-500"></i>
                                <h1 class="font-sans font-medium w-[100px] whitespace-nowrap overflow-hidden text-overflow-ellipsis text-center">{{ item.address }}</h1>
                            </span>
                            <span class="flex w-[150px] items-center justify-center gap-3">
                                <h4 class="text-slate-400 text-sm whitespace-nowrap overflow-hidden text-overflow-ellipsis w-full">X: {{ item.coordinate_x }}</h4>
                                <h4 class="text-slate-400 w-full text-sm whitespace-nowrap overflow-hidden text-overflow-ellipsis">Y: {{ item.coordinate_y }}</h4>
                            </span>
                        </span>
                        <span class="flex flex-col w-[200px] items-center justify-center gap-2">
                            <h1 class="w-[60%] font-sans font-medium whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.email }}</h1>
                            <h4 class="w-[60%] text-slate-400 whitespace-nowrap overflow-hidden text-overflow-ellipsis text-sm">{{ item.website }}</h4>
                        </span>
                        <span class="flex relative flex-col w-[200px] items-center justify-center gap-1">
                            <span  class="flex flex-col w-full items-center justify-center gap-1">
                                <h1 class="font-sans w-[60%] text-center font-medium whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.director }}</h1>
                            <span class="flex w-[150px] items-center justify-center gap-3">
                                <a v-tooltip.top="`Linkedin: ${item.linkedin}`" href="{{ item.linkedin }}" class="w-[80%] text-slate-400 whitespace-nowrap overflow-hidden text-overflow-ellipsis text-center text-sm">L: {{ item.linkedin }}</a>
                                <a v-tooltip.top="`Facebook: ${item.facebook}`" href="{{ item.facebook }}" class="w-[80%] text-slate-400 whitespace-nowrap overflow-hidden text-overflow-ellipsis text-center text-sm">F: {{ item.facebook }}</a>
                                
                            </span>
                                <!-- <i class="pi pi-angle-down w-[20%]"></i> -->
                            </span>
                        </span>
                        <span class="flex items-center justify-center gap-2">
                            <i class="pi pi-calendar"></i>
                            <span class="w-40 font-semibold">
                                {{ item.updated_at.substr(0, 10) }}
                            </span>
                        </span>
                        <div class="actions flex items-center justify-center gap-3">
                            <i v-tooltip.top="`Taxrirlash`" @click="editClient(item.id)" class="pi pi-pencil cursor-pointer"></i>
                            <i v-tooltip.top="`O'chirish`" @click="modalDelComp(item.id)" class="pi pi-trash cursor-pointer text-red-500"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
       <!-- Begin Modal Delet -->
    <Dialog v-model:visible="deletModal" header="Delet Company" :style="{ width: '25rem' }">
        <div class="p-2 pt-0 text-center">
            <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">O'chirishni istaysizmi?</h3>
            <button @click="deletComp" class="text-white bg-red-600 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                <ProgressSpinner style="width: 20px; height: 20px" :class="loadingDel ? 'block' : 'hidden'" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                <span :class="loadingDel ? 'block' : 'hidden'">Loading...</span> <span :class="loadingDel ? 'hidden' : 'block'">O'chirish</span>
            </button>
            <button @click="deletModal = false" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                Bekor qilish
            </button>
        </div>
    </Dialog>
    <!-- End Modal Delet -->
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref({});
const deletModal=ref(false);
const loadingDel=ref(false);
const compID=ref(null);
const searchDataInput=ref('');

function fetchData() {
    axios
        .get(`https://pm-api.essential.uz/api/companies`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            data.value = result.data;
         console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
}

fetchData();

const modalDelComp = (id) => {
    compID.value = id;
    console.log(compID.value);
    deletModal.value = true;
}

const deletComp=()=>{
    loadingDel.value = true;
    axios
        .delete(`https://pm-api.essential.uz/api/companies/${compID.value}/delete`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            loadingDel.value=false;
            console.log(result.data);
            fetchData();
            deletModal.value=false;
        })
        .catch((err) => {
            loadingDel.value=false;
            console.log(err);
        });
}
</script>
<style scoped>
    
</style>