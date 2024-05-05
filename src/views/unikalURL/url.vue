<template>
    <section>
        <div class="container flex flex-col gap-4">
            <div class="top w-full flex flex-col gap-2 h-[20vh] mb-6">
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
            <div class="bottom flex items-center justify-center gap-2">
                <div class="border p-3 h-[400px]: rounded-xl w-1/2">
                    <div class="flex justify-content-between align-items-center mb-2">
                        <h5>Fayllar bo'limi.</h5>
                    </div>
                    <div class="flex justify-content-between align-items-center mb-2">
                        <div class="left">
                            <span class=""
                                ><i class="pi pi-plus bg-blue-400 pl-2 pr-2 pb-1 pt-1 rounded-lg cursor-pointer text-white flex items-center justify-center gap-2"><h2 class="font-sans text-white font-medium text-lg">Add file</h2></i></span
                            >
                        </div>
                        <div class="right">
                            <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                                <input type="text" class="p-2 outline-none" placeholder="Search..." />
                                <i class="pi pi-search mr-1 cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                    <ScrollPanel style="width: 100%; height: 300px">
                        <li class="flex flex-column border-b-2 p-1 flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div class="cards w-full flex items-center justify-between">
                                <div class="w-[70%] flex items-center gap-3 text-white">
                                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" preview />
                                    <div class="">
                                        <span class="text-900 font-medium mr-2 mb-1 md:mb-0">rasmNomi.jpg</span>
                                        <div class="mt-1 text-600">Rasm haqida ma'lumot</div>
                                    </div>
                                </div>
                                <div class="mt-2 pr-5 md:mt-0 flex align-items-center gap-3 cursor-pointer">
                                    <i class="pi pi-file-edit" v-tooltip.top="'Taxrirlash'"></i>
                                    <i class="pi pi-trash" v-tooltip.top="`O'chirish`"></i>
                                    <i class="pi pi-download" v-tooltip.top="'Yuklab olish'"></i>
                                </div>
                            </div>
                        </li>
                        <li class="flex flex-column border-b-2 p-1 flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div class="cards w-full flex items-center justify-between">
                                <div class="w-[70%] flex items-center gap-3 text-white">
                                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" preview />
                                    <div class="">
                                        <span class="text-900 font-medium mr-2 mb-1 md:mb-0">rasmNomi.jpg</span>
                                        <div class="mt-1 text-600">Rasm haqida ma'lumot</div>
                                    </div>
                                </div>
                                <div class="mt-2 pr-5 md:mt-0 flex align-items-center gap-3 cursor-pointer">
                                    <i class="pi pi-file-edit" v-tooltip.top="'Taxrirlash'"></i>
                                    <i class="pi pi-trash" v-tooltip.top="`O'chirish`"></i>
                                    <i class="pi pi-download" v-tooltip.top="'Yuklab olish'"></i>
                                </div>
                            </div>
                        </li>
                        <li class="flex flex-column border-b-2 p-1 flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div class="cards w-full flex items-center justify-between">
                                <div class="w-[70%] flex items-center gap-3 text-white">
                                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" preview />
                                    <div class="">
                                        <span class="text-900 font-medium mr-2 mb-1 md:mb-0">rasmNomi.jpg</span>
                                        <div class="mt-1 text-600">Rasm haqida ma'lumot</div>
                                    </div>
                                </div>
                                <div class="mt-2 pr-5 md:mt-0 flex align-items-center gap-3 cursor-pointer">
                                    <i class="pi pi-file-edit" v-tooltip.top="'Taxrirlash'"></i>
                                    <i class="pi pi-trash" v-tooltip.top="`O'chirish`"></i>
                                    <i class="pi pi-download" v-tooltip.top="'Yuklab olish'"></i>
                                </div>
                            </div>
                        </li>
                        <li class="flex flex-column border-b-2 p-1 flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div class="cards w-full flex items-center justify-between">
                                <div class="w-[70%] flex items-center gap-3 text-white">
                                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" preview />
                                    <div class="">
                                        <span class="text-900 font-medium mr-2 mb-1 md:mb-0">rasmNomi.jpg</span>
                                        <div class="mt-1 text-600">Rasm haqida ma'lumot</div>
                                    </div>
                                </div>
                                <div class="mt-2 pr-5 md:mt-0 flex align-items-center gap-3 cursor-pointer">
                                    <i class="pi pi-file-edit" v-tooltip.top="'Taxrirlash'"></i>
                                    <i class="pi pi-trash" v-tooltip.top="`O'chirish`"></i>
                                    <i class="pi pi-download" v-tooltip.top="'Yuklab olish'"></i>
                                </div>
                            </div>
                        </li>
                        <li class="flex flex-column border-b-2 p-1 flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div class="cards w-full flex items-center justify-between">
                                <div class="w-[70%] flex items-center gap-3 text-white">
                                    <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="100" preview />
                                    <div class="">
                                        <span class="text-900 font-medium mr-2 mb-1 md:mb-0">TZ.doc</span>
                                        <div class="mt-1 text-600">Rasm haqida ma'lumot</div>
                                    </div>
                                </div>
                                <div class="mt-2 pr-5 md:mt-0 flex align-items-center gap-3 cursor-pointer">
                                    <i class="pi pi-file-edit" v-tooltip.top="'Taxrirlash'"></i>
                                    <i class="pi pi-trash" v-tooltip.top="`O'chirish`"></i>
                                    <i class="pi pi-download" v-tooltip.top="'Yuklab olish'"></i>
                                </div>
                            </div>
                        </li>
                    </ScrollPanel>
                </div>
                <div class="border p-3 rounded-xl w-1/2 h-[400px]">
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

const op = ref();

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
// function deletPerformer() {
//     axios
//         .get(`https://pm-api.essential.uz/api/task-performers/${performerId.value}/delete`, {
//             headers: {
//                 Authorization: 'Bearer ' + localStorage.getItem('token')
//             }
//         })
//         .then((res) => {
            
//             console.log(res.data);

//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }



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
