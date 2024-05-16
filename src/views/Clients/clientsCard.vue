<template>
<div class="list absolute w-[80%] max-[1024px]:w-[100%] max-[900px]:w-[100%]">
                <div class="card ">
                    <div class="flex align-items-center justify-content-between mb-4">
                        <h5 class="text-4xl font-medium">{{ data.length }} Clients</h5>
                        <div class="left flex items-center justify-center gap-3">
                            <span class="flex items-center justify-center gap-3">
                                <i class="pi pi-sort-amount-up text-2xl cursor-pointer transition hover:text-gray-400"></i>
                                <i
                                    class="pi pi-sort-amount-down-alt text-2xl cursor-pointer transition hover:text-gray-400"></i>
                            </span>

                            <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                            <input type="text" class="p-3 outline-none" placeholder="Search...">
                            <i class="pi pi-search mr-2 cursor-pointer"></i>
                        </div>
                        </div>
                    </div>
                    <ul v-for="(item,itemkey) in data" :key="item.id" class="w-full p-0 mx-0 mt-0 mb-4 list-none">
                        <li
                            class="flex items-center justify-between  py-2 border-bottom-1 max-[900px]:w-[90%] surface-border">
                            <div class="w-[15%] flex items-center gap-2">
                                <h1 class="font-bold text-gray-500">{{ itemkey + 1 }}.</h1>
                                <span @click="gotoPerformersInfo(item.id)"
                                    class="w-[70%] cursor-pointer text-900 line-height-3 flex flex-col gap-2">
                                    <h1 class="font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{
                                        item.name }}</h1>
                                    <h4 class="text-slate-400 text-sm">{{ item.phone }}</h4>
                                </span>
                            </div>
                            <div class="w-[85%] flex  gap-3  items-center justify-between">
                                <span class="flex flex-col w-[200px]  items-center justify-center gap-1">
                                    <h1 class="font-sans font-medium">{{ item.address }}</h1>
                                    <span class="flex w-[200px] items-center justify-center gap-3">
                                        <h4 class="text-slate-400 text-sm whitespace-nowrap overflow-hidden text-overflow-ellipsis">X: {{ item.coordinate_x }}</h4>
                                        <h4 class="text-slate-400 text-sm whitespace-nowrap overflow-hidden text-overflow-ellipsis">Y: {{ item.coordinate_y }}</h4>
                                    </span>
                                </span>
                                <span class="flex flex-col w-[200px] items-center justify-center gap-2">
                                    <h1 class="w-[60%] font-sans font-medium whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.email }}</h1>
                                        <h4 class="w-[60%] text-slate-400 whitespace-nowrap overflow-hidden text-overflow-ellipsis text-sm">{{ item.website }}</h4>
                                </span>
                                 <span class="flex relative flex-col w-[200px] items-center justify-center gap-1">
                                    <span @click="toggle(item)"  class="flex items-center justify-center gap-1 cursor-pointer">
                                        <h1 class="font-sans font-medium">{{ item.bank_name }}</h1>
                                        <i class="pi pi-angle-down"></i>
                                    </span>
                                    <div class="absolute top-10 flex gap-2"  v-if="op">
                                        <h1>Salom</h1>
                                        <h1>Salom</h1>
                                    </div>
                                    <!-- <span class="w-full flex items-center justify-center gap-3">
                                        <h4 class="w-[70%] flex flex-col text-slate-400 text-sm whitespace-nowrap overflow-hidden text-overflow-ellipsis"><label for="">Account:</label> <p class="w-[70%] whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.bank_account }}</p></h4>
                                        <h4 class="text-slate-400 text-sm">MFI: {{ item.bank_mfi }}</h4>
                                        <h4 class="text-slate-400 text-sm">INN: {{ item.bank_tin }}</h4>
                                    </span> -->
                                </span>
                                <span class="flex items-center justify-center gap-2">
                                    <i class="pi pi-calendar"></i>
                                    <span class="w-40 font-semibold">
                                        {{ item.updated_at.substr(0, 10) }}
                                    </span>
                                </span>
                                <div class="actions flex items-center justify-center gap-3">
                                 <i class="pi pi-pencil"></i>
                                 <i class="pi pi-trash"></i>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from '../../router';
const data = ref([]);
const op = ref(false);

function fetchClient() {
    axios
    .get('https://pm-api.essential.uz/api/client', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then((res) => {
        if (res.status === 200) {
            data.value = res.data;
            console.log(res.data);
        }
    }).catch((err) => {
        console.log(err);
    })
}
fetchClient();

const toggle = (event) => {
    op.value =!op.value;
        console.log(op.value);
  console.log(event)
}

</script>
<style>
    
</style>