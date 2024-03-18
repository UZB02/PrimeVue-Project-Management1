<template>
    <section class="flex gap-2">
        <div class="left w-1/2">
            <div class="card p-2 flex flex-col gap-2">
                <div class="top flex items-center justify-end">
                    <div class="flex align-items-center justify-content-between">
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Haftalik topshiriqlar" class="w-1/2 md:w-14rem border" />
                    </div>
                </div>
                    <Accordion :activeIndex="0">
                        <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                              <section class="flex flex-col gap-2">
                                <div class="top flex gap-2">
                                    <div class="left flex items-center w-1/3">
                                    <Image :src="tab.img"
                                        alt="Image" preview class="
                                         w-full object-cover text-white rounded-3xl" />
                                </div>
                                <div class="right flex gap-2 w-[75%]">
                                    <p class="m-0">{{ tab.content }} Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Sint totam nobis dignissimos? Nulla quas maxime at ducimus pariatur rem, vel
                                        quaerat neque dolorem autem! Eveniet libero eaque possimus labore inventore.</p>
                                </div>
                                </div>
                                <ProgressBar :value="tab.value"></ProgressBar>
                              </section>
                        </AccordionTab>
                    </Accordion>        
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
                </div>
            </div>
        <div class="right w-1/2">
            <div class="card w-full">
        <Chart type="bar" :data="chartData"  :options="chartOptions" class="h-[30rem]"  />
    </div>
        </div>
    </section>
</template>
<script setup>
// import { ref } from 'vue';
import { ref, onMounted } from "vue";

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

const tabs = ref([
    { 
     title: 'Loyiha ijrochilari ish samarasini kuzatib borish qismi',
     content: 'Bu yerda topshiriq haqida qisqacha malumot kiritiladi', 
     img: `https://avatars.mds.yandex.net/i?id=2f75325425ed87090ad310da919257e67e4982f3-4961046-images-thumbs&n=13`,
     value:`33`
    },
    {
     title: 'Loyiha bosqichlari bilan ishlash',
     content: 'Content 2', 
     img: `https://avatars.mds.yandex.net/i?id=ea4183afac127d5142d083b2a4deee7565b4e93f-3096790-images-thumbs&n=13`,
     value:`43`
    },
    { title: 'Loyiha sprintlari bilan ishlash', content: 'Content 3', img: `https://avatars.mds.yandex.net/i?id=592ac39831c51ec7f2825114cbda4faf5d349e32-10814916-images-thumbs&n=13`, value:`68` },
    { title: 'Loyiha ijrochilari ish samarasini kuzatib borish qismi', content: 'Bu yerda topshiriq haqida qisqacha malumot kiritiladi', img: `https://avatars.mds.yandex.net/i?id=2f75325425ed87090ad310da919257e67e4982f3-4961046-images-thumbs&n=13`, value:`55` },
    { title: 'Topshiriq 1', content: 'Content 2', img: `https://avatars.mds.yandex.net/i?id=ea4183afac127d5142d083b2a4deee7565b4e93f-3096790-images-thumbs&n=13`, value:`45` },
    { title: 'Topshiriq 2', content: 'Content 3', img: `https://avatars.mds.yandex.net/i?id=592ac39831c51ec7f2825114cbda4faf5d349e32-10814916-images-thumbs&n=13`, value:`98` }
]);
const value =tabs.value;

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul','Avgust','Sentabr', 'Oktabr','Noyabr','Dekabr'],
        datasets: [
            {
                label: 'Jami Topshiriqlar soni',
                backgroundColor: documentStyle.getPropertyValue('--cyan-500'),
                borderColor: documentStyle.getPropertyValue('--cyan-500'),
                data: [65, 59, 80, 80, 56, 55, 40,70,65,80,100,95]
            },
            {
                label: 'Bajarilgan Topshiriqlar soni',
                backgroundColor: documentStyle.getPropertyValue('--gray-500'),
                borderColor: documentStyle.getPropertyValue('--gray-500'),
                data: [65, 50, 70, 50, 25, 45, 23,64,50,80,83,55]
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