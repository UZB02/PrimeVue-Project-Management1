<template>
    <!-- <TopNavMap></TopNavMap> -->
    <h1 class="ml-3 font-bold text-3xl">Companys Bo'limi</h1>
    <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addCompany" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-1"><i class="pi pi-plus"></i>ADD Project</button>
            <span class="flex items-center justify-center gap-3 p-input-icon-right">
                <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                    <input type="text" class="p-2 outline-none" placeholder="Search..." />
                    <i class="pi pi-search mr-1 cursor-pointer"></i>
                </div>
                <span @click="cardORtable" class="hover:scale-105 flex cursor-pointer items-center justify-center gap-1">
                    <i class="pi pi-th-large cursor-pointer" />
                    <h3 class="font-semibold">Card</h3>
                </span>
                <span @click="tableORcard" class="flex hover:scale-105 cursor-pointer items-center justify-center gap-1">
                    <i class="pi pi-table cursor-pointer" />
                    <h3 class="font-semibold">Table</h3>
                </span>
            </span>
        </div>
    </header>
    <section>
        <div :class="card_table ? 'block' : 'hidden'"><CompanyCard></CompanyCard></div>
        <div :class="card_table ? 'hidden' : 'block'"><CompanyTable></CompanyTable></div>
    </section>
</template>
<script setup>
import { ref, reactive, toRaw } from 'vue';
import router from '@/router';
import axios from 'axios';
import CompanyCard from '../Companys//companyCard.vue'
import loading from '@/components/loading.vue';
import CompanyTable from '../Companys/companysTable.vue'

const data=ref({})
const card_table = ref(false);
const isloading = ref(true);

const cardORtable=()=>{
    card_table.value=true
}
const tableORcard=()=>{
    card_table.value=false
}

const addCompany=()=>{
    router.push(`/add_companys`);
}


function fetchData() {
    axios
        .get(`https://pm-api.essential.uz/api/companies`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
         console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
}

fetchData();

</script>
<style scoped></style>
