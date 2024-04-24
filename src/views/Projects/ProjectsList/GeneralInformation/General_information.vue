<template>
    <!-- <h1 class="text-center">
        ID <span class="font-bold text-2xl text-red-500">{{ project_id }} </span> ga tegishli Proekt haqida Umumiy Ma'lumotlar
    </h1> -->
    <section class="flex flex-col gap-3">
        <div class="info flex flex-col gap-3">
            <div class="top flex items-center justify-between">
                <div class="text">
                    <h1 class="font-bold text-5xl">{{ data.name }}</h1>
                    <h2 class="text-5xl font-medium font-sans text-gray-400">{{ data.prefix }}</h2>
                </div>
                <div class="logo">
                    <img :src="logoUrl" alt="Logo" height="20" class="mr-2" />
                </div>
            </div>
            <div class="card">
                <TabView class="tabview-custom">
                    <TabPanel>
                        <template #header>
                            <div class="flex align-items-center gap-2">
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                                <span class="font-bold white-space-nowrap">Amy Elsner</span>
                            </div>
                        </template>
                        <p class="m-0">
                           {{ data.description }}
                        </p>
                    </TabPanel>
                </TabView>
                <!-- <span class="flex items-center justify-end">
                    <span class="flex items-center justify-center gap-2">
                        <i class="pi pi-file-edit text-xl text-gray-500 cursor-pointer"></i>
                        <i class="pi pi-copy text-xl text-gray-500 cursor-pointer"></i>
                    </span>
                </span> -->
            </div>
        </div>
        <div class="flex items-center justify-center">
            <div class="flex items-center justify-between card w-[30%] mt-5">
                <span class="flex items-center justify-center gap-2 flex-col w-1/2">
                    <h2 class="font-bold">USD</h2>
                    <h4 class="font-medium">5000$</h4>
                </span>
                <span class="flex items-center justify-center gap-2 flex-col w-1/2">
                    <h2 class="font-bold">USD</h2>
                    <h4 class="font-medium">{{ data.unit_value }} so'm</h4>
                </span>
            </div>
            <div class="card w-full flex items-center justify-between">
                <div class="time w-full flex items-center justify-between gap-4">
                    <span class="flex flex-col gap-2">
                        <h1 class="font-bold text-lg">Yaratilgan vaqt</h1>
                        <h3 class="font-medium text-base text-center">{{ created_at }}</h3>
                    </span>
                    <span class="flex flex-col gap-2">
                        <h1 class="font-bold text-lg">Belgilangan davr</h1>
                        <h3 class="font-medium text-base text-center">{{ end_date }}</h3>
                    </span>

                    <span class="w-1/4 flex items-center justify-center gap-3">
                        <span class="bg-gray-200 flex items-center rounded-xl w-full">
                            <div :style="`width:${Math.round((doneTasks * 100) / allTasks)}%`" :class="`score rounded-xl bg-green-500 h-2`"></div>
                        </span>
                        <span class="text-sm">{{ allTasks ? Math.round((doneTasks * 100) / allTasks) : 0 }}%</span>
                    </span>
                    <span class="flex items-center justify-center gap-2">
                        <i class="pi pi-file flex items-center justify-center gap-1"><h2 class="font-sans font-medium text-sm text-gray-500">{{ allTasks }}</h2></i>
                        <i class="pi pi-verified flex items-center justify-center gap-1"><h2 class="font-sans font-medium text-sm text-gray-500">{{ doneTasks }}</h2></i>
                    </span>
                    <!-- <span class="flex flex-col gap-2">
                        <h1 class="font-bold text-lg">Topshirilgan davri</h1>
                        <h3 class="font-medium text-base text-center">01.03.2024 10:00</h3>
                    </span> -->
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import router from '@/router';
import axios from 'axios';

const project_id = router.currentRoute.value.params.id;
console.log(project_id);

const data = ref({});
const created_at = ref();
const end_date = ref();
const doneTasks = ref({});
const allTasks = ref({});
const discriptions = ref({});

function fetchData() {
    axios
        .get(`https://pm-api.essential.uz/api/project/show/${project_id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            data.value = result.data[0];
            created_at.value = result.data[0].created_at.slice(0, 10);
            end_date.value = result.data[0].end_date.slice(0, 10);
            allTasks.value = result.data[0].tasks.length;
            // discriptions.value = result.data[0].description;
            // console.log(created_at.value);
            console.log(data.value);
            // console.log(obj);
            // console.log(result.data.find(item => item.id === project_id.value));
            // console.log(data.find(item => item.id === project_id.value));
            // data.value = result.data.result.data;
        })
        .catch((err) => {
            console.error(err);
        });
}

fetchData();

function fetchDoneTasks() {
    axios
        .get(`https://pm-api.essential.uz/api/tasks/filter?order_by=5&project_id=${project_id}`, {
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

const { layoutConfig } = useLayout();

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
</script>
<style scoped>
.card1 {
    transition: all 0.3s linear;
}
.card1:hover {
    border-left: 3px solid rgb(2, 249, 122);
    border-right: 3px solid rgb(2, 249, 122);
}
</style>
