<template>
      <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addUser"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-1"><i
                    class="pi pi-plus"></i> ADD User</button>
            <span class="flex items-center justify-center gap-3 p-input-icon-right">
                <button type="button" @click="rolsToggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                </button>
                <!-- <Menu ref="rolsMenu" id="overlay_menu" :model="rolsItems" :popup="true" class="translate-y-2">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                                <span :class="item.icon" />
                                <span class="ml-2">{{ item.label }}</span>
                            </a>
                        </router-link>
                    </template>
                </Menu> -->
                <span @click="cardFunction" class=" hover:scale-105 flex cursor-pointer items-center justify-center gap-1">
                    <i class="pi pi-th-large cursor-pointer" />
                    <h3 class="font-semibold">Card</h3>
                </span>
                <span @click="tableFunction" class="flex hover:scale-105 cursor-pointer items-center justify-center gap-1">
                    <i class="pi pi-table cursor-pointer" />
                    <h3 class="font-semibold">Table</h3>
                </span>
            </span>
        </div>
    </header>
        <section :class="isloading ? 'hidden' : 'container flex flex-wrap items-center justify-center gap-2'">
        <loading></loading>
    </section>
    <section :class="isloading ? 'block' : 'hidden'">
           <div :class="card_table ? `top max-[900px]:w-full` : `w-full`">
            <div :class="card_table ? 'flex flex-col gap-4 p-3 rounded-2xl' : 'hidden'">
                <div class="flex align-items-center justify-content-between">
                    <h1 class="text-2xl">Loyiha ijrochilari paneli</h1>
                    <span class="flex flex-row-reverse items-center justify-between gap-3">
                        <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                            <input type="text" class="p-2 outline-none" placeholder="Search...">
                            <i class="pi pi-search mr-2 cursor-pointer"></i>
                        </div>
                        <span class="flex items-center justify-center gap-3">
                            <i class="pi pi-sort-amount-up text-2xl cursor-pointer transition hover:text-gray-400"></i>
                            <i
                                class="pi pi-sort-amount-down-alt text-2xl cursor-pointer transition hover:text-gray-400"></i>
                        </span>
                    </span>
                </div>
                <div class="bottom flex items-center gap-3 flex-wrap">
                    <div v-for="item in users"
                             class="card1 transition hover:scale-[1.02] flex items-center justify-center flex-col gap-2 shadow rounded-xl p-3 w-[19%] max-[900px]:w-[30%] max-[1030px]:w-[45%]">
                             <div class="action w-full flex items-center justify-end gap-2">
                                 <i @click="getPerformers(item.id)" aria-haspopup="true" aria-controls="overlay_menu1"
                                     class="pi pi-ellipsis-h cursor-pointer"></i>
                             </div>
                             <span class="flex items-center justify-center flex-col gap-2  p-3 w-full">
                                 <img @click="gotoPerformersInfo(item.id)" :src="item.avatar ? item.avatar : 'https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250'"
                                     class="w-24 card-img object-cover h-24 rounded-[50%] cursor-pointer" alt="">
                                 <h1 class="font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.fio}}</h1>
                               <span class="flex items-center justify-center gap-3">
                                   <h2 class="font-sans font-medium bg-green-300 text-white pl-3 pr-3 pb-1 rounded">{{ item.status }}</h2>
                               </span>
                                 <h5 class="text-gray-500 font-italic">{{ item.phone }}</h5>
                             </span>
                         </div>
                </div>
                 <Menu ref="menu" :model="overlayMenuItems" :popup="true" />
            </div>
            <div :class="card_table ? 'hidden' : 'list w-full max-[900px]:w-[100%]'">
                <div class="card">
                    <div class="flex align-items-center justify-content-between mb-4">
                        <h5 class="text-4xl font-medium">{{ users.length }} Performers</h5>
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
                    <ul v-for="(item,itemkey) in users" :key="item.id" class="w-full p-0 mx-0 mt-0 mb-4 list-none">
                        <li
                            class="flex items-center justify-between  py-2 border-bottom-1 max-[900px]:w-[90%] surface-border">
                            <div class="w-[35%] flex items-center gap-2">
                                <h1 class="font-bold text-gray-500">{{ itemkey + 1 }}.</h1>
                                <span class="flex w-1/4 items-center justify-center gap-2">
                                    <img @click="router.push(`/performersinfo`)" :src="item.avatar ? item.avatar : 'https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250'" size="large" class="w-14 card-img  h-14 rounded-[50%] cursor-pointer" />
                                   
                                </span>

                                <span @click="generalinformation"
                                    class="w-[70%] cursor-pointer text-900 line-height-3 flex flex-col gap-2">
                                    <h1 class="font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{
                                        item.name }}</h1>
                                    <h4 class="text-slate-400">{{ item.key }}</h4>
                                </span>
                            </div>
                            <div class="w-[65%] flex  gap-3  items-center justify-between">
                                <span class="flex w-1/3 items-center justify-center gap-1">
                                    <h1>{{ item.key }}</h1>
                                    <!-- <Tag class="w-[65px]" :severity="item.severity" :value="item.icon_value"></Tag> -->
                                </span>
                                <span class="flex items-center justify-center gap-2">
                                    <i class="pi pi-calendar"></i>
                                    <span class="w-40 font-semibold">
                                        {{ item.created_at.substr(0, 10) }}
                                    </span>
                                </span>

                                <span class="flex items-center justify-center gap-2">
                                    <i class="pi pi-paperclip"></i>
                                    <h3>5</h3>
                                </span>
                                <span class="w-1/4 flex flex-col items-center  justify-center gap-1">
                                    <div class=" w-full flex  items-center  justify-center gap-3">
                                        <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                            <div :style="{ width: '50%' }"
                                                class="score rounded-xl bg-green-500 h-2">
                                            </div>
                                        </span>
                                        <span class="text-sm">50%</span>
                                    </div>
                                </span>
                                <div class="actions flex items-center justify-center gap-3">
                                    <i @click="toggle" aria-haspopup="true" aria-controls="overlay_menu1"
                                        class="pi pi-ellipsis-h cursor-pointer"></i>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
            <!-- Begin Modal Delet -->
        <Dialog v-model:visible="deletModal" header="Delet Project" :style="{ width: '25rem' }">
            <div class="p-2 pt-0 text-center">
                <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">O'chirishni istaysizmi?</h3>
                <button @click="deleteUsers()" class="text-white bg-red-600 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
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
import axios from 'axios';
import { ref } from 'vue';
import router from '../../router';
import loading from '../../components/loading.vue';

const users=ref({})
const deletModal = ref(false);
const loadingDel = ref(false);
const isloading = ref(false);


const menu = ref(null);
const rols_id=ref(router.currentRoute.value.params.id)
console.log(rols_id); 
const user_id=ref()
const card_table = ref(true)

const overlayMenuItems = [
    // {
    //     label: 'Ijrochilar',
    //     icon: 'pi pi-users',
    //     command: () => {
    //         router.push(`/rols/${performers_id.value}/users`)
    //     }
    // },
    {
        label: 'Taxrirlash',
        icon: 'pi pi-pencil',
        command: () => {
            router.push(`/rols/${rols_id.value}/users/${user_id.value}/editUser`);
        }
    },
    {
        label: `O'chirish`,
        icon: 'pi pi-trash',
        command: () => {
          modaldelet()
        }
    },
];

const modaldelet=(id)=>{
    deletModal.value = true
}

function getPerformers (id){
    user_id.value = id;
    console.log(id);
     toggle(event);
}

const toggle = (event) => {
    menu.value.toggle(event);
};

const cardFunction = () => {
    card_table.value = true

}
const tableFunction = () => {
    card_table.value = false
}
function addUser(){
    router.push(`/rols/${rols_id.value}/users/addusers`)
}

function fetchUsers() {
    axios
    .get('https://pm-api.essential.uz/api/users', {
        params: {
            user_role_id: rols_id.value
        },
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then((res) => {
        if (res.status === 200) {
            isloading.value = true
        }
        console.log(res.data);
        users.value = res.data;
        users.value.sort((a,b)=>a.id-b.id)
    }).catch((err) => {
        console.log(err);
    })
}
fetchUsers()

function deleteUsers() {
    axios
    .delete(`https://pm-api.essential.uz/api/users/${user_id.value}/delete`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then((res) => {
        console.log(res.data);
        deletModal.value = false
        fetchUsers()
    }).catch((err) => {
        console.log(err);
    })
}
</script>
<style scoped>
    
</style>