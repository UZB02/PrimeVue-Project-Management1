<template>
    <section class="flex flex-col gap-3">
        <div class="info flex flex-col gap-3">
            <div class="top flex items-center justify-between">
                <div class="text">
                    <h1 class="font-bold text-6xl">Project Menegment</h1>
                    <h2 class="text-5xl font-medium font-sans text-gray-400">PM</h2>
                </div>
                <div class="logo">
                    <img :src="logoUrl" alt="Logo" height="20" class="mr-2" />
                </div>
            </div>
            <div class="card">
                <div class="actions flex items-center justify-end gap-2">
                    <i class="pi pi-file-edit text-2xl cursor-pointer text-gray-400"></i>
                    <i class="pi pi-copy text-2xl cursor-pointer text-gray-400"></i>
                </div>
                <p class="line-height-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nobis pariatur
                    cupiditate asperiores voluptatum nisi eaque culpa. Perferendis tenetur explicabo eveniet minus sed
                    repellat quidem eos! Laudantium tenetur ducimus distinctio ipsum, consequuntur architecto rem Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsa consequuntur, consequatur similique
                    eius ipsam vel odit delectus porro repudiandae pariatur ea esse ipsum commodi veritatis velit at tempore
                    ex dolore voluptates earum incidunt vero. Eveniet iusto quae autem fugit, tenetur, magni quo unde
                    voluptas at minima, velit dolores aperiam! omnis, placeat impedit similique quam velit corporis vel iure
                    alias fugit repellat amet minus hic? Optio.</p>
            </div>
        </div>
        <div>
            <div class="card flex items-center justify-between">
                <div class="time flex items-center gap-4">
                    <span class="flex flex-col gap-2">
                        <h1 class="font-bold text-2xl">Yaratilgan vaqt</h1>
                        <h3 class="font-medium text-lg text-center">01.02.2024 10:00</h3>
                    </span>
                    <span class="flex flex-col gap-2">
                        <h1 class="font-bold text-2xl">Belgilangan davr</h1>
                        <h3 class="font-medium text-lg text-center">01.03.2024 10:00</h3>
                    </span>
                </div>
                <span class="w-1/4 flex items-center  justify-center gap-3">
                    <span class="bg-gray-200 flex items-center rounded-xl w-full">
                        <div class="w-[87%] score rounded-xl bg-green-500 h-2">
                        </div>
                    </span>
                    <span class="text-sm">87%</span>
                </span>
                <span class="flex flex-col gap-2">
                    <h1 class="font-bold text-2xl">Topshirilgan davri</h1>
                    <h3 class="font-medium text-lg text-center">01.03.2024 10:00</h3>
                </span>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useLayout } from '@/layout/composables/layout';
import { computed } from 'vue';

const { layoutConfig } = useLayout();

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
</script>
<style></style>