<template>
    <!-- <header class="mb-2">
        <Map></Map>
    </header> -->
    <section class="flex flex-col gap-2">
        <div class="left flex gap-2 justify-between">
            <div class="card p-2 w-1/2 flex flex-col gap-3">
                <div class="top flex items-center justify-between gap-2">
                    <button @click="addProject"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded flex items-center justify-center gap-1"><i
                    class="pi pi-plus"></i><h3 class="text-white">ADD
                task</h3></button>
                    <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                        <input type="text" class="p-[10px] outline-none" placeholder="Search...">
                        <i class="pi pi-search mr-2 cursor-pointer"></i>
                    </div>
                    <div class="flex align-items-center justify-content-between">
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Haftalik topshiriqlar" class="w-1/2 md:w-14rem border" />
                    </div>
                </div>
                <Accordion :activeIndex="0">
                    <AccordionTab v-for="task in tasks" :key="task.title" :header="task.title">
                        <section class="flex flex-col gap-2">
                            <div class="top flex gap-2">
                                <div class="left flex items-center w-1/3">
                                    <Image :src="task.img" alt="Image" preview class="
                                         w-full object-cover text-white rounded-3xl" />
                                </div>
                                <div class="right flex gap-2 w-[75%]">
                                    <ScrollPanel style="width: 100%; height: 150px">
                                        <p>
                                            {{ task.content }}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </ScrollPanel>
                                </div>
                            </div>
                            <ProgressBar :value="task.value"></ProgressBar>
                        </section>
                    </AccordionTab>
                </Accordion>
                <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
            </div>
            <div class="card h-[48rem] p-2 w-1/2">
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

const tasks = ref([
    {
        title: 'Loyiha ijrochilari ish samarasini kuzatib borish qismi',
        content: 'Bu yerda topshiriq haqida qisqacha malumot kiritiladi',
        img: `https://avatars.mds.yandex.net/i?id=2f75325425ed87090ad310da919257e67e4982f3-4961046-images-thumbs&n=13`,
        value: `33`
    },
    {
        title: 'Loyiha bosqichlari bilan ishlash',
        content: 'Content 2',
        img: `https://avatars.mds.yandex.net/i?id=ea4183afac127d5142d083b2a4deee7565b4e93f-3096790-images-thumbs&n=13`,
        value: `43`
    },
    { title: 'Loyiha sprintlari bilan ishlash', content: 'Content 3', img: `https://avatars.mds.yandex.net/i?id=592ac39831c51ec7f2825114cbda4faf5d349e32-10814916-images-thumbs&n=13`, value: `68` },
    { title: 'Loyiha ijrochilari ish samarasini kuzatib borish qismi', content: 'Bu yerda topshiriq haqida qisqacha malumot kiritiladi', img: `https://avatars.mds.yandex.net/i?id=2f75325425ed87090ad310da919257e67e4982f3-4961046-images-thumbs&n=13`, value: `55` },
    { title: 'Topshiriq 1', content: 'Content 2', img: `https://avatars.mds.yandex.net/i?id=ea4183afac127d5142d083b2a4deee7565b4e93f-3096790-images-thumbs&n=13`, value: `45` },
    { title: 'Topshiriq 2', content: 'Content 3', img: `https://avatars.mds.yandex.net/i?id=592ac39831c51ec7f2825114cbda4faf5d349e32-10814916-images-thumbs&n=13`, value: `98` }
]);

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