<template>
    <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addProject"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-1"><i
                    class="pi pi-plus"></i> ADD
                Performers</button>
            <!-- <h2 class="font-semibold">Loyihaning umumiy ma’lumotlarini ko’rish</h2> -->
            <span class="flex items-center justify-center gap-3 p-input-icon-right">
                <!-- <div class="flex cursor-pointer items-center justify-center gap-1">
                 <span class="p-input-icon-right bg-white shadow rounded">
                     <InputText type="text" placeholder="Search" class="p-2" />
                     <i class="pi pi-search" />
                 </span>
             </div> -->

                <button type="button" @click="rolsToggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="p-link layout-topbar-button">
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
    <section class="flex max-[900px]:flex-col gap-2">
        <div class="top w-[60%] max-[900px]:w-full">
            <div class="card border flex flex-col gap-4 p-3 rounded-2xl">
                <div class="flex align-items-center justify-content-between">
                    <h1 class="text-2xl">Loyiha ijrochilari paneli</h1>
                    <span class="flex items-center justify-center gap-2">
                        <div class="flex cursor-pointer items-center justify-center gap-1">
                            <span class="p-input-icon-right bg-white shadow rounded">
                                <InputText type="text" placeholder="Search" class="p-2" />
                                <i class="pi pi-search" />
                            </span>
                        </div>
                        <i class="pi pi-sort-amount-up text-2xl cursor-pointer transition hover:text-gray-400"></i>
                        <i class="pi pi-sort-amount-down-alt text-2xl cursor-pointer transition hover:text-gray-400"></i>
                    </span>
                </div>
                <div class="bottom flex items-center gap-3 flex-wrap">
                    <div v-for="item in comunitiCard"
                        class="card1 transition hover:scale-[1.02] flex items-center justify-center flex-col gap-2 shadow rounded-xl p-3 w-[30%]">
                        <div class="action w-full flex items-center justify-end gap-2">
                             <i @click="toggle" aria-haspopup="true" aria-controls="overlay_menu1" class="pi pi-ellipsis-h cursor-pointer"></i>
                        </div>
                        <span class="flex items-center justify-center flex-col gap-2  p-3 w-full">
                            <img :src="item.img" class="w-24 card-img  h-24 rounded-[50%]" alt="">
                            <h1 class="font-bold">{{ item.name }}</h1>
                            <h4>{{ item.rols }}</h4>
                            <h5 class="text-gray-500 font-italic">{{ item.tell }}</h5>
                        </span>
                    </div>
             <Menu ref="menu" :model="overlayMenuItems" :popup="true" />
                </div>
            </div>
        </div>
        <div class="bottom w-[40%] max-[900px]:w-full">
              <div class="card border flex flex-col gap-4 p-3 rounded-2xl">
                            <div class="flex justify-content-between align-items-center mb-5">
                                <h5 class="text-2xl">Ijrochilar reyting tizimi ma’lumoti paneli. </h5>
                                <!-- <div>
                            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                                @click="$refs.menu2.toggle($event)"></Button>
                            <Menu ref="menu2" :popup="true" :model="items"></Menu>
                        </div> -->
                            </div>
                            <ul class="list-none flex flex-col p-0 m-0">
                                <li v-for="item in comuniti"
                                    class="flex flex-column border p-2 rounded-2xl flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div class="cards w-full flex items-center justify-between">
                                        <div class="w-[70%] flex items-center gap-3">
                                            <img :src="item.img" alt="" class="w-[10%]">
                                            <div class="">
                                                <span class="text-900 font-medium mr-2 mb-1 md:mb-0">{{ item.name }}</span>
                                                <div class="mt-1 text-600">{{ item.position }}</div>
                                            </div>
                                        </div>
                                        <div class="mt-2 pr-5 md:mt-0 flex align-items-center">
                                            <i class="pi pi-star"></i>
                                            <span class="text-orange-500 ml-3 font-medium">{{ item.points }}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
        </div>
        <Dialog v-model:visible="visible" maximizable modal header="Header" :style="{ width: '70rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
           <div class="container flex flex-col gap-3">
             <div
                    class="taskCard flex justify-between h-1/3 gap-2 p-1 border rounded-xl">
                    <div  class="left w-1/4">
                        <img class="h-full w-full object-fill" src="https://avatars.mds.yandex.net/i?id=ec4ff5070536ccebd81888d9920280e0d513e929-10810377-images-thumbs&n=13">
                    </div>
                    <div class="right w-[75%] flex flex-col gap-2 ">
                        <span class="flex items-center justify-between">
                            <h1 class="text-center font-bold font-sans text-2xl">Loyiha ijrochilari bo'limi bilan ishlash</h1>
                            <span class="flex items-center justify-center gap-2 -translate-x-1">
                                <i class="pi pi-stopwatch font-bold"></i>
                                <span class="flex items-center gap-2 justify-center">
                                    <h1 class="font-medium">20.02.2024</h1>
                                    <i class="pi pi-arrow-right font-medium"></i>
                                    <h2 class="font-medium">20.03.2024</h2>
                                </span>
                            </span>
                        </span>
                        <span class="flex h-full">
                            <div class="info w-[90%] flex flex-col  gap-2">
                                <p class="font-sans font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio quisquam libero, error
                                    iure
                                    autem eum. Omnis nostrum, esse magni minima aspernatur laudantium magnam, necessitatibus
                                    aliquam
                                    consectetur voluptas, alias tempora. Iure, soluta ullam! Ipsum animi ex esse debitis alias
                                    ducimus vel saepe facere, delectus laboriosam obcaecati sit, rem, vero quas? Quo
                                    necessitatibus
                                    libero vero ea esse ipsum soluta facilis doloremque est deserunt?</p>
                            </div>
                            <div class="w-1/3 flex flex-col items-center justify-center gap-3">
                                <span class="bg-gray-200 h-1/5 flex items-center rounded-md w-full">
                                    <div style="width: 50%;"
                                        class="score h-full flex items-center justify-end rounded-md bg-green-500 p-1">
                                        <span class="text-base text-white">50%</span>
                                    </div>
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
                <div
                    class="taskCard flex justify-between h-1/3 gap-2 p-1 border rounded-xl">
                    <div  class="left w-1/4">
                        <img class="h-full w-full object-fill" src="https://avatars.mds.yandex.net/i?id=81fffc7f985b85758b426347a68e5b010b68b1ee-10122654-images-thumbs&n=13">
                    </div>
                    <div class="right w-[75%] flex flex-col gap-2 ">
                        <span class="flex items-center justify-between">
                            <h1 class="text-center font-bold font-sans text-2xl">Loyiha ijrochilari bo'limi bilan ishlash</h1>
                            <span class="flex items-center justify-center gap-2 -translate-x-1">
                                <i class="pi pi-stopwatch font-bold"></i>
                                <span class="flex items-center gap-2 justify-center">
                                    <h1 class="font-medium">20.02.2024</h1>
                                    <i class="pi pi-arrow-right font-medium"></i>
                                    <h2 class="font-medium">20.03.2024</h2>
                                </span>
                            </span>
                        </span>
                        <span class="flex h-full">
                            <div class="info w-[90%] flex flex-col  gap-2">
                                <p class="font-sans font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <div class="w-1/3 flex flex-col items-center justify-center gap-3">
                                <span class="bg-gray-200 h-1/5 flex items-center rounded-md w-full">
                                    <div style="width: 80%;"
                                        class="score h-full flex items-center justify-end rounded-md bg-green-500 p-1">
                                        <span class="text-base text-white">80%</span>
                                    </div>
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
           </div>
        </Dialog>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import router from '@/router';

// const visible = ref(false);

const eId = ref(null)
const modalOpend = ref(false)
const comunitiCard = ref([
    {
        img: `https://avatars.mds.yandex.net/i?id=ee81aed641f0e39576f73c988ba5dd89d07c3dd0-8071172-images-thumbs&ref=rim&n=33&w=250&h=250`,
        name: `John's`,
        rols: `Front-End Developer`,
        tell: `+99893-123-45-67`,
        task: [
            {
                id: 1,
                taskImg: `https://avatars.mds.yandex.net/i?id=ec4ff5070536ccebd81888d9920280e0d513e929-10810377-images-thumbs&n=13`,
                taskName: `Loyiha ijrochilari bo'limi bilan ishlash`,
                comment: `Loyiha ijrochilari bo'limi bilan ishlash Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore ipsam fugiat dolorem. Explicabo tempora, dolor possimus asperiores modi soluta?`,
                score: `60%`,
                timeStart: `20.02.2024`,
                timeEnd: `20.03.2024`,
            },
            {
                id: 2,
                taskImg: `https://avatars.mds.yandex.net/i?id=ec4ff5070536ccebd81888d9920280e0d513e929-10810377-images-thumbs&n=13`,
                taskName: `Loyiha ijrochilari bo'limi bilan ishlash`,
                comment: `Loyiha ijrochilari bo'limi bilan ishlash Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore ipsam fugiat dolorem. Explicabo tempora, dolor possimus asperiores modi soluta?`,
                score: `60%`,
                timeStart: `15.03.2024`,
                timeEnd: `15.04.2024`,
            },
        ]
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=82fb8729097624976e07a7f71da36ea4119b821a-11516533-images-thumbs&n=13`,
        name: `John's`,
        rols: `Back-End Developer`,
        tell: `+99893-123-45-67`
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=8ca5af00308aefc9251d900bc01f1533-4964375-images-thumbs&n=13`,
        name: `John's`,
        rols: `UX Designer`,
        tell: `+99893-123-45-67`
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=86fc28cdbf257da6f0a95597c2365cadafb1fd73-12463617-images-thumbs&n=13`,
        name: `John's`,
        rols: `Testter`,
        tell: `+99893-123-45-67`
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=acbfee42774c5aa3e27945f662baf23aeb608c8b-3788438-images-thumbs&n=13`,
        name: `John's`,
        rols: `Front-End Developer`,
        tell: `+99893-123-45-67`
    },
])
const comuniti = ref([
    {
        img: `https://avatars.mds.yandex.net/i?id=c96f74047facf42a702af4f3c4707ad8eff4552f-5324799-images-thumbs&ref=rim&n=33&w=250&h=250`,
        name: `Alex Jordan`,
        position: `Front-End Developer `,
        points: `50`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=b8f1fb2dd1dea71d1e91e47ee84ce44844dae807-7020937-images-thumbs&ref=rim&n=33&w=250&h=250`,
        name: `Muhsinbek Mirzamatov`,
        position: `Front-End Developer `,
        points: `47`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=cfb61e705cbc7609562b986b936f4431-4361307-images-thumbs&ref=rim&n=33&w=250&h=250`,
        name: `Javohir Bozorboyev`,
        position: `Front-End Developer `,
        points: `40`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=0fd3e6f94eb22e51a43738500fb93d89caf13d6b-9264723-images-thumbs&ref=rim&n=33&w=235&h=250`,
        name: `Javohir Bozorboyev`,
        position: `Front-End Developer `,
        points: `34`,
    },
])

const visible = ref(false);

const menu = ref(null);

const overlayMenuItems = [
    {
        label: 'Topshiriqlar',
        icon: 'pi pi-eye',
         command: () => {
            visible.value = true;
        }
    },
    {
        label: 'Taxrirlash',
        icon: 'pi pi-pencil'
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash'
    },
];

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
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
    }
)

function modalOpen(item) {
    modalOpend.value = true
    let data = JSON.parse(item)
    console.log(data);
    fullTable.value = data
    eId.value = data.id
}

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

const list = ref([
    {
        id: `1`,
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-chart-line`,
        term: `4,2024`,
        month: `Avg 12`,
        files: `3`,
        score: `63%`,
        createTime: `01.02.2024 -07:00`,
        avatar_name: `Julia`,
        cost_usd: `3000`,
        cost_uzs: `30000000`,
        severity: "danger",
        company: `Epan`,
        icon_value: "Stopped",
        file_name: `Loyihani boshqarish metodologiyasi(ssenariysi)`,
        category: `SMM`,
        tell: `+99890-123-45-67`,
        avatar: `https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
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
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
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
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
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
        avatar: `https://avatars.mds.yandex.net/i?id=ec34e1f537840d74d17325bb883a6fe029a27e53-12314646-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
    },
    {
        id: `5`,
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
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
    },
    {
        id: `6`,
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
        avatar: `https://avatars.mds.yandex.net/i?id=ec34e1f537840d74d17325bb883a6fe029a27e53-12314646-images-thumbs&n=13`,
        img: `https://avatars.mds.yandex.net/i?id=2b5736ae7b59de8c7ff27f4be379b1c6-5151259-images-thumbs&n=13`,
        file: `3`,
        checked: `10`,
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

</script>
<style></style>