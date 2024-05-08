
<template>
    <header class="w-full flex py-2">
     <h1 class="ml-3 font-bold text-3xl">{{ proects.name }}</h1>
    </header>
    <div class="flex flex-col">
        <div class="top flex items-center justify-between gap-2 ">
            <div v-for="item in data"
                class="h-52 cursor-pointer transition hover:scale-105 shadow-md border flex gap-5 flex-col p-4 rounded-xl"
                data-aos="flip-right">
                <div class="top flex w-full items-center justify-between border-b-2 pb-1">
                    <div class="left flex items-center justify-center gap-4">
                        <i :class="item.svg" style="fill: gray;"></i>
                        <h2 class="text-gray-400 text-lg">{{ item.name }}</h2>
                    </div>
                    <div class="right">
                        <h1 class="text-xl font-bold">{{ item.number }}</h1>
                    </div>
                </div>
                <div class="bottom  flex items-center justify-between">
                    <i v-html="item.statstik_svg" style="fill: gray;"></i>
                    <div class="text flex flex-col justify-end items-end">
                        <h2 class="text-gray-400"><span class="text-green-500 font-bold">10+</span> more</h2>
                        <h1 class="text-gray-400">from last week</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom flex flex-col lg:flex-col">
            <div class="top flex max-md:flex-col">
                <div class="flex flex-col gap-2 col-12 xl:col-6">
                    <div class="border p-3 rounded-xl flex flex-col gap-4">
                        <div class="top flex align-items-center justify-content-between">
                            <h5>Joriy haftadagi topshiriqlar ro’yxati paneli</h5>
                            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="This Week"
                                class="w-1/2 md:w-14rem border" />
                        </div>
                        <div class="bottom">
                            <table class="w-full">
                                <tbody class="flex flex-col gap-4">
                                    <tr v-for="item in table" class="flex items-center justify-between">
                                        <td class="w-1/4 flex flex-col  justify-center gap-1">
                                            <h5 class="font-bold">{{ item.name }}</h5>
                                            <Tag :severity="item.severity" :value="item.icon_value"></Tag>
                                        </td>
                                        <td class="w-1/2 flex items-center justify-between gap-3">
                                            <span @click="visible = true"
                                                class="w-1/6 flex items-center justify-center gap-1">
                                                <i class="pi pi-book"></i>
                                                <span class="font-bold">{{ item.coment }}</span>
                                            </span>
                                            <span class="w-1/6 flex items-center justify-center gap-1">
                                                <i class="pi pi-paperclip"></i>
                                                <span class="font-bold">{{ item.number }}</span>
                                            </span>
                                            <span class="w-1/2 flex items-center gap-1">
                                                <i class="pi pi-calendar "></i>
                                                <span class="font-bold">{{ item.time }}</span>
                                            </span>
                                        </td>
                                        <td>
                                            <Tag :severity="item.severity" :value="item.icon_value"></Tag>
                                        </td>
                                    </tr>
                                    <tr>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- <Dialog v-model:visible="visible" maximizable modal header="Header" :style="{ width: '50rem' }"
                                :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                                <ul v-for="item in comment" class="list-none p-0 m-0">
                                    <li
                                        class="flex cursor-pointer border-b-2 p-2 rounded-lg flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                        <div class=" flex">
                                            <img :src="item.img" width="50" />
                                        </div>
                                        <div class="w-1/2 flex items-center justify-center">
                                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">{{ item.message }}</span>
                                        </div>
                                        <div class="mt-2 md:mt-0 flex align-items-center">
                                            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                                style="height: 8px">
                                                <div class="bg-orange-500 h-full" style="width: 50%"></div>
                                            </div>
                                            <span class="text-orange-500 ml-3 font-medium">%50</span>
                                        </div>
                                    </li>
                                </ul>
                            </Dialog> -->
                        </div>
                    </div>
                    <div class="border p-3 rounded-xl">
                        <div class="flex justify-content-between align-items-center mb-5">
                            <h5>Ijrochilar reyting tizimi ma’lumoti paneli. </h5>
                        </div>
                        <ul class="list-none flex flex-col p-0 m-0">
                            <li v-for="item in comunitiCard"
                                class="flex flex-column border-b p-1 flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div class="cards w-full flex items-center justify-between">
                                    <div class="w-[70%] flex items-center gap-3">
                                        <img :src="item.avatar" alt="" class="w-[40px] h-[40px] rounded-full object-cover">
                                        <div class="">
                                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">{{ item.fio }}</span>
                                            <div class="mt-1 text-600">{{ item.position }}</div>
                                        </div>
                                    </div>
                                      <div class=" flex items-center justify-center w-1/6 gap-2">
                                <i class="pi pi-star"></i>
                            <div class="mt-2 pr-5 w-1/12 md:mt-0 flex items-center justify-center">
                                <span class="w-[85%] text-orange-500 ml-3 font-medium">{{ item.ball }}</span>
                            </div>
                            </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col gap-2 col-12 xl:col-6">
                    <div class=" border p-2 rounded-xl">
                        <div class="top flex items-center justify-between">
                            <h5>Sales Overview</h5>
                            <div class="link flex items-center justify-center gap-3">
                                <button class="font-bold">Deyly</button>
                                <button class="font-bold">Weekly</button>
                                <button style="border-bottom: 3px solid rgb(1, 181, 1);" class="font-bold text-green-500">Montly</button>
                            </div>
                        </div>
                        <Chart type="line" :data="lineData" :options="lineOptions" />
                    </div>
                    <div class=" border p-3 rounded-xl">
                        <div class="flex align-items-center justify-content-between mb-4">
                            <h5>Bugungi topshiriqlar va bildirishnomalar paneli</h5>
                        </div>
                        <ul v-for="item in notifications" class="p-0 mx-0 mt-0 mb-4 list-none">
                            <li
                                class="flex items-center justify-between align-items-center py-2 border-bottom-1 surface-border">
                                <div class="flex items-center justify-center">
                                    <div
                                        class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                        <i :class="item.svg" class="text-xl text-blue-500"></i>
                                    </div>
                                    <span class="text-900 line-height-3 flex flex-col gap-2">
                                        <h1 class="font-bold">{{ item.name }}</h1>
                                        <h4>{{ item.status }}</h4>
                                    </span>
                                </div>
                                <div class="flex flex-col gap-1 items-center justify-center">
                                    <span class="pr-3 pl-3 font-semibold bg-green-400 text-white rounded-2xl">{{ item.term
                                    }}  {{ item.time }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section class="flex flex-col gap-3">
                <div class="top">
                    <div class="p-1 flex flex-col gap-4">
                        <div class="flex align-items-center justify-content-between">
                            <h5>Loyiha jamoasi a’zolari ma’lumoti paneli</h5>
                        </div>
                        <div class="bottom flex items-center gap-3 flex-wrap">
                            <div v-for="item in comunitiCard"
                                class="card1 transition hover:scale-105 flex items-center justify-center flex-col gap-2 shadow-md rounded-xl p-3 w-[19%]">
                                <img :src="item.avatar" class="w-32 card-img  h-32 rounded-[50%]" alt="">
                                <h1 class="font-bold">{{ item.fio }}</h1>
                                <h4>{{ item.rols }}</h4>
                                <h5 class="text-gray-500 font-italic">{{ item.tell }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                       <div class=" border p-3 rounded-xl">
                            <div class="flex align-items-center justify-content-between mb-4">
                                <h5>Bildirishnomalar paneli</h5>
                            </div>
                            <ul v-for="item in notifications" class="p-0 mx-0 mt-0 mb-4 list-none">
                                <li
                                    class="flex items-center cursor-pointer justify-between align-items-center py-2 border-bottom-1 surface-border">
                                    <div class="flex items-center justify-center">
                                        <div
                                            class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                            <i :class="item.svg" class="text-xl text-blue-500"></i>
                                        </div>
                                        <span class="text-900 line-height-3 flex flex-col gap-2">
                                            <h1 class="font-bold">{{ item.name }}</h1>
                                            <h4>{{ item.status }}</h4>
                                        </span>
                                    </div>

                                  <div class="flex flex-col gap-2 items-center justify-center">
                                      <span class="pr-3 pl-3 font-semibold bg-green-400 text-white rounded-2xl">{{ item.term
                                      }} {{ item.time }}</span>
                                         <span class="pr-3 pl-3 font-semibold bg-green-600 text-white rounded-2xl"></span>
                                  </div>
                                  <div class="flex flex-col gap-2 items-center justify-center">
                                      <span class="pr-3 pl-3 font-semibold bg-green-400 text-white rounded-2xl">{{ item.term
                                      }} {{ item.time }}</span>
                                         <span class="pr-3 pl-3 font-semibold bg-green-600 text-white rounded-2xl"></span>
                                  </div>
                                </li>
                            </ul>
                        </div>
                </div>
            </section>
    </div>
</div>
</template>
<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import ProductService from '@/service/ProductService';
import { useLayout } from '@/layout/composables/layout';
import axios from 'axios';
import router from '../../../router';
const selectedCity = ref();
const project_id=router.currentRoute.value.params.id
console.log(project_id);
const done_tasks = ref();
const new_tasks = ref();
const testing=ref();
const bugs=ref();
const inProgress=ref();
const cities = ref([
    { name: 'This Week', code: 'TW' },
    { name: 'To Day', code: 'TD' },
    { name: 'Last Week', code: 'LW' },
    { name: 'Last Day', code: 'LD' },
    { name: 'This Month', code: 'TM' }
]);
const data = ref([
    {
        name: "New Tasks",
        number: new_tasks,
        svg: 'pi pi-star text-blue-500 text-xl',
        statstik_svg: `<svg width="133" height="68" viewBox="0 0 133 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2_65)">
<path d="M9 45.7573C9.43233 45.9655 10.2525 46.3237 15.2624 41.7925C21.5248 36.1285 27.2178 32.1638 33.4802 37.2613C39.7426 42.3589 43.7277 54.8196 51.698 51.4213C59.6683 48.0229 62.5149 22.535 72.1931 19.1367C81.8713 15.7383 88.1337 35.5622 94.9653 24.8006C101.797 14.0391 109.198 0.445683 114.322 2.14487C118.421 3.50422 122.482 9.13046 124 11.7737" stroke="#1EA7FF" stroke-width="2"/>
</g>
<defs>
<filter id="filter0_d_2_65" x="0.565918" y="-0.00146484" width="132.301" height="68.0015" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.654902 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_65"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_65" result="shape"/>
</filter>
</defs>
</svg>
`,
    },
    {
        name: "Bugs",
        number: bugs,
        svg: 'pi pi-star text-blue-500 text-xl',
        statstik_svg: `<svg width="133" height="68" viewBox="0 0 133 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2_65)">
<path d="M9 45.7573C9.43233 45.9655 10.2525 46.3237 15.2624 41.7925C21.5248 36.1285 27.2178 32.1638 33.4802 37.2613C39.7426 42.3589 43.7277 54.8196 51.698 51.4213C59.6683 48.0229 62.5149 22.535 72.1931 19.1367C81.8713 15.7383 88.1337 35.5622 94.9653 24.8006C101.797 14.0391 109.198 0.445683 114.322 2.14487C118.421 3.50422 122.482 9.13046 124 11.7737" stroke="#1EA7FF" stroke-width="2"/>
</g>
<defs>
<filter id="filter0_d_2_65" x="0.565918" y="-0.00146484" width="132.301" height="68.0015" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.654902 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_65"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_65" result="shape"/>
</filter>
</defs>
</svg>
`,
    },
    {
        name: "In Progress",
        number: inProgress,
        svg: 'pi pi-star text-blue-500 text-xl',
        statstik_svg: `<svg width="133" height="68" viewBox="0 0 133 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2_65)">
<path d="M9 45.7573C9.43233 45.9655 10.2525 46.3237 15.2624 41.7925C21.5248 36.1285 27.2178 32.1638 33.4802 37.2613C39.7426 42.3589 43.7277 54.8196 51.698 51.4213C59.6683 48.0229 62.5149 22.535 72.1931 19.1367C81.8713 15.7383 88.1337 35.5622 94.9653 24.8006C101.797 14.0391 109.198 0.445683 114.322 2.14487C118.421 3.50422 122.482 9.13046 124 11.7737" stroke="#1EA7FF" stroke-width="2"/>
</g>
<defs>
<filter id="filter0_d_2_65" x="0.565918" y="-0.00146484" width="132.301" height="68.0015" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.654902 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_65"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_65" result="shape"/>
</filter>
</defs>
</svg>
`,
    },
    {
        name: "Testing",
        number: testing,
        svg: 'pi pi-star text-blue-500 text-xl',
        statstik_svg: `<svg width="133" height="68" viewBox="0 0 133 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2_65)">
<path d="M9 45.7573C9.43233 45.9655 10.2525 46.3237 15.2624 41.7925C21.5248 36.1285 27.2178 32.1638 33.4802 37.2613C39.7426 42.3589 43.7277 54.8196 51.698 51.4213C59.6683 48.0229 62.5149 22.535 72.1931 19.1367C81.8713 15.7383 88.1337 35.5622 94.9653 24.8006C101.797 14.0391 109.198 0.445683 114.322 2.14487C118.421 3.50422 122.482 9.13046 124 11.7737" stroke="#1EA7FF" stroke-width="2"/>
</g>
<defs>
<filter id="filter0_d_2_65" x="0.565918" y="-0.00146484" width="132.301" height="68.0015" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.654902 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_65"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_65" result="shape"/>
</filter>
</defs>
</svg>
`,
    },
    {
        name: "Done",
        number: done_tasks,
        svg: 'pi pi-star text-blue-500 text-xl',
        statstik_svg: `<svg width="133" height="68" viewBox="0 0 133 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2_65)">
<path d="M9 45.7573C9.43233 45.9655 10.2525 46.3237 15.2624 41.7925C21.5248 36.1285 27.2178 32.1638 33.4802 37.2613C39.7426 42.3589 43.7277 54.8196 51.698 51.4213C59.6683 48.0229 62.5149 22.535 72.1931 19.1367C81.8713 15.7383 88.1337 35.5622 94.9653 24.8006C101.797 14.0391 109.198 0.445683 114.322 2.14487C118.421 3.50422 122.482 9.13046 124 11.7737" stroke="#1EA7FF" stroke-width="2"/>
</g>
<defs>
<filter id="filter0_d_2_65" x="0.565918" y="-0.00146484" width="132.301" height="68.0015" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.654902 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_65"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_65" result="shape"/>
</filter>
</defs>
</svg>
`,
    },

])
const proects=ref({})


const comunitiCard = ref([
])
const notifications = ref([
    {
        name: `Project Name`,
        status: `Bugun kechgacha bajarilishi zarur`,
        svg: `pi pi-bookmark`,
        term: `12.01.2024`,
        time:`15:30`
    },
    {
        name: `Project Name`,
        status: `Ertaga kechgacha bajarilishi zarur`,
        svg: `pi pi-bookmark`,
        term: `28.01.2024`,
        time: `12:00`
    },
    {
        name: `Project Name`,
        status: `12.03.2024 gacha bajarilishi zarur`,
        svg: `pi pi-bookmark`,
        term: `03.02.2024`,
        time: `13:06`
    },
])

const table = ref([
    {
        name: "First Order",
        severity: "danger",
        coment: 10,
        number: 3,
        icon_value: "Danger",
        time: "Today"
    },
    {
        name: "Second Order",
        severity: "success",
        coment: 4,
        number: 1,
        icon_value: "Success",
        time: "Last Week"
    },
    {
        name: "Third Order",
        severity: "warning",
        coment: 8,
        number: 2,
        icon_value: "Warning",
        time: "Oct 2, 2023"
    },
])

const visible = ref(false);

const { isDarkTheme } = useLayout();

const products = ref(null);
const lineData = reactive({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
});

function fetchData(page) {
    axios
        .get(`https://pm-api.essential.uz/api/project?page=${page}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((result) => {
            proects.value=result.data.result.data[0]
        })
        .catch((err) => {
            console.error(err); 
        });
}
fetchData();

function fetchPerformers() {
    axios
    .get('https://pm-api.essential.uz/api/performers?page=1', {
        params: {
            project_id: project_id
        },
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res) => {
        comunitiCard.value = res.data;
        comunitiCard.value.sort((a,b)=> a.ball + b.ball);
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    }); 
}

fetchPerformers();
function fetchTasks() {
    axios
    .get(`https://pm-api.essential.uz/api/tasks/filter?project_id=${project_id}`, {
        params: {
            project_id: project_id
        },
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then((res) => {
        done_tasks.value = res.data.Done
        bugs.value = res.data.Bugs
        testing.value=res.data.Testing
        new_tasks.value = res.data.New_Tasks
        inProgress.value = res.data.In_progress
        console.log(done_tasks.value);
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    }); 
}

fetchTasks();

const lineOptions = ref(null);
const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (products.value = data));
});

const applyLightTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
};

const applyDarkTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            }
        }
    };
};

watch(
    isDarkTheme,
    (val) => {
        if (val) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    },
    { immediate: true }
);
</script>