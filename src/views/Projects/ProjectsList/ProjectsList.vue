<template>
    <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addProject" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ADD
                Project</button>
            <!-- <h2 class="font-semibold">Loyihaning umumiy ma’lumotlarini ko’rish</h2> -->
            <span class="flex items-center justify-center gap-3 p-input-icon-right">
                <button type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                    <!-- <Menu ref="menu" id="overlay_menu" :model="profil" :popup="true"  />
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" /> -->
                </button>
                <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="translate-y-2">
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
            <div :class="card_table ? 'card1 shadow-md p-3 rounded-lg w-[32%] flex flex-col gap-2' : 'hidden'"
                v-for="item in cardinfo">
                <img class="rounded-xl w-full h-40" :src="item.img" alt="">
                <div class="bottom">
                    <span class="flex flex-col gap-2">
                        <h1 class="text-2xl font-bold">{{ item.name }}</h1>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center justify-center gap-3">
                                <span class="flex items-center justify-center gap-1">
                                    <i class="pi pi-calendar"></i>
                                    <h2>{{ item.data }}</h2>
                                </span>
                                <span class="flex items-center justify-center gap-1">
                                    <i class="pi pi-paperclip"></i>
                                    <h2>{{ item.file }}</h2>
                                </span>
                                <span class="flex items-center justify-center gap-1">
                                    <i class="pi pi-verified"></i>
                                    <h2>{{ item.checked }}</h2>
                                </span>
                            </div>
                            <div class="">
                                <AvatarGroup class="mb-3">
                                    <Avatar :image="'demo/images/avatar/amyelsner.png'" shape="circle">
                                    </Avatar>
                                    <Avatar :image="'demo/images/avatar/asiyajavayant.png'" shape="circle">
                                    </Avatar>
                                    <Avatar :image="'demo/images/avatar/onyamalimba.png'" shape="circle">
                                    </Avatar>
                                </AvatarGroup>
                            </div>
                        </div>
                        <div class="w-full flex items-center  justify-center gap-3">
                            <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                <div :style="{ width: `${item.score}` }" class="score rounded-xl bg-green-500 h-2"></div>
                            </span>
                            <span class="text-sm">{{ item.score }}</span>
                        </div>
                    </span>
                </div>
            </div>
            <div :class="card_table ? 'hidden' : 'list w-full'" class="list w-full">
                <div class="card">
                    <div class="flex align-items-center justify-content-between mb-4">
                        <h5 class="text-4xl font-medium">4 Projects</h5>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="This Week"
                            class="w-1/2 md:w-14rem border" />
                    </div>
                    <ul v-for="item in list" :key="item.id" class="p-0 mx-0 mt-0 mb-4 list-none">
                        <li @click="() => modalOpen(JSON.stringify(item))"
                            class="flex items-center cursor-pointer justify-between align-items-center py-2 border-bottom-1 surface-border">
                            <div class="flex items-center justify-center">
                                <div
                                    class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                    <i :class="item.svg" class="text-xl text-blue-500"></i>
                                </div>
                                <span class="text-900 line-height-3 flex flex-col gap-2">
                                    <h1 class="font-bold">{{ item.project_name }}</h1>
                                    <h4 class="text-slate-400">{{ item.status }}</h4>
                                </span>
                            </div>

                            <div class="w-1/2 flex  gap-6 items-center justify-center">
                                <span class="flex w-1/4 items-center justify-center gap-2">
                                    <Avatar :image="item.avatar" size="large" shape="circle">
                                    </Avatar>
                                    <h1 class="text-slate-500 font-medium">{{ item.avatar_name }}</h1>
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
                                <span class="w-1/4 flex items-center  justify-center gap-3">
                                    <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                        <div :style="{ width: `${item.score}` }" class="score rounded-xl bg-green-500 h-2">
                                        </div>
                                    </span>
                                    <span class="text-sm">{{ item.score }}</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                    <Dialog v-model:visible="modalOpend" maximizable modal :header="fullTable.company"
                        :style="{ width: '90%' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                        <ul class="list-none p-0 m-0">
                            <li class="">
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
                                        <!-- <span class="flex items-center cursor-pointer justify-center gap-1">
                                            <i class="pi pi-dollar"></i>
                                            <span>{{ fullTable.cost_usd }}</span>
                                        </span> -->
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
                                                <!-- <h4>{{ item.rols }}</h4> -->
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
                                                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
                    </Dialog>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive } from 'vue';
import router from '@/router';
const eId = ref(null)
const modalOpend = ref(false)
const fullTable = ref(
    {
        id: ``,
        project_name: ``,
        status: ``,
        svg: ``,
        term: ``,
        month: ``,
        avatar_name: ``,
        score: ``,
        file_name: ``,
        avatar: ``,
        createTime: ``,
        company: ``,
        category: ``,
        cost_usd: ``,
        cost_uzs: ``,
        tell: ``,
    }
)

function modalOpen(item) {
    modalOpend.value = true
    let data = JSON.parse(item)
    console.log(data);
    fullTable.value = data
    eId.value = data.id
}

const selectedCity = ref();
const card_table = ref(true);
const menu = ref();
const items = ref([
    {
        label: 'Developer',
        icon: 'pi pi-user',
        route: '/'
    },
    {
        label: 'Manager',
        icon: 'pi pi-user',
        route: '/dashboard_manager'
    },
    {
        label: 'Analyst',
        icon: 'pi pi-user',
        route: '/addProject'
    },
]);
const cities = ref([
    { name: 'This Week', code: 'TW' },
    { name: 'To Day', code: 'TD' },
    { name: 'Last Week', code: 'LW' },
    { name: 'Last Day', code: 'LD' },
    { name: 'This Month', code: 'TM' }
]);

const cardinfo = ref([
    {
        img: `https://avatars.mds.yandex.net/i?id=aa49b4e49613f6b614a24a35c22dbf35780a229f-10852653-images-thumbs&n=13`,
        name: `IMG`,
        data: `15.02.2024`,
        file: `3`,
        checked: `10`,
        score: `60%`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=7c4c2aa230b67b544a95f2286ee29ed6c996f423-10592644-images-thumbs&n=13`,
        name: `DELTA`,
        data: `01.01.2024`,
        file: `6`,
        checked: `15`,
        score: `30%`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=5fb3c020c70b83301b406e1c86205abd2c575c99-10577947-images-thumbs&n=13`,
        name: `NU INVEST`,
        data: `24.12.2023`,
        file: `2`,
        checked: `7`,
        score: `80%`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=7f5751d9137e5a8be456a4a493af77ba5c1c9086-9820447-images-thumbs&n=13`,
        name: `PS5`,
        data: `16.11.2023`,
        file: `8`,
        checked: `17`,
        score: `50%`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=ea521d74d36ab6fb17921bd72528292049e1fdef-8272935-images-thumbs&n=13`,
        name: `ALEGRO`,
        data: `26.10.2023`,
        file: `3`,
        checked: `10`,
        score: `48%`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        name: `MIMSAN`,
        data: `10.10.2023`,
        file: `3`,
        checked: `10`,
        score: `97%`,
    },
])
const list = ref([
    {
        id: `1`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-qrcode`,
        term: `5,2024`,
        month: `Okt 31`,
        avatar_name: `Julia`,
        severity: "success",
        icon_value: "Done",
        category: `It`,
        score: `100%`,
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        createTime: `01.02.2024 -07:00`,
        cost_usd: `5000`,
        company: `Bisyor`,
        cost_uzs: `50000000`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13`,
    },
    {
        id: `2`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-chart-line`,
        term: `4,2024`,
        month: `Avg 12`,
        files: `3`,
        score: `47%`,
        createTime: `01.02.2024 -07:00`,
        avatar_name: `Jhonsn`,
        cost_usd: `3000`,
        cost_uzs: `30000000`,
        severity: "danger",
        company: `Epan`,
        icon_value: "Stopped",
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        category: `SMM`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=eab337afe51db765394f86a89629edb430a9d8c9-10299621-images-thumbs&n=13`,
    },
    {
        id: `3`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-chart-pie`,
        term: `1,2024`,
        month: `Mar 26`,
        files: `7`,
        score: `81%`,
        cost_usd: `7000`,
        cost_uzs: `70000000`,
        severity: "warning",
        icon_value: "Suspended",
        category: `Marketing`,
        company: `UITC`,
        createTime: `01.02.2024 -07:00`,
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        avatar_name: `Andrey`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=7175b19a61240ba5d952072ba196839ba6072297-12153883-images-thumbs&n=13`,
    },
    {
        id: `4`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-star`,
        term: `10,2023`,
        month: `Yan 31`,
        score: `53%`,
        files: `12`,
        cost_usd: `7000`,
        cost_uzs: `70000000`,
        severity: "primary",
        icon_value: "Draft ",
        category: `It`,
        company: `Global`,
        createTime: `01.02.2024 -07:00`,
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        avatar_name: `Watson`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=ec34e1f537840d74d17325bb883a6fe029a27e53-12314646-images-thumbs&n=13`
    },
])

const addProject = () => {
    router.push('/addProject');
}

const toggle = (event) => {
    menu.value.toggle(event);
};
// const modalList = () => {
//     console.log(list.value);
//   list = JSON.parse(JSON.stringify(lis))
// }


const cardFunction = () => {
    card_table.value = true
}
const tableFunction = () => {
    card_table.value = false
}




// const autoValue = ref(null);
// const autoFilteredValue = ref([]);

// const searchCountry = (event) => {
//     setTimeout(() => {
//         if (!event.query.trim().length) {
//             autoFilteredValue.value = [...autoValue.value];
//         } else {
//             autoFilteredValue.value = autoValue.value.filter((country) => {
//                 return country.name.toLowerCase().startsWith(event.query.toLowerCase());
//             });
//         }
//     }, 250);
// };
</script>
<style></style>