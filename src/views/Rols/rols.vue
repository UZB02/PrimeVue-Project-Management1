<template>
    <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addRols"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-1"><i
                    class="pi pi-plus"></i> Add Rol</button>
            <span class="flex items-center justify-center gap-3 p-input-icon-right">
                <button type="button" @click="rolsToggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                </button>
                <Menu ref="rolsMenu" id="overlay_menu" :model="rolsItems" :popup="true" class="translate-y-2">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                                <span :class="item.icon" />
                                <span class="ml-2">{{ item.label }}</span>
                            </a>
                        </router-link>
                    </template>
                </Menu>
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
    <section :class="isloading ? 'flex flex-col gap-2' : 'hidden'">
        <div :class="card_table ? `top max-[900px]:w-full` : `w-full`">
            <div :class="card_table ? 'flex flex-col gap-4 p-3 rounded-2xl' : 'hidden'">
                <div class="flex align-items-center justify-content-between">
                    <h1 class="text-2xl">Loyihadagi Rolslar</h1>
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
                    <div v-for="item in rols"
                        class="card1 transition hover:scale-[1.02] flex items-center justify-center flex-col gap-2 shadow rounded-xl p-3 w-[19%] max-[900px]:w-[30%] max-[1030px]:w-[45%]">
                        <div class="action w-full flex items-center justify-end gap-2">
                            <i @click="getPerformers(item.id)" aria-haspopup="true" aria-controls="overlay_menu1"
                                class="pi pi-ellipsis-h cursor-pointer"></i>
                        </div>
                        <span class="flex items-center justify-center flex-col gap-2  p-3 w-full">
                            <img @click="gotoPerformersInfo(item.id)" src="https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250"
                                class="w-24 card-img  h-24 rounded-[50%] cursor-pointer" alt="">
                            <h1 class="font-bold">{{ item.name}}</h1>
                          <span class="w-full flex flex-row-reverse items-center justify-between gap-3">
                             <span class="flex items-center justify-center gap-1">
                                    <i class="pi pi-users font-bold"></i>
                                    <h1 class="font-sans font-medium">{{ item.users.length }}</h1>
                                </span>
                              <h2 class="font-sans font-medium bg-green-300 text-white pl-3 pr-3 pb-1 rounded">{{ item.created_at.substr(0, 10) }}</h2>
                            <!-- <h4 class="font-sans font-medium pb-1">{{ item.user_role.name }}</h4> -->
                          </span>
                            <!-- <h5 class="text-gray-500 font-italic">{{ item.user.phone }}</h5> -->
                        </span>
                    </div>
                    <Menu ref="menu" :model="overlayMenuItems" :popup="true" />
                </div>
            </div>
            <div :class="card_table ? 'hidden' : 'list w-full max-[900px]:w-[100%]'">
                <div class="card">
                    <div class="flex align-items-center justify-content-between mb-4">
                        <h5 class="text-4xl font-medium">{{ rols.length }} Rols</h5>
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
                    <ul v-for="(item,itemkey) in rols" :key="item.id" class="w-full p-0 mx-0 mt-0 mb-4 list-none">
                        <li
                            class="flex items-center justify-between  py-2 border-bottom-1 max-[900px]:w-[90%] surface-border">
                            <div class="w-[35%] flex items-center gap-2">
                                <h1 class="font-bold text-gray-500">{{ itemkey + 1 }}.</h1>
                                <span class="flex w-1/4 items-center justify-center gap-2">
                                    <Avatar @click="gotoPerformersInfo(item.id)" class="cursor-pointer" image="https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250" size="large" shape="circle">
                                    </Avatar>
                                </span>

                                <span @click="gotoPerformersInfo(item.id)"
                                    class="w-[70%] cursor-pointer text-900 line-height-3 flex flex-col gap-2">
                                    <h1 class="font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{
                                        item.name }}</h1>
                                    <h4 class="text-slate-400">{{ item.key }}</h4>
                                </span>
                            </div>
                            <div class="w-[65%] flex  gap-3  items-center justify-between">
                                <span class="flex w-1/3 items-center justify-center gap-1">
                                    <i class="pi pi-users font-bold"></i>
                                    <h1 class="font-sans font-medium">{{ item.users.length }}</h1>
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
                                    <i @click="getPerformers(item.id)" aria-haspopup="true" aria-controls="overlay_menu1"
                                        class="pi pi-ellipsis-h cursor-pointer"></i>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex gap-2 max-[900px]:flex-col max-[1030px]:flex-col">
            <!-- <div class="border flex-col gap-4 p-3 rounded-2xl bottom w-[100%] max-[1030px]:w-full  flex">
                <div class="flex justify-content-between align-items-center mb-5">
                    <h5 class="text-2xl">Ijrochilar reyting tizimi ma’lumoti paneli. </h5>
                </div>
                <ul class="list-none flex flex-col p-0 m-0">
                    <li v-for="item in rols"
                        class="flex flex-column border-b-2 p-1 flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="cards w-full flex items-center justify-between">
                            <div class="w-[70%] flex items-center gap-3">
                                <img src="https://avatars.mds.yandex.net/i?id=3301a7f499e9d8287d05e084c96c5002c4852f08-10121710-images-thumbs&ref=rim&n=33&w=250&h=250" alt="" class="w-[10%]">
                                <div class="">
                                    <span class="text-900 font-medium mr-2 mb-1 md:mb-0">{{item.name }}</span>
                                    <div class="mt-1 text-600">{{ item.name }}</div>
                                </div>
                            </div>
                            <div class="mt-2 pr-5 md:mt-0 flex align-items-center">
                                <i class="pi pi-star"></i>
                                <span class="text-orange-500 ml-3 font-medium">20</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div> -->
        </div>
           <!-- Begin Modal Delet -->
        <Dialog v-model:visible="deletModal" header="Delet Project" :style="{ width: '25rem' }">
            <div class="p-2 pt-0 text-center">
                <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">O'chirishni istaysizmi?</h3>
                <button @click="deletePerformers()" class="text-white bg-red-600 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                    <ProgressSpinner style="width: 20px; height: 20px" :class="loadingDel ? 'block' : 'hidden'" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                    <span :class="loadingDel ? 'block' : 'hidden'">Loading...</span> <span :class="loadingDel ? 'hidden' : 'block'">O'chirish</span>
                </button>
                <button @click="deletModal = false" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                    Bekor qilish
                </button>
            </div>
        </Dialog>
        <!-- End Modal Delet -->

        <Dialog v-model:visible="visible" maximizable modal header="Header" :style="{ width: '70rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div class="container flex flex-col gap-3">
                <div class="flex items-center justify-center flex-col outline-none">
                    <span class="flex items-center justify-center gap-2">
                        <h1 class="bg-indigo-600 text-white p-1 rounded-md text-lg font-medium">Jami berilgan topshiriqlar
                            {{ allTask }}</h1>
                        <h1 class="bg-indigo-600 text-white p-1 rounded-md text-lg font-medium">Bajarilgan topshiriqlar {{
                            doneTask }}</h1>
                    </span>
                    <span class="flex items-center justify-center translate-x-4">
                        <Knob v-model="value" valueTemplate="{value}%" readonly />
                    </span>
                </div>
                <div class="taskCard flex justify-between h-1/3 gap-2 p-1 border rounded-xl">
                    <div class="left w-1/4">
                        <img class="h-full w-full object-fill"
                            src="https://avatars.mds.yandex.net/i?id=ec4ff5070536ccebd81888d9920280e0d513e929-10810377-images-thumbs&n=13">
                    </div>
                    <div class="right w-[75%] flex flex-col gap-2 ">
                        <span class="flex items-center justify-between">
                            <h1 class="text-center font-bold font-sans text-2xl">Loyiha ijrochilari bo'limi bilan ishlash
                            </h1>
                            <span class="flex items-center justify-center gap-2 -translate-x-1">
                                <i class="pi pi-stopwatch font-bold"></i>
                                <span class="flex items-center gap-2 justify-center">
                                    <h1 class="font-medium">20.02.2024</h1>
                                    <i class="pi pi-arrow-right font-medium"></i>
                                    <h2 class="font-medium">20.03.2024</h2>
                                </span>
                            </span>
                        </span>
                        <span class="flex h-full">
                            <div class="info w-[90%] flex flex-col  gap-2">
                                <p class="font-sans font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio quisquam libero, error
                                    iure
                                    autem eum. Omnis nostrum, esse magni minima aspernatur laudantium magnam, necessitatibus
                                    aliquam
                                    consectetur voluptas, alias tempora. Iure, soluta ullam! Ipsum animi ex esse debitis
                                    alias
                                    ducimus vel saepe facere, delectus laboriosam obcaecati sit, rem, vero quas? Quo
                                    necessitatibus
                                    libero vero ea esse ipsum soluta facilis doloremque est deserunt?</p>
                            </div>
                            <div class="w-1/3 flex flex-col items-center justify-center gap-3">
                                <span class="bg-gray-200 h-1/5 flex items-center rounded-md w-full">
                                    <div style="width: 50%;"
                                        class="score h-full flex items-center justify-center rounded-md bg-green-500 p-1">
                                        <span class="text-base text-white">50%</span>
                                    </div>
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
                <div class="taskCard flex justify-between h-1/3 gap-2 p-1 border rounded-xl">
                    <div class="left w-1/4">
                        <img class="h-full w-full object-fill"
                            src="https://avatars.mds.yandex.net/i?id=81fffc7f985b85758b426347a68e5b010b68b1ee-10122654-images-thumbs&n=13">
                    </div>
                    <div class="right w-[75%] flex flex-col gap-2 ">
                        <span class="flex items-center justify-between">
                            <h1 class="text-center font-bold font-sans text-2xl">Loyiha ijrochilari bo'limi bilan ishlash
                            </h1>
                            <span class="flex items-center justify-center gap-2 -translate-x-1">
                                <i class="pi pi-stopwatch font-bold"></i>
                                <span class="flex items-center gap-2 justify-center">
                                    <h1 class="font-medium">20.02.2024</h1>
                                    <i class="pi pi-arrow-right font-medium"></i>
                                    <h2 class="font-medium">20.03.2024</h2>
                                </span>
                            </span>
                        </span>
                        <span class="flex h-full">
                            <div class="info w-[90%] flex flex-col  gap-2">
                                <p class="font-sans font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div class="w-1/3 flex flex-col items-center justify-center gap-3">
                                <span class="bg-gray-200 h-1/5 flex items-center rounded-md w-full">
                                    <div style="width: 80%;"
                                        class="score h-full flex items-center justify-center rounded-md bg-green-500 p-1">
                                        <span class="text-base text-white">80%</span>
                                    </div>
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </Dialog>
    </section>
</template>
<script setup>
import router from '@/router';
import { ref, onMounted } from "vue";
import axios from "axios";
import loading from "../../components/loading.vue";

const allTask = 50;
const doneTask = 40;
const value = ref(Math.round((doneTask / allTask) * 100));
// const project_id=ref(router.currentRoute.value.params.id)
// console.log(project_id.value);
const rols_id=ref('')
const deletModal = ref(false);
const loadingDel = ref(false);
const isloading = ref(false);


const gotoPerformersInfo=(id)=>{
    router.push(`/rols/${id}/users`)
    console.log(id);
}
const modalDelet = () => {
    deletModal.value = true;
};

function getPerformers (id){
    rols_id.value = id;
    console.log(id);
     toggle(event);
}

const deletePerformers=()=>{
    console.log(rols_id.value);
     loadingDel.value = true;
    axios.delete(`https://pm-api.essential.uz/api/user-roles/${rols_id.value}/delete`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res) => {
        if (res.status === 200) {
            Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `O'chirildi`,
                    showConfirmButton: false,
                    timer: 1500
                });
            loadingDel.value = false;
            deletModal.value = false;
            fetchRols();
        }
        console.log(res);
    }).catch((err) => {
        loadingDel.value = false
        console.log(err);
    })

}

const rols = ref({})

function fetchRols() {
    axios
    .get('https://pm-api.essential.uz/api/user-roles', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res) => {
        if (res.status === 200) {
            isloading.value = true;
        }
        rols.value = res.data;
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    }); 
}

fetchRols();

function editrol(){
    router.push(`/rols/${rols_id.value}/editrols`)
}

const visible = ref(false);

const menu = ref(null);

const overlayMenuItems = [
    {
        label: 'Ijrochilar',
        icon: 'pi pi-users',
        command: () => {
            router.push(`/rols/${rols_id.value}/users`)
        }
    },
    {
        label: 'Taxrirlash',
        icon: 'pi pi-pencil',
        command: () => {
          editrol()
        }
    },
    {
        label: `O'chirish`,
        icon: 'pi pi-trash',
        command: () => {
          modalDelet()
        }
    },
];

const toggle = (event) => {
    menu.value.toggle(event);
};



const card_table = ref(true);
const rolsMenu = ref();
const rolsItems = ref([
    {
        label: 'Developer',
        icon: 'pi pi-user',
        route: '/developer'
    },
    {
        label: 'Manager',
        icon: 'pi pi-user',
        route: '/projects_list'
    },
    {
        label: 'Analyst',
        icon: 'pi pi-user',
        route: '/analyst'
    },
]);

const addRols = () => {
    router.push(`/addrols`);
}

const rolsToggle = (event) => {
    rolsMenu.value.toggle(event);
};
const cardFunction = () => {
    card_table.value = true

}
const tableFunction = () => {
    card_table.value = false
}
</script>
<style></style>