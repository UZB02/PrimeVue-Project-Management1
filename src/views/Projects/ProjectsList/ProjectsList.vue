<template>
    <!-- <header class="w-full bg-white dark:bg-black">
        <div class="w-full flex items-center justify-between">
            <button>ADD Project</button>
                <span class="p-input-icon-right">
                    <InputText type="text" placeholder="Search" />
                    <i class="pi pi-search" />
                </span>
        </div>
    </header> -->
    <section>
        <div class="container flex flex-wrap items-center justify-center gap-2">
            <div v-for="item in cardinfo" class="card1 shadow-md p-3 rounded-lg w-[32%] flex flex-col gap-2">
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
                                    <Avatar :image="'demo/images/avatar/onyamalimba.png'"  shape="circle">
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
            <div class="list w-full">
                <div class="card">
                    <div class="flex align-items-center justify-content-between mb-4">
                        <h5 class="text-4xl font-medium">4 Tasks</h5>
                        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="This Week"
                            class="w-1/2 md:w-14rem border" />
                    </div>
                    <ul v-for="item in list" class="p-0 mx-0 mt-0 mb-4 list-none">
                        <li
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
                                    <div :style="{ width: `${item.score}` }" class="score rounded-xl bg-green-500 h-2"></div>
                                </span>
                                <span class="text-sm">{{ item.score }}</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

const selectedCity = ref();
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
        project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-qrcode`,
        term: `5,2024`,
        month: `Okt 31`,
        avatar_name: `Julia`,
        score: `95%`,
        files:`6`,
        avatar:`https://avatars.mds.yandex.net/i?id=738b728f5728fc4d9b1bb45e0c787450ab62c59b-10705627-images-thumbs&n=13`
    },
   {
         project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-chart-line`,
       term: `4,2024`,
         month: `Avg 12`,
       files: `3`,
       score: `47%`,
        avatar_name: `Jhonsn`,
        avatar: `https://avatars.mds.yandex.net/i?id=eab337afe51db765394f86a89629edb430a9d8c9-10299621-images-thumbs&n=13`,
    },
   {
         project_name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-chart-pie`,
       term: `1,2024`,
         month: `Mar 26`,
       files: `7`,
       score: `81%`,
        avatar_name: `Andrey`,
        avatar: `https://avatars.mds.yandex.net/i?id=7175b19a61240ba5d952072ba196839ba6072297-12153883-images-thumbs&n=13`,
    },
   {
        name: `Project Name`,
        status: `14 Tasks`,
        svg: `pi pi-star`,
       term: `10,2023`,
         month: `Yan 31`,
       score: `53%`,
       files: `12`,
       avatar_name: `Watson`,
         avatar:`https://avatars.mds.yandex.net/i?id=ec34e1f537840d74d17325bb883a6fe029a27e53-12314646-images-thumbs&n=13`
    },
])

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