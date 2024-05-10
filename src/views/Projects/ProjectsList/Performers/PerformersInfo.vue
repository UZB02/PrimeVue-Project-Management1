<template>
    <header class="mb-2 flex items-center ">
        <img :src="user.avatar" class="w-[50px] h-[50px] rounded-full object-cover" alt="">
       <span>
         <h1 class="ml-3 font-bold text-3xl">
            {{ user.fio }}
        </h1>
        <h3 class="ml-3 font-medium text-gray-400 text-xl">{{ perFoRmer.name }}</h3>
       </span>
    </header>
    <section class="flex flex-col gap-2">
        <div class="left flex gap-2 max-[780px]:flex-col justify-between">
            <div class="card p-2 w-1/2 max-[780px]:w-full flex flex-col gap-3">
                <div class="top flex items-center justify-between gap-2">
                    <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                        <input type="text" class="p-[10px] outline-none" placeholder="Search...">
                        <i class="pi pi-search mr-2 cursor-pointer"></i>
                    </div>
                    <div class="flex align-items-center justify-content-between">
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Haftalik topshiriqlar" class="md:w-14rem border" />
                    </div>
                </div>
                <div>
                    <span class="flex w-full justify-stretch">
                        <span class="w-1/2 font-bold">
                            <i class="pi pi-bookmark-fill text-blue-600"></i>
                            {{ tasks.length }}
                        </span>
                        <span class="w-1/2 flex items-center gap-1 font-bold justify-end">
                            <i class="pi pi-star-fill text-orange-400"></i>
                            {{ allBall }}
                        </span>
                        </span>
                </div>
                <Accordion :activeIndex="0">
                    <AccordionTab v-for="item in tasks" :key="item.task.title" :header="item.task.title">
                        <section class="flex flex-col gap-2">
                            <div class="top flex flex-col gap-2">
                                <div class="right flex gap-2 w-[100%]">
                                    <ScrollPanel style="width: 100%; height: auto; padding: 10px 0;">
                                        <p>
                                            {{ item.task.description }}
                                        </p>
                                    </ScrollPanel>
                                </div>
                                <div class="time flex justify-around gap-2 w-[100%]">
                                    <div class="flex flex-col gap-2  w-[30%]">
                                        <label>Topshiriq yaratilgan vaqt</label>
                                    <span class="text-gray-400 flex items-center justify-around">
                                        <i class="pi pi-clock"></i>
                                        {{ item.created_date }}
                                    </span>
                                    </div>
                                    <div class="flex flex-col gap-2  w-[30%]">
                                        <label>Topshiriq tugatilgan vaqt</label>
                                    <span class="text-gray-400 flex items-center justify-around">
                                        <i class="pi pi-clock"></i>
                                        {{ item.created_date }}
                                    </span>
                                    </div>
                                    <div class="flex flex-col gap-2 items-end w-[30%]">
                                        <label>Berilgan ball</label>
                                    <span class="text-gray-400">
                                        <i class="pi pi-star text-orange-400"></i>
                                        {{ item.ball }}
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </AccordionTab>
                </Accordion>
                <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
            </div>
            <div class="card h-[48rem] p-2 w-1/2 max-[780px]:w-full">
                <span class="flex items-center justify-end">
                    <Dropdown v-model="selectedTime" :options="times" optionLabel="name"
                            placeholder="2024-yil" class=" font-bold md:w-14rem border" />
                </span>
                <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
            </div>
        </div>
        <div class="right flex gap-2 w-full">
            <span class="flex justify-center">
                <Davomat></Davomat>
            </span>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Map from "../../../../components/map.vue"
import Davomat from "../../../../components/gantChart.vue"
import axios from "axios";
import router from "../../../../router";

const project_id=ref(router.currentRoute.value.params.id)
const performer_id=ref(router.currentRoute.value.params.performers_id)
console.log(project_id.value);
const perFoRmer=ref({})
const user=ref({})
const allBall=ref(0) 
onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});
const chartData = ref();
const chartOptions = ref();

const selectedCity = ref();
const cities = ref([
    { name: 'Haftalik topshiriqlar', code: 'H', },
    { name: 'Oylik topshiriqlar', code: 'O' },
    { name: 'Choraklik topshiriqlar', code: 'Ch' },
    { name: 'Yarim yillik topshiriqlar', code: 'Ya' },
    { name: 'Yillik topshiriqlar', code: 'Y' },
]);
const selectedTime = ref();
const times = ref([
    { name: '2021-yil', code: '2021', },
    { name: '2022-yil', code: '2022', },
    { name: '2023-yil', code: '2023', },
    { name: '2024-yil', code: '2024', },
]);

const tasks = ref({});

function fetchPerFormer() {
    axios
    .get(`https://pm-api.essential.uz/api/performers/show/${performer_id.value}`, {
        params: {
            project_id: project_id.value
        },
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res) => {
        perFoRmer.value=res.data.user_role;
        tasks.value=res.data.ball;
        allBall.value=res.data.balls;
        user.value=res.data.user;
        // comunitiCard.value.sort((a,b)=> a.ball + b.ball);
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    }); 
}

fetchPerFormer();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
        datasets: [
            {
                label: 'Jami Topshiriqlar soni',
                backgroundColor: documentStyle.getPropertyValue('--cyan-500'),
                borderColor: documentStyle.getPropertyValue('--cyan-500'),
                data: [65, 59, 80, 80, 56, 55, 40, 70, 65, 80, 100, 95]
            },
            {
                label: 'Bajarilgan Topshiriqlar soni',
                backgroundColor: documentStyle.getPropertyValue('--gray-500'),
                borderColor: documentStyle.getPropertyValue('--gray-500'),
                data: [65, 50, 70, 50, 25, 45, 23, 64, 50, 80, 83, 55]
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
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
}
</script>
<style scoped></style>