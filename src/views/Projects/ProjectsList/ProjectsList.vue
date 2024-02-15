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
            <div v-for="item in cardinfo" class="card1 bg-white shadow-md p-3 rounded-lg w-[30%] flex flex-col gap-2">
                <img class="rounded-xl w-full h-44" :src="item.img" alt="">
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
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

const cardinfo = ref([
    {
        img: `https://avatars.mds.yandex.net/i?id=aa49b4e49613f6b614a24a35c22dbf35780a229f-10852653-images-thumbs&n=13`,
        name: `SWYFT`,
        data: `15.02.2024`,
        file: `3`,
        checked: `10`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=7c4c2aa230b67b544a95f2286ee29ed6c996f423-10592644-images-thumbs&n=13`,
        name: `SWYFT`,
        data: `15.02.2024`,
        file: `3`,
        checked: `10`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=aa49b4e49613f6b614a24a35c22dbf35780a229f-10852653-images-thumbs&n=13`,
        name: `SWYFT`,
        data: `15.02.2024`,
        file: `3`,
        checked: `10`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=aa49b4e49613f6b614a24a35c22dbf35780a229f-10852653-images-thumbs&n=13`,
        name: `SWYFT`,
        data: `15.02.2024`,
        file: `3`,
        checked: `10`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=aa49b4e49613f6b614a24a35c22dbf35780a229f-10852653-images-thumbs&n=13`,
        name: `SWYFT`,
        data: `15.02.2024`,
        file: `3`,
        checked: `10`,
    },
    {
        img: `https://avatars.mds.yandex.net/i?id=aa49b4e49613f6b614a24a35c22dbf35780a229f-10852653-images-thumbs&n=13`,
        name: `SWYFT`,
        data: `15.02.2024`,
        file: `3`,
        checked: `10`,
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