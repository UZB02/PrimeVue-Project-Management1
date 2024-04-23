<template>
    <!-- <TopNavBar></TopNavBar> -->
    <h1 class="ml-3 font-bold text-3xl">
        {{ proektName }}
    </h1>
    <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addProject" class="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <i class="pi pi-plus"></i>
                Add Stage
            </button>
            <!-- <h2 class="font-semibold">Loyihaning umumiy ma’lumotlarini ko’rish</h2> -->
            <span class="flex items-center justify-center gap-3 p-input-icon-right">
                <span class="flex flex-row-reverse items-center justify-between gap-3">
                        <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                            <input type="text" class="p-2 outline-none" placeholder="Search...">
                            <i class="pi pi-search mr-2 cursor-pointer"></i>
                        </div>
                    </span>
                <button type="button" @click="rolsToggle" aria-haspopup="true" aria-controls="overlay_menu" class="p-link layout-topbar-button">
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

                <span @click="cardFunction" class="hover:scale-105 flex cursor-pointer items-center justify-center gap-1">
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
    <section :class="isloading ? 'container flex flex-wrap items-center justify-center gap-2' : 'hidden'">
        <div class="container flex flex-wrap items-center justify-center gap-2">
            <div class="container flex flex-wrap gap-2">
                <div :class="card_table ? 'card shadow-md p-3 rounded-lg w-[32%] h-[300px] max-[1100px]:w-[45%] max-[1100px]:h-[300px] max-[750px]:h-[300px] flex flex-col gap-2' : 'hidden'" v-for="(item, itemId) in data" :key="itemId">
                    <div class="actions flex items-center justify-between gap-2">
                        <h2 class="font-bold text-sm text-slate-400">{{ itemId + 1 }}</h2>
                        <div class="flex items-center justify-center gap-2">
                            <i v-tooltip.top="'Taxrirlash'" class="pi pi-pencil cursor-pointer" @click="() => modalEdit(JSON.stringify(item))"></i>
                            <i v-tooltip.top="`O'chirish`" class="pi pi-trash cursor-pointer" @click="modalDelet(item.id)"></i>
                            <i @click="getProjectiId(item.id)" aria-haspopup="true" aria-controls="overlay_menu" class="pi pi-ellipsis-h cursor-pointer"></i>
                        </div>
                    </div>
                    <div class="image">
                        <img @click="generalinformation(item.id)" class="cursor-pointer rounded-xl w-full h-40 object-cover" src="https://avatars.mds.yandex.net/i?id=04cb0170b6dacf1c71482d60515b32d26ef8f346-12314646-images-thumbs&n=13" alt="" />
                    </div>
                    <div class="bottom">
                        <span class="flex flex-col gap-2">
                            <div class="flex items-center justify-between">
                                <h1 @click="generalinformation(item.id)" class="w-[75%] whitespace-nowrap overflow-hidden text-overflow-ellipsis cursor-pointer text-2xl font-bold">{{ item.name }}</h1>
                            </div>

                            <div class="flex items-center justify-between gap-1">
                                <div class="flex items-center justify-center gap-2">
                                    <span class="flex items-center justify-center gap-1">
                                        <i class="pi pi-calendar"></i>
                                        <h2 class="flex flex-col justify-center max-[900px]:text-sm">
                                            {{ item.createTime }} <span class="text-sm text-gray-500 max-[900px]:text-xs">{{ item.start_date }}</span>
                                        </h2>
                                    </span>
                                    <span class="flex items-center justify-center gap-1">
                                        <i class="pi pi-paperclip"></i>
                                        <h2>{{ item.file }}</h2>
                                    </span>
                                    <span class="flex items-center justify-center gap-1">
                                        <i class="pi pi-verified"></i>
                                        <h3>{{ doneTasks }}/{{item.tasks.length}}</h3>
                                    </span>
                                </div>
                                <div class="flex items-center justify-center gap-2">
                                    <span class="flex items-center justify-center gap-1">
                                        <div :style="`width: 50px; padding: 8px; border-radius: 10px; background-color: #${item.color}`"></div>
                                    </span>
                                    <AvatarGroup>
                                        <Avatar v-tooltip.bottom="{ value: `${item.avatar_name}`, autoHide: false }" image="https://avatars.mds.yandex.net/i?id=844943df4705fa02dbdbeffd899b1780b329ff55-12422342-images-thumbs&n=13" shape="circle">
                                        </Avatar>
                                    </AvatarGroup>
                                </div>
                            </div>
                            <div class="w-full flex items-center justify-center gap-3">
                                <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                    <div :style="{ width: `${(doneTasks*100)/item.tasks.length}%`}" class="score rounded-xl bg-green-500 h-2"></div>
                                </span>
                                <span class="text-sm">{{Math.round((doneTasks*100)/item.tasks.length)}}%</span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div :class="card_table ? 'hidden' : 'list w-full max-[900px]:w-[100%]'">
                <div class="card">
                    <div class="flex align-items-center justify-content-between mb-4">
                        <h5 class="text-4xl font-medium">{{ data.length }} Topshiriq</h5>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="This Week" class="w-1/2 md:w-14rem border" />
                    </div>
                    <ul v-for="(item, itemId) in data" :key="itemId" class="w-full p-0 mx-0 mt-0 mb-4 list-none">
                        <li class="flex items-center justify-between align-items-center py-2 border-bottom-1 max-[900px]:w-[90%] surface-border">
                            <div class="w-[35%] flex items-center gap-2">
                                <h1 class="font-bold text-gray-500">{{ itemId + 1 }}.</h1>
                                <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                    <i class="pi pi-table text-xl text-blue-500"></i>
                                </div>

                                <span @click="generalinformation(item.id)" class="w-[70%] cursor-pointer text-900 line-height-3 flex flex-col gap-2">
                                    <h1 class="font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.name }}</h1>
                                    <h4 class="text-slate-400">{{ item.status }}</h4>
                                </span>
                            </div>
                            <div class="w-[65%] flex gap-3 items-center justify-center">
                                <span class="flex items-center justify-center gap-1">
                                    <div :style="`width: 50px; padding: 8px; border-radius: 10px; background-color: #${item.color}`"></div>
                                </span>
                                <span class="flex w-1/4 items-center justify-center gap-2">
                                    <Avatar image="https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13" size="large" shape="circle"> </Avatar>
                                    <h1 class="w-1/2 text-slate-500 font-medium whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.avatar_name }}</h1>
                                </span>
                                <span class="flex items-center justify-center gap-2">
                                    <i class="pi pi-calendar"></i>
                                    <span class="w-40 font-semibold">
                                        {{ item.start_date }}
                                    </span>
                                </span>

                                <span class="flex items-center justify-center gap-2">
                                    <i class="pi pi-paperclip"></i>
                                    <h3>8</h3>
                                </span>
                                <span class="w-1/4 flex flex-col items-center justify-center gap-1">
                                    <div class="w-full flex items-center justify-center gap-3">
                                        <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                            <div :style="{ width: `${doneTasks*100/item.tasks.length}%` }" class="score rounded-xl bg-green-500 h-2"></div>
                                        </span>
                                        <span class="text-sm">{{Math.round(doneTasks*100/item.tasks.length)}}%</span>
                                    </div>
                                </span>
                                <div class="actions flex items-center justify-center gap-3">
                                    <i v-tooltip.top="'Taxrirlash'" class="pi pi-pencil cursor-pointer" @click="() => modalEdit(JSON.stringify(item))"></i>
                                    <i v-tooltip.top="`O'chirish`" class="pi pi-trash cursor-pointer" @click="modalDelet(item.id)"></i>
                                    <i @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" class="pi pi-ellipsis-h cursor-pointer"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
              <!-- Begin Pagenetion comp -->
              <span :class="ViewPagenetion ? 'block' : 'hidden'">
                <Pagenetion :currentPage="currentPage" :totalPages="totalPages" @goToPage="fetchData" />
              </span>
               <!-- End Pagenetion comp -->
        </div>
        <!-- Begin Modal Delet -->
        <Dialog v-model:visible="deletModal" header="Delet Project" :style="{ width: '25rem' }">
            <div class="p-2 pt-0 text-center">
                <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">O'chirishni istaysizmi?</h3>
                <button @click="deletProject" class="text-white bg-red-600 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">       <span :class="editisloading ? 'block' : 'hidden'">
                                  <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
    <svg class="h-7 w-7 animate-spin stroke-white" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
    </svg>
    <span class="text-xl font-medium text-white">Loading...</span>
</div>
                        </span>                    
                         <span :class="editisloading ? 'hidden' : 'block text-xl'">O'chirish</span></button>
                <button @click="deletModal = false" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                    Bekor qilish
                </button>
            </div>
        </Dialog>
        <!-- End Modal Delet -->
        <!-- Begin Edit Modal -->
        <Dialog v-model:visible="editModal" header="Edit Profile" class="w-[70%]">
            <div class="p-[1px] pt-0 text-center w-full">
                <form @submit.prevent="editProject()" typeof="submit" class="w-full flex flex-col gap-3 p-5">
                    <div class="grid gap-2 md:grid-cols-2">
                        <div class="w-full">
                            <label for="first_name" class="block text-start mb-2 font-medium text-gray-900 dark:text-white">Bosqich nomi</label>
                            <input
                                v-model="editName"
                                type="text"
                                id="first_name"
                                class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Project Menagment"
                            />
                        </div>
                        <div>
                            <label for="summ" class="block mb-2 font-medium text-start text-gray-900 dark:text-white">Bosqich tartib raqami</label>
                            <input
                                type="number"
                                v-model="editOrder_by"
                                id="summ"
                                class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="1"
                                min="0"
                            />
                        </div>
                        <div class="w-full">
                            <label for="last_name" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Bosqich davomida topshirilishi zarur bo'lgan ishlar</label>
                            <textarea
                                id="message"
                                rows="4"
                                v-model="editWorks"
                                class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Bosqich davomida topshirilishi zarur bo'lgan ishlar haqida umumiy ma'lumot..."
                            ></textarea>
                        </div>
                        <div class="w-full">
                            <label for="last_name" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Bosqich so'ngida topshirilishi zauru bo'lgan ishlar</label>
                            <textarea
                                id="message"
                                rows="4"
                                v-model="editResults"
                                class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Bosqich so'ngida topshirilishi zauru bo'lgan ishlar haqida umumiy ma'lumot..."
                            ></textarea>
                        </div>
                        <div class="w-full">
                            <label for="last_name" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">Bosqich haqida umumiy ma'lumot</label>
                            <textarea
                                id="message"
                                rows="4"
                                v-model="editAbout"
                                class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Bosqich haqida umumiy ma'lumot..."
                            ></textarea>
                        </div>
                        <div>
                            <label for="startT" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">loyihani rejalashtirilgan start sanasi</label>
                            <input
                                type="datetime-local"
                                v-model="editStart_date"
                                id="startT"
                                class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label for="EndT" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">loyihaning rejalashtirilgan tugash sanasi</label>
                            <input
                                type="datetime-local"
                                v-model="editEnd_date"
                                id="EndT"
                                class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label for="visitors" class="block mb-2 text-start font-medium text-gray-900 dark:text-white">loyiha belgilangan rangi </label>
                            <span class="flex items-center justify-center"> <ColorPicker v-model="editColor" /></span>
                        </div>
                    </div>
                     <span class="w-full flex items-center justify-end gap-2">
                    <button
                        @click="editProject()"
                        type="button"
                        class="text-white w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <span :class="editisloading ? 'block' : 'hidden'">
                                  <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
    <svg class="h-5 w-5 animate-spin stroke-white" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
    </svg>
    <span class="text-xl font-medium text-white">Loading...</span>
</div>
                        </span>                    
                         <span :class="editisloading ? 'hidden' : 'block text-xl'">Edit</span>
                    </button>
                    <button
                        type="button"
                        @click="Cencel"
                        class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg w-full text-xl px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                        Cencel
                    </button>
                </span>
                </form>
            </div>
        </Dialog>
        <!-- End Edit Modal -->
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="w-1/6 translate-y-2">
            <Menu :model="items" />
        </Menu>
    </section>
</template>
<script setup>
import loading from '@/components/loading.vue';
import Pagenetion from '@/components/pagenetion.vue';
// import TopNavBar from '../../../../components/topNavMap.vue'
import { ref, reactive } from 'vue';
import router from '@/router';
import axios from 'axios';
const deletModal = ref(false);
const editModal = ref(false);
const editId = ref(null);
const editName = ref('');
const editColor = ref('');
const editAbout = ref('');
const editCreated_at = ref('');
const editEnd_date = ref('');
const editOrder_by = ref('');
const editResults = ref('');
const editStart_date = ref('');
const editWorks = ref('');
const editisloading = ref(false);
const project_id=router.currentRoute.value.params.id;
const melistone_id=ref('');
const doneTasks = ref();
const proektName=ref('');
console.log(project_id,"stages");

const ViewPagenetion=ref(true)
const currentPage = ref('');
const totalPages = ref();

const items = ref([
    {
        label: `Arxivlash`,
        icon: 'pi pi-server',
        command: () => {
            router.push('/general_information');
        }
    },
    {
        label: `Umumiy ma'lumotlar`,
        icon: 'pi pi-list',
        command: () => {
            router.push(`/projects_list/${project_id}/melistone/${melistone_id.value}/general_information`);
        }
    },
    {
        label: 'Loyihaga biriktirilgan fayllar',
        icon: 'pi pi-file',
        command: () => {
            router.push(`/projects_list/${project_id}/melistone/${melistone_id.value}/files`);
        }
    },
    // {
    //     label: 'Loyiha ijrochilari',
    //     icon: 'pi pi-users',
    //     command: () => {
    //         router.push(`/projects_list/${project_id}/melistone/${melistone_id.value}/performers`);
    //     }
    // },
    // {
    //     label: 'Loyiha moliyaviy ko’rsatkichlari',
    //     route: '/financial',
    //     command: () => {
    //         router.push('/financial');
    //     }
    // },
    // {
    //     label: 'Kanban Doska',
    //     icon: 'pi pi-sliders-v',
    //     command: () => {
    //         router.push('/kanban');
    //     }
    // }
]);
const menu = ref();
const eId = ref(null);
const isloading = ref(false);
const data = ref({});
const Allresult=ref();

const generalinformation = (id) => {
    router.push(`/projects_list/${project_id}/melistone/${id}/sprint`);
};

// for (const task in data) {
//     melistoneIdForTasks[task] = task;
// console.log(data);
// }
// console.log(melistoneIdForTasks.value);

function getProjectiId (id){
    melistone_id.value = id;
    console.log(id);
     toggle(event);
}

const toggle = (event) => {
    menu.value.toggle(event);
};

const selectedCity = ref();
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
    }
]);
const cities = ref([
    { name: 'This Week', code: 'TW' },
    { name: 'To Day', code: 'TD' },
    { name: 'Last Week', code: 'LW' },
    { name: 'Last Day', code: 'LD' },
    { name: 'This Month', code: 'TM' }
]);

function modalEdit(item) {
    editModal.value = true;
    let data = JSON.parse(item);
    // console.log(data);
    editId.value = data.id;
    editAbout.value = data.about;
    editColor.value = data.color;
    editCreated_at.value = data.created_at;
    editEnd_date.value = data.end_date;
    editName.value = data.name;
    editOrder_by.value = data.order_by;
    editResults.value = data.results;
    editStart_date.value = data.start_date;
    editWorks.value = data.works;
}

const modalDelet = (id) => {
    eId.value = id;
    console.log(eId.value);
    deletModal.value = true;
};


const deletProject = () => {
    editisloading.value = true;
    axios
        .delete(`https://pm-api.essential.uz/api/milestone/${eId.value}/delete`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Bajarildi',
                    showConfirmButton: false,
                    timer: 1500
                });
                editisloading.value = false;
                fetchData();
                deletModal.value = false;
            }
            console.log(result);
        })
        .catch((error) => {
            editisloading.value = false;
            // console.error(error);
        });
};
function fetchData(page) {
    axios
        .get(`https://pm-api.essential.uz/api/milestone?project_id=${project_id}&${page}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                isloading.value = true;
                console.log(result.data.data);
                data.value = result.data.data;
                if(result.data.last_page > 1){
                    totalPages.value = result.data.last_page;
                }else{
                    ViewPagenetion.value = false;
                }
            }
        })
        .catch((err) => {
            console.error(err);
        });
}
fetchData();

const editProject = (id) => {
    editisloading.value = true;
    const token = localStorage.getItem('token');
    const headers = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        Authorization: `Bearer ${token}`
    };

    axios
        .post(
            `https://pm-api.essential.uz/api/milestone/${editId.value}/update`,
            {
                name: editName.value,
                about: editAbout.value,
                color: editColor.value,
                created_at: editCreated_at.value,
                end_date: editEnd_date.value,
                order_by: editOrder_by.value,
                results: editResults.value,
                start_date: editStart_date.value,
                works: editWorks.value
            },
            { headers }
        )
        .then((result) => {
            if (result.status === 200) {
                 Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Taxrirlandi',
                    showConfirmButton: false,
                    timer: 1500
                });
                editisloading.value = false;
                    editModal.value = false;
                fetchData();
            }
            // console.log(result);
        })
        .catch((error) => {
            editisloading.value = false;
            console.error(error);
        });
};

const addProject = () => {
    router.push(`/projects_list/${project_id}/melistone/addMilestones`);
};

const rolsToggle = (event) => {
    rolsMenu.value.toggle(event);
};
const cardFunction = () => {
    card_table.value = true;
};
const tableFunction = () => {
    card_table.value = false;
};

function fetchDoneTasks (){
    axios
        .get(`https://pm-api.essential.uz/api/tasks/filter?order_by=5&melistone_id=3`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                doneTasks.value = result.data;
                console.log(result.data);
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

fetchDoneTasks();

function fetchProekts (){
        axios
        .get(`https://pm-api.essential.uz/api/project/show/${project_id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                proektName.value = result.data[0].name;
            }
            console.log(proektName.value);
        })
        .catch((err) => {
            console.error(err);
        });
}
fetchProekts();

const lineData = ref(null);
const pieData = ref(null);
const lineOptions = ref(null);
const pieOptions = ref(null);

let documentStyle = getComputedStyle(document.documentElement);
let textColor = documentStyle.getPropertyValue('--text-color');
let textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
let surfaceBorder = documentStyle.getPropertyValue('--surface-border');

lineData.value = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue('--primary-500'),
            borderColor: documentStyle.getPropertyValue('--primary-500'),
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue('--primary-200'),
            borderColor: documentStyle.getPropertyValue('--primary-200'),
            tension: 0.4
        }
    ]
};

lineOptions.value = {
    plugins: {
        legend: {
            labels: {
                fontColor: textColor
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        },
        y: {
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        }
    }
};

pieData.value = {
    labels: [`J'ami Mablag`, `Xarajatlar`],
    datasets: [
        {
            data: [540, 325],
            backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--teal-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--teal-400')]
        }
    ]
};

pieOptions.value = {
    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
                color: textColor
            }
        }
    }
};
</script>
<style></style>
