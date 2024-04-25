<template>
    <!-- <TopNavMap></TopNavMap> -->
    <h1 class="ml-3 font-bold text-3xl">
        Projects Bo'limi
    </h1>
    <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addProject" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-1"><i class="pi pi-plus"></i> ADD Project</button>
            <!-- <h2 class="font-semibold">Loyihaning umumiy ma’lumotlarini ko’rish</h2> -->
            <span class="flex items-center justify-center gap-3 p-input-icon-right">
                        <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                            <input type="text" class="p-2 outline-none" placeholder="Search...">
                            <i class="pi pi-search mr-1 cursor-pointer"></i>
                        </div>
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
    <section :class="isloading ? 'w-full container flex flex-wrap items-center  gap-2' : 'hidden'">
        <div class="container flex flex-wrap items-center justify-center gap-2">
            <div class="container flex flex-wrap justify-center gap-2">
                <div :class="card_table ? 'container flex flex-wrap gap-2' : 'hidden'">
                    <div class="card shadow-md p-3 rounded-lg w-[32%] h-[300px] max-[1100px]:w-[45%] max-[1100px]:h-[300px] flex flex-col gap-2 max-[1030px]:w-[49%] max-[1030px]:h-[300px]" v-for="(item, ItemKey) in data" :key="ItemKey">
                        <div class="actions flex items-center justify-between ">
                            <h2 class="font-bold text-sm text-slate-400">{{ ItemKey + 1 }}</h2>
                            <div class="svg flex items-center justify-end gap-2">
                                <i v-tooltip.top="'Taxrirlash'" class="pi pi-pencil cursor-pointer" @click="() => modalEdit(JSON.stringify(item))"></i>
                                <i v-tooltip.top="`O'chirish`" class="pi pi-trash cursor-pointer" @click="modalDelet(item.id)"></i>
                                <i @click="getProjectiId(item.id)" aria-haspopup="true" aria-controls="overlay_menu" class="pi pi-ellipsis-h cursor-pointer"></i>
                            </div>
                        </div>
                        <div class="image">
                            <img @click="generalinformation(item.id)" class="rounded-xl cursor-pointer w-full h-40 object-cover" src="https://avatars.mds.yandex.net/i?id=672ad595cdb990ce88658fad70c678881050887e-10809483-images-thumbs&n=13" alt="Rasm" />
                        </div>
                        <div class="bottom">
                            <span class="flex flex-col gap-2">
                                <div class="flex items-center justify-between">
                                    <h1 @click="generalinformation(item.id)" class="w-[80%] whitespace-nowrap overflow-hidden text-overflow-ellipsis cursor-pointer text-2xl font-bold">
                                        {{ item.name }}
                                    </h1>
                                </div>

                                <div class="flex items-center justify-between gap-1">
                                    <div class="flex items-center justify-center gap-2">
                                        <span class="flex items-center justify-center gap-1">
                                            <i class="pi pi-calendar"></i>
                                            <h2 class="whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.date_create }}</h2>
                                        </span>
                                        <span class="flex items-center justify-center gap-1">
                                            <i class="pi pi-paperclip"></i>
                                            <h2>{{ item.file }}</h2>
                                        </span>
                                        <span class="flex items-center justify-center gap-1">
                                            <i class="pi pi-verified"></i>
                                            {{ doneTasks }}/{{ item.tasks.length }}
                                        </span>
                                    </div>
                                    <span class="flex items-center justify-center gap-1">
                                        <div :style="`width: 50px; padding: 8px; border-radius: 10px; background-color: #${item.color}`"></div>
                                    </span>
                                    <div class="">
                                        <AvatarGroup class="mb-2">
                                            <Avatar v-tooltip.bottom="{ value: `${item.avatar_name}`, autoHide: false }" :image="item.avatar" shape="circle"> </Avatar>
                                        </AvatarGroup>
                                    </div>
                                </div>
                                <div class="w-full flex items-center justify-center gap-3">
                                    <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                        <div :style="{ width: `${(doneTasks*100)/item.tasks.length}%` }" class="score rounded-xl bg-green-500 h-2"></div>
                                    </span>
                                    <span class="text-sm">{{ item.tasks.length ? Math.round((doneTasks*100)/item.tasks.length) : 0 }}%</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="card_table ? 'hidden' : 'list w-full max-[900px]:w-[100%]'">
                <div class="card p-3">
                    <div class="flex align-items-center justify-content-between mb-4">
                        <h5 class="text-4xl font-medium">{{ data.length }} Projects</h5>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="This Week" class="w-1/2 md:w-14rem border" />
                    </div>
                    <ul v-for="(item, ItemKey) in data" :key="ItemKey" class="w-full p-0 mx-0 mt-0 mb-4 list-none">
                        <li class="flex items-center justify-between align-items-center py-2 border-bottom-1 max-[900px]:w-[90%] surface-border">
                            <div class="w-[35%] flex items-center gap-2">
                                <h1 class="font-bold text-gray-500">{{ ItemKey + 1 }}.</h1>
                                <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                    <i  class="pi pi-qrcode text-xl text-blue-500"></i>
                                </div>

                                <span @click="generalinformation(item.id)" class="w-[70%] cursor-pointer text-900 line-height-3 flex flex-col gap-2">
                                    <h1 class="font-bold text-xl whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.name }}</h1>
                                    <h4 class="text-slate-400">{{ item.prefix }}</h4>
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
                                    <span class="w-40 font-semibold whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                                        {{ item.date_create }}
                                    </span>
                                </span>

                                <span class="flex items-center justify-center gap-2">
                                    <i class="pi pi-paperclip"></i>
                                    <h3>6</h3>
                                </span>
                                <span class="w-1/4 flex flex-col items-center justify-center gap-1">
                                    <div class="w-full flex items-center justify-center gap-3">
                                        <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                            <div :style="{ width: `${doneTasks*100/item.tasks.length}%` }" class="score rounded-xl bg-green-500 h-2"></div>
                                        </span>
                                        <span class="text-sm">{{ item.tasks.length ? Math.round((doneTasks*100)/item.tasks.length) : 0 }}%</span>
                                    </div>
                                </span>
                                <div class="actions flex items-center justify-center gap-3">
                               <i v-tooltip.top="'Taxrirlash'" class="pi pi-pencil cursor-pointer" @click="() => modalEdit(JSON.stringify(item))"></i>
                                    <i v-tooltip.top="`O'chirish`" class="pi pi-trash cursor-pointer" @click="modalDelet(item.id)"></i>
                                    <i @click="getProjectiId(item.id)" aria-haspopup="true" aria-controls="overlay_menu" class="pi pi-ellipsis-h cursor-pointer"></i>
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
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class=" translate-y-2">
            <Menu :model="items" />
        </Menu>
        <!-- Begin Modal Delet -->
        <Dialog v-model:visible="deletModal" header="Delet Project" :style="{ width: '25rem' }">
            <div class="p-2 pt-0 text-center">
                <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">O'chirishni istaysizmi?</h3>
                <button @click="deletProject" class="text-white bg-red-600 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                    <ProgressSpinner style="width: 20px; height: 20px" :class="loadingDel ? 'block' : 'hidden'" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                    <span :class="loadingDel ? 'block' : 'hidden'">Loading...</span> <span :class="loadingDel ? 'hidden' : 'block'">O'chirish</span>
                </button>
                <button @click="deletModal = false" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
                    Bekor qilish
                </button>
            </div>
        </Dialog>
        <!-- End Modal Delet -->
        <!-- Begin Edit Modal -->
        <Dialog v-model:visible="editModal" header="Edit Project" class="w-[70%]">
            <div class="p-1 pt-0  w-full">
                <form @submit.prevent="editProject()" typeof="submit" class="w-full flex flex-col  gap-3 p-6">
                    <div class="grid gap-3 md:grid-cols-2 w-full">
                    <div class="w-full">
                        <label for="first_name" class="block mb-2  font-medium text-gray-900 dark:text-white">Loyiha nomi</label>
                        <input
                            v-model="editName"
                            type="text"
                            id="first_name"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Project Menagment"
                        />
                    </div>
                    <div class="w-full">
                        <label for="last_name" class="block mb-2 font-medium text-gray-900 dark:text-white">Loyiha nomi qisqartmasi</label>
                        <input
                            v-model="editShortname"
                            type="text"
                            id="last_name"
                           class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="PM"
                        />
                    </div>
                    <div>
                        <label class="block mb-2  font-medium text-gray-900 dark:text-gray-300" for="file_input">Logo</label>
                        <input
                         class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 -translate-y-1 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="file_input"
                            @change="editLogo"
                            type="file"
                            ref="file"
                        />
                    </div>
                    <div>
                        <label for="startT" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihani rejalashtirilgan start sanasi</label>
                        <input
                            type="datetime-local"
                            v-model="editDate_create"
                            id="startT"
                           class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="EndT" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihaning rejalashtirilgan tugash sanasi</label>
                        <input
                            type="date"
                            v-model="editEnd_date"
                            id="EndT"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="EndT" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihaning haqiqatdan start berilgan sanasi</label>
                        <input
                            type="date"
                            v-model="editFactual_start_date"
                            id="EndT"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="EndT" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihaning haqiqatdan tugagan sanasi</label>
                        <input
                            type="date"
                            v-model="editFactual_end_date"
                            id="EndT"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="summ" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihaning so'mdagi qiymati</label>
                        <input
                            type="number"
                            v-model="editUnit_value"
                            id="summ"
                             class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="500 000"
                            min="0"
                        />
                    </div>
                    <div>
                        <label for="summ" class="block mb-2 font-medium text-gray-900 dark:text-white">loyihanin ralizatsiyasiga ajratilgan summa</label>
                        <input
                            type="number"
                            v-model="editBudget"
                            id="summ"
                             class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="500 000"
                            min="0"
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="visitors" class="block mb-2 font-medium text-gray-900 dark:text-white">loyiha belgilangan rangi </label>
                        <span class="flex items-center justify-center"> <ColorPicker v-model="editColor" /></span>
                    </div>
                    <div>
                           <label for="visitors" class="block mb-2 font-medium text-gray-900 dark:text-white">loyiha tipi </label>
                        <select
                            name=""
                            v-model="editType"
                            id=""
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="manolith">Manolith</option>
                            <option value="subsystem">Sub-sytem</option>
                        </select>
                    </div>
                       <div>
                        <label for="about" class="block mb-2 font-medium text-gray-900 dark:text-white">Ushbu loyiha haqida ma'lumot</label>
                          <textarea
                          id="about"
                            rows="4"
                            v-model="editDescription"
                            class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full font-medium font-sans p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bosqich haqida umumiy ma'lumot..."
                        ></textarea>
                    </div>
                </div>
                    <span class="w-full flex gap-2">
                        <button
                        @click="editProject()"
                            type="button"
                            class="text-white flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <ProgressSpinner style="width: 20px; height: 20px" :class="editLoadings ? 'block' : 'hidden'" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                        <span :class="editLoadings ? 'block' : 'hidden'">Loading...</span> <span :class="editLoadings ? 'hidden' : 'block'">Edit</span>
                        </button>
                        <button
                            type="button"
                            @click="Cencel"
                            class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                            Cencel
                        </button>
                    </span>
                </form>
            </div>
        </Dialog>
        <!-- End Edit Modal -->
    </section>
</template>
<script setup>
import { ref, reactive ,toRaw} from 'vue';
import router from '@/router';
import axios from 'axios';
// import TopNavMap from '../../../components/topNavMap.vue'
import loading from '@/components/loading.vue';
import Pagenetion from "../../../components/pagenetion.vue"

const loadingDel = ref(false);
const deletModal = ref(false);
const editModal = ref(false);
const editLoadings = ref(false);
const eId = ref(null);
const editId = ref(null);
const isloading = ref(false);
const menu = ref();
const selectedCity = ref();
const card_table = ref(true);
const rolsMenu = ref();
const data = ref({});
const editName=ref('');
const editColor=ref('');
const editLogo=ref('');
const editShortname=ref('');
const editBudget=ref('');
const editDate_create=ref('');
const editEnd_date=ref('');
const editCreated_at=ref('');
const editDescription=ref('');
const editFactual_start_date=ref('');
const editFactual_end_date=ref('');
const editUnit_value=ref('');
const project_id=ref('');
const doneTasks=ref();
const projectsId=ref([]);
console.log(projectsId.value);

const ViewPagenetion=ref(true);

const currentPage = ref('');
const totalPages = ref();

// function getPerojectsId(id){
//     for(let item of data.value){
        
//     }
// }

const modalDelet = (id) => {
    eId.value = id;
    deletModal.value = true;
};

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
  
            router.push(`/projects_list/${project_id.value}/general_information`);
        }
    },
    {
        label: 'Loyihaga biriktirilgan fayllar',
        icon: 'pi pi-file',
        command: () => {
            router.push(`/projects_list/${project_id.value}/files`);
        }
    },
    {
        label: 'Loyiha ijrochilari',
        icon: 'pi pi-users',
        command: () => {
            router.push(`/projects_list/${project_id.value}/performers`);
        }
    },
    {
        label: 'Loyiha moliyaviy ko’rsatkichlari',
        icon: 'pi pi-credit-card',
        command: () => {
            router.push(`/projects_list/${project_id.value}/financial`);
        }
    },
    // {
    //     label: 'Kanban Doska',
    //     icon: 'pi pi-sliders-v',
    //     command: () => {
    //         router.push('/kanban');
    //     }
    // }
]);

function modalEdit(item) {
    editModal.value = true;
    let data = JSON.parse(item);
    editId.value = data.id;
    editName.value = data.name;
   editDate_create.value= data.date_create;
    editCreated_at.value = data.created_at;
    editEnd_date.value = data.end_date;
    editBudget.value= data.budget;
    editLogo.value = data.logo;
    editShortname.value = data.prefix;
    editColor.value= data.color;
    editDescription.value = data.description;
    editFactual_start_date.value = data.factual_start_date;
    editFactual_end_date.value = data.factual_end_date;
    editUnit_value.value = data.unit_value;
}

function fetchData(page) {
    axios
        .get(`https://pm-api.essential.uz/api/project?page=${page}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                isloading.value = true;
                data.value = result.data.result.data;
                console.log(result.data.result.data);
                // for (let item of data.value) {
                //     projectsId.value.push(item.id);
                //     console.log(item.id); 
                //     fetchDoneTasks(item.id);
                // } 
                if(result.data.result.last_page > 1){
                    totalPages.value = result.data.result.last_page;
                }else if(result.data.result.last_page == 1){
                    ViewPagenetion.value = false;
                }
            }
        })
        .catch((err) => {
            console.error(err); // Xatoni chiqarish uchun
        });
}
fetchData();

const deletProject = () => {
    loadingDel.value = true;
    axios
        .delete(`https://pm-api.essential.uz/api/project/${eId.value}/delete`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                loadingDel.value = false;
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Bajarildi',
                    showConfirmButton: false,
                    timer: 1500
                });
                fetchData();
                deletModal.value = false;
            }
            console.log(result);
        });
};
const editProject = (id) => {
    editLoadings.value = true;
    console.log(id);
    const token = localStorage.getItem('token');
    const headers = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        Authorization: `Bearer ${token}`
    };

    axios
        .post(
            `https://pm-api.essential.uz/api/project/${editId.value}/update`,
            {
                name: editName.value,
                date_create: editDate_create.value,
                created_at: editCreated_at.value,
                end_date: editEnd_date.value,
                budget: editBudget.value,
                logo: editLogo.value,
                color: editColor.value,
                prefix:editShortname.value,
                description: editDescription.value,
                factual_start_date: editFactual_start_date.value,
                factual_end_date: editFactual_end_date.value,
                unit_value: editUnit_value.value
            },
            { headers }
        )
        .then((result) => {
            if (result.status === 200) {
                  editModal.value = false;
                 Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Taxrirlandi',
                    showConfirmButton: false,
                    timer: 1500
                });
                editLoadings.value = false;
                fetchData();
            }
            console.log(result, id);
        })
        .catch((error) => {
            editLoadings.value = false;
            console.error(error);
        });
};

const generalinformation = (id) => {
    router.push(`/projects_list/${id}/melistone`);
};
const toggle = (event) => {
    menu.value.toggle(event);
};

function getProjectiId (id){
    project_id.value = id;
    console.log(id);
     toggle(event);
}


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

const addProject = () => {
    router.push('/addProject');
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

function fetchDoneTasks (id){
    // console.log(id,"id");
    axios
        .get(`https://pm-api.essential.uz/api/tasks/filter?order_by=5&project_id=1`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            if (result.status === 200) {
                doneTasks.value=(result.data);
                console.log(doneTasks.value,"done");
            }
        })
        .catch((err) => {
            console.error(err);
        });
        return ;
}

fetchDoneTasks();
</script>
<style scoped></style>
