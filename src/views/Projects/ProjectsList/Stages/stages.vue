<template>
    <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addProject" class="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <i class="pi pi-plus"></i>
                Add Stage</button>
            <!-- <h2 class="font-semibold">Loyihaning umumiy ma’lumotlarini ko’rish</h2> -->
            <span class="flex items-center justify-center gap-3 p-input-icon-right">
                <button type="button" @click="rolsToggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                    <!-- <Menu ref="menu" id="overlay_menu" :model="profil" :popup="true"  />
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" /> -->
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
    <section>
        <div class="container flex flex-wrap items-center justify-center gap-2">
            <div class="container flex flex-wrap justify-center  gap-2">
                <div :class="card_table ? 'card shadow-md p-3 rounded-lg w-[32%] h-[300px] max-[1100px]:w-[45%] max-[1100px]:h-[300px] max-[900px]:w-[43%] max-[900px]:h-[300px] max-[770px]:w-[100%] max-[750px]:h-[300px] flex flex-col gap-2' : 'hidden'"
                    v-for="(item,itemId) in list" :key="itemId">
                    <div class="actions flex items-center justify-between gap-2">
                       <h2 class="font-bold text-sm text-slate-400">{{ itemId + 1 }}</h2>
                      <div class="flex items-center justify-center gap-2">
                          <span>
                                <i v-tooltip.top="{ value: 'Taxrirlash', autoHide: false }" class="pi pi-pencil cursor-pointer text-slate-400"></i>
                            </span>
                            <span>
                                <i v-tooltip.top="{ value: 'Arxivlash', autoHide: false }" class="pi pi-folder-open cursor-pointer text-slate-400"></i>
                            </span>
                      </div>
                    </div>
                    <div class="image">
                        <img @click="generalinformation" class="cursor-pointer rounded-xl w-full h-40 object-cover" :src="item.img" alt="">
                    </div>
                    <div class="bottom">
                        <span class="flex flex-col gap-2">
                            <div class="flex items-center justify-between">
                                <h1 @click="generalinformation" class="w-[75%]  whitespace-nowrap overflow-hidden text-overflow-ellipsis cursor-pointer text-2xl font-bold">{{
                                    item.project_name }}</h1>
                                <i @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
                                    class="pi pi-ellipsis-h cursor-pointer"></i>
                            </div>

                            <div class="flex items-center justify-between gap-3">
                                <div class="flex items-center justify-center gap-3">
                                    <span class="flex items-center justify-center gap-1">
                                        <i class="pi pi-calendar"></i>
                                        <h2 class="flex flex-col justify-center max-[900px]:text-sm">{{ item.createTime }} <span class="text-sm text-gray-500 max-[900px]:text-xs">{{ item.endTime }}</span></h2>
                                    </span>
                                    <span class="flex items-center justify-center gap-1">
                                        <i class="pi pi-paperclip"></i>
                                        <h2>{{ item.file }}</h2>
                                    </span>
                                    <span class="flex items-center justify-center gap-1">
                                        <i class="pi pi-verified"></i>
                                        <h3>{{ item.completed_task }}/{{ item.all_task }}</h3>
                                    </span>
                                </div>
                                <div class="flex items-center justify-center">
                                    <span class="flex items-center justify-center gap-1">
                                       <Tag class="mr-2 w-16" :severity="item.severity" :value="item.icon_value"></Tag>
                                    </span>
                                    <AvatarGroup>
                                        <Avatar  v-tooltip.bottom="{ value: `${item.avatar_name}`, autoHide: false }"  :image="item.avatar" shape="circle">
                                        </Avatar>
                                    </AvatarGroup>
                                </div>
                            </div>
                            <div class="w-full flex items-center  justify-center gap-3">
                                <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                    <div :style="{ width: `${item.score}` }" class="score rounded-xl bg-green-500 h-2">
                                    </div>
                                </span>
                                <span class="text-sm">{{ item.score }}</span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div :class="card_table ? 'hidden' : 'list w-full max-[900px]:w-[100%]'">
                    <div class="card">
                        <div class="flex align-items-center justify-content-between mb-4">
                            <h5 class="text-4xl font-medium">6 Sprints</h5>
                            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="This Week"
                                class="w-1/2 md:w-14rem border" />
                        </div>
                        <ul v-for="(item, itemId) in list" :key="itemId" class="w-full p-0 mx-0 mt-0 mb-4 list-none">
                            <li
                                class="flex items-center justify-between align-items-center py-2 border-bottom-1 max-[900px]:w-[90%] surface-border">
                                <div class="w-[35%] flex items-center gap-2">
                                    <h1 class="font-bold text-gray-500">{{ itemId +1 }}.</h1>
                                    <div
                                        class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                        <i :class="item.svg" class="text-xl text-blue-500"></i>
                                    </div>

                                    <span @click="generalinformation"
                                        class="w-[70%] cursor-pointer text-900 line-height-3 flex flex-col gap-2">
                                        <h1 class="font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.project_name }}</h1>
                                        <h4 class="text-slate-400">{{ item.status }}</h4>
                                    </span>
                                </div>
                                <div class="w-[65%] flex  gap-3 items-center justify-center">
                                    <span class="flex items-center justify-center gap-1">
                                                <Tag class="w-[65px]" :severity="item.severity" :value="item.icon_value"></Tag>
                                            </span>
                                    <span class="flex w-1/4 items-center justify-center gap-2">
                                        <Avatar :image="item.avatar" size="large" shape="circle">
                                        </Avatar>
                                        <h1 class="w-1/2 text-slate-500 font-medium whitespace-nowrap overflow-hidden text-overflow-ellipsis">{{ item.avatar_name }}</h1>
                                    </span>
                                    <span class="flex items-center justify-center gap-2">
                                        <i class="pi pi-calendar"></i>
                                        <span class="w-40 font-semibold">
                                            {{ item.month }} - {{ item.term }}
                                        </span>
                                    </span>

                                    <span class="flex items-center justify-center gap-2">
                                        <i class="pi pi-paperclip"></i>
                                        <h3>{{ item.files }}</h3>
                                    </span>
                                    <span class="w-1/4 flex flex-col items-center  justify-center gap-1">
                                        <div class=" w-full flex  items-center  justify-center gap-3">
                                            <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                                <div :style="{ width: `${item.score}` }"
                                                    class="score rounded-xl bg-green-500 h-2">
                                                </div>
                                            </span>
                                            <span class="text-sm">{{ item.score }}</span>
                                        </div>
                                    </span>
                                    <div class="actions flex items-center justify-center gap-3">
                                        <i v-tooltip.top="{ value: 'Taxrirlash', autoHide: false }"
                                            class="pi pi-pencil cursor-pointer text-slate-400"></i>
                                        <i v-tooltip.top="{ value: 'Arxivlash', autoHide: false }"
                                            class="pi pi-folder-open cursor-pointer text-slate-400"></i>
                                        <i @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
                                            class="pi pi-ellipsis-h cursor-pointer"></i>
                                    </div>

                                </div>
                            </li>
                        </ul>
                        <!-- <Dialog v-model:visible="modalOpend" maximizable modal :header="fullTable.company"
                        class="w-[90%] max-[900px]:w-[100%]" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                        <ul class="list-none p-0 m-0">
                            <li>
                                <div
                                    class="flex border-b-2 p-2 rounded-lg flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div class="w-1/2 flex items-center justify-between">
                                        <div class="flex items-center justify-center gap-2">
                                            <p class="font-medium">{{ fullTable.id }}.</p>
                                            <div
                                                class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                                <i :class="fullTable.svg" class="text-xl text-blue-500"></i>
                                            </div>
                                            <span class="text-900 line-height-3 flex flex-col gap-2">
                                                <h1 class="font-bold">{{ fullTable.project_name }}</h1>
                                                <h4 class="text-slate-400">{{ fullTable.status }}</h4>
                                            </span>
                                        </div>
                                        <span class="flex font-semibold items-center justify-center">
                                            {{ fullTable.category }}
                                        </span>
                                        <span class="flex items-center justify-center gap-2">
                                            <i class="pi pi-calendar"></i>
                                            <span class="w-40 font-semibold">
                                                {{ fullTable.createTime }}
                                            </span>
                                        </span>
                                    </div>

                                    <div class="w-1/2 flex  gap-6 items-center justify-center">
                                        <span class="flex w-1/4 items-center justify-center gap-2">
                                            <Avatar :image="fullTable.avatar" size="large" shape="circle">
                                            </Avatar>
                                            <h1 class="text-slate-500 font-medium">{{ fullTable.avatar_name }}</h1>
                                        </span>
                                        <span class="flex items-center justify-center gap-2">
                                            <i class="pi pi-calendar"></i>
                                            <span class="w-40 font-semibold">
                                                {{ fullTable.month }} - {{ fullTable.term }}
                                            </span>
                                        </span>
                                        <span class="w-1/4 flex flex-col  gap-3">
                                            <div class="w-full flex items-center justify-center gap-3">
                                                <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                                    <div :style="{ width: `${fullTable.score}` }"
                                                        class="score rounded-xl bg-green-500 h-2"></div>
                                                </span>
                                                <span class="text-sm">{{ fullTable.score }}</span>
                                            </div>
                                            <Tag :severity="fullTable.severity" :value="fullTable.icon_value"></Tag>
                                        </span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <div class="flex gap-5">
                                        <div class="flex items-center justify-between gap-3 w-1/2">
                                            <div class="card1 transition hover:scale-105 flex items-center justify-center flex-col gap-2 rounded-xl">
                                                <Avatar :image="fullTable.avatar" size="xlarge" shape="circle"></Avatar>
                                                <h1 class="font-bold">{{ fullTable.avatar_name }}</h1>
                                                <h5 class="text-gray-500 font-italic">{{ fullTable.tell }}</h5>
                                            </div>
                                            <div class="card flex items-center justify-between gap-3">
                                                <span class="">
                                                    <label>USD-Cost</label>
                                                    <p class="font-medium">{{ fullTable.cost_usd }} USD</p>
                                                </span>
                                                <i class="pi pi-arrow-right-arrow-left"></i>
                                                <span>
                                                    <label>UZS-Cost</label>
                                                    <p class="font-medium">{{ fullTable.cost_uzs }} UZS</p>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="w-1/2 flex flex-col gap-2">
                                            <div v-for="item in list" class="flex items-center justify-between flex-col">
                                                <div class="w-full flex items-center justify-between">
                                                    <span class="flex items-center justify-center gap-2">
                                                        <i class="pi pi-file"></i>
                                                        <h1 class="font-medium">{{ fullTable.file_name }}</h1>
                                                    </span>
                                                    <button
                                                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                                        <svg class="fill-current w-4 h-4 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                                        </svg>
                                                        <span>Download</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Dialog> -->
                    </div>
                </div>
        </div>
      <div class="flex items-center justify-center gap-2">
        <div class="w-1/2 h-[26rem]">
                        <div class="card h-full">
                            <h5>Vaqt va Resurs ko'rsatkichlari</h5>
                            <Chart type="line" :data="lineData" :options="lineOptions"></Chart>
                        </div>
                    </div>

                    <div class="w-1/2 h-[26rem]">
                    <div class="card h-full flex flex-column align-items-center">
                        <h5 class="text-left w-full">Moliyaviy ko'rsatkich</h5>
                        <Chart type="pie" :data="pieData" :options="pieOptions"></Chart>
                    </div>
                </div>
      </div>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="w-1/6 translate-y-2">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span class="pi pi-ellipsis-v" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
            </template>
        </Menu>
    </section>
</template>
<script setup>
import { ref, reactive } from 'vue';
import router from '@/router';
const items = ref([
    {
        label: `Umumiy ma'lumotlar`,
        route: '/general_information'
    },
    {
        label: 'Loyiha sprintlari',
        route: '/Sprint'
    },
    {
        label: 'Loyiha ijrochilari',
        route: '/performers',
    },
    {
        label: 'Loyiha bosqichlari',
        route: '/stages',
    },
    {
        label: 'Loyihada ijrochilarga biriktirilgan topshiriqlar',
        route: '/tasks',
    },
    {
        label: 'Loyiha xronologiya ma’lumoti',
        route: '/timeline_information',
    },
    {
        label: 'Kanban Doska',
        route: '/kanban',
    },
]);
const menu = ref();

const generalinformation = () => {
    router.push('/Sprint')
}
const toggle = (event) => {
    menu.value.toggle(event);
};

const fullTable = ref(
    {
           id: ``,
        project_name: ``,
        status: ``,
        svg: ``,
        term: ``,
        month: ``,
        files: ``,
        score: ``,
        createTime: '',
        endTime: ``,
        avatar_name: ``,
        cost_usd: ``,
        cost_uzs: ``,
        severity: "",
        company: ``,
        icon_value: "",
        file_name: ``,
        category: ``,
        tell: ``,
        avatar: ``,
        img: ``,
        file: ``,
        checked: ``,
    }
)

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
    },
]);
const cities = ref([
    { name: 'This Week', code: 'TW' },
    { name: 'To Day', code: 'TD' },
    { name: 'Last Week', code: 'LW' },
    { name: 'Last Day', code: 'LD' },
    { name: 'This Month', code: 'TM' }
]);

const list = ref([
    {
        id: `1`,
        project_name: `Texnik loyihalashtirish bosqichi`,
        status: `14 Tasks`,
        svg: `pi pi-chart-line`,
        term: `4,2024`,
        month: `Avg 12`,
        files: `3`,
        score: `78%`,
        createTime:'01.02.2024',
        endTime:`01.04.2024`,
        avatar_name: `Julia`,
        cost_usd: `3000`,
        cost_uzs: `30000000`,
        severity: "danger",
        company: `Epan`,
        icon_value: "Danger",
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        category: `SMM`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=8dfbfd449b8c6f99a5fcc1770cdc123a7d55b352-10547508-images-thumbs&n=13`,
        file: `3`,
        completed_task: `10`,
        all_task:`13`,
    },
    {
        id: `2`,
        project_name: `Loyihani yaratish bosqichi`,
        status: `14 Tasks`,
        svg: `pi pi-chart-pie`,
        term: `4,2024`,
        month: `Avg 12`,
        files: `3`,
        score: `26%`,
        createTime: `01.02.2024`,
         endTime: `01.04.2024`,
        avatar_name: `Julia`,
        cost_usd: `3000`,
        cost_uzs: `30000000`,
        severity: "info",
        company: `Epan`,
        icon_value: "Info",
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        category: `SMM`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=be7f7bcfde85f7898245477c115c2849ac283f3f-10525373-images-thumbs&n=13`,
        file: `3`,
       completed_task: `10`,
        all_task: `13`,
    },
    {
        id: `3`,
        project_name: `Loyihani ishga tushirish bosqichi`,
        status: `14 Tasks`,
        svg: `pi pi-star`,
        term: `4,2024`,
        month: `Avg 12`,
        files: `3`,
        score: `97%`,
        createTime: `01.02.2024`,
         endTime: `01.04.2024`,
        avatar_name: `Julia`,
        cost_usd: `3000`,
        cost_uzs: `30000000`,
        severity: "warning",
        company: `Epan`,
        icon_value: "Warning",
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        category: `SMM`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=c0885138a400441d6da47af8da065c1cefda3027-6824808-images-thumbs&n=13`,
        file: `3`,
         completed_task: `10`,
        all_task: `13`,
    },
    {
        id: `4`,
        project_name: `Loyihaga texnik xizmat ko’rsatish bosqichi`,
        status: `14 Tasks`,
        svg: `pi pi-chart-line`,
        term: `4,2024`,
        month: `Avg 12`,
        files: `3`,
        score: `13%`,
        createTime: `01.02.2024`,
         endTime: `01.04.2024`,
        avatar_name: `Julia`,
        cost_usd: `3000`,
        cost_uzs: `30000000`,
        severity: "danger",
        company: `Epan`,
        icon_value: "Danger",
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        category: `SMM`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=c001447f1d6639b86182aa0f958374cd-4843938-images-thumbs&n=13`,
        file: `3`,
         completed_task: `10`,
        all_task: `13`,
    },
    {
        id: `5`,
        project_name: `Stage name`,
        status: `14 Tasks`,
        svg: `pi pi-star`,
        term: `4,2024`,
        month: `Avg 12`,
        files: `3`,
        score: `99%`,
        createTime: `01.02.2024`,
         endTime: `01.04.2024`,
        avatar_name: `Julia`,
        cost_usd: `3000`,
        cost_uzs: `30000000`,
        severity: "success",
        company: `Epan`,
        icon_value: "Success",
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        category: `SMM`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=aa19b7b0ff7963ebc3eb8e8efdb980e55a866f00-9185064-images-thumbs&n=13`,
        file: `3`,
        completed_task: `10`,
        all_task: `13`,
    },
    {
        id: `6`,
        project_name: `Stage Name`,
        status: `14 Tasks`,
        svg: `pi pi-chart-pie`,
        term: `4,2024`,
        month: `Avg 12`,
        files: `3`,
        score: `57%`,
        createTime: `01.02.2024`,
         endTime: `01.04.2024`,
        avatar_name: `Julia`,
        cost_usd: `3000`,
        cost_uzs: `30000000`,
        severity: "warning",
        company: `Epan`,
        icon_value: "Warning",
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        category: `SMM`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=fca4c43d5d6c11ff5470ce6f7f6d7bff5fae9605-8159518-images-thumbs&n=13`,
        file: `3`,
         completed_task: `10`,
        all_task: `13`,
    },
])


const addProject = () => {
    router.push('/addProject');
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
    labels: [`J'ami Ma'blag`, `Xarajatlar`],
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