<template>
    <section class="flex flex-col gap-3">
        <div class="info flex flex-col gap-3">
            <div class="top flex items-center justify-between">
                <div class="text">
                    <h1 class="font-bold text-5xl">Project Menegment</h1>
                    <h2 class="text-5xl font-medium font-sans text-gray-400">PM</h2>
                </div>
                <div class="logo">
                    <img :src="logoUrl" alt="Logo" height="20" class="mr-2" />
                </div>
            </div>
                  <div class="persons flex items-center justify-between flex-wrap">
                <div
                    class="card1 transition hover:scale-105 flex items-center justify-center flex-col gap-2 shadow rounded-xl p-3 w-[19%]">
                    <img src="https://avatars.mds.yandex.net/i?id=82fb8729097624976e07a7f71da36ea4119b821a-11516533-images-thumbs&n=13"
                        class="w-32 card-img  h-32 rounded-[50%]" alt="">
                    <h1 class="font-bold">Yevgeni</h1>
                    <h4 class="text-center">Loyihani yaratgan tizim foydalanuvchisi</h4>
                    <h5 class="text-gray-500 font-italic">+99890-123-45-67</h5>
                </div>
                <div
                    class="card1 transition hover:scale-105 flex items-center justify-center flex-col gap-2 shadow rounded-xl p-3 w-[19%]">
                    <img src="https://avatars.mds.yandex.net/i?id=82fb8729097624976e07a7f71da36ea4119b821a-11516533-images-thumbs&n=13"
                        class="w-32 card-img  h-32 rounded-[50%]" alt="">
                    <h1 class="font-bold">Jhonsn</h1>
                    <h4 class="text-center">Loyiha menedjeri</h4>
                    <h5 class="text-gray-500 font-italic">+99890-123-45-67</h5>
                </div>
                <div
                    class="card1 transition hover:scale-105 flex items-center justify-center flex-col gap-2 shadow rounded-xl p-3 w-[19%]">
                    <img src="https://avatars.mds.yandex.net/i?id=82fb8729097624976e07a7f71da36ea4119b821a-11516533-images-thumbs&n=13"
                        class="w-32 card-img  h-32 rounded-[50%]" alt="">
                    <h1 class="font-bold">Alex</h1>
                    <h4 class="text-center">Loyiha egasi</h4>
                    <h5 class="text-gray-500 font-italic">+99890-123-45-67</h5>
                </div>
            </div>
            <div class="card">
                <TabView class="tabview-custom">
                    <TabPanel>
                        <template #header>
                            <div class="flex align-items-center gap-2">
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                                    shape="circle" />
                                <span class="font-bold white-space-nowrap">Amy Elsner</span>
                            </div>
                        </template>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </TabPanel>
                    <!-- <TabPanel>
                    <template #header>
                        <div class="flex align-items-center gap-2">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                            <span class="font-bold white-space-nowrap">Onyama Limba</span>
                        </div>
                    </template>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <div class="flex align-items-center gap-2">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                            <span class="font-bold white-space-nowrap">Ioni Bowcher</span>
                            <Badge value="2" />
                        </div>
                    </template>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel> -->
                </TabView>
                <span class="flex items-center justify-end ">
                    <span class="flex items-center justify-center gap-2">
                        <i class="pi pi-file-edit text-xl text-gray-500 cursor-pointer"></i>
                        <i class="pi pi-copy text-xl text-gray-500 cursor-pointer"></i>
                    </span>
                </span>
            </div>
        </div>
        <div class="flex items-center justify-center">
            <div class="flex items-center justify-between card w-[30%] mt-5">
                <span class="flex items-center justify-center gap-2 flex-col w-1/2">
                    <h2 class="font-bold">USD</h2>
                    <h4 class="font-medium">5000$</h4>
                </span>
                <span class="flex items-center justify-center gap-2 flex-col w-1/2">
                    <h2 class="font-bold">USD</h2>
                    <h4 class="font-medium">50000000 so'm</h4>
                </span>
            </div>
            <div class="card w-full flex items-center justify-between">
                <div class="time flex items-center gap-4">
                    <span class="flex flex-col gap-2">
                        <h1 class="font-bold text-lg">Yaratilgan vaqt</h1>
                        <h3 class="font-medium text-base text-center">01.02.2024 10:00</h3>
                    </span>
                    <span class="flex flex-col gap-2">
                        <h1 class="font-bold text-lg">Belgilangan davr</h1>
                        <h3 class="font-medium text-base text-center">01.03.2024 10:00</h3>
                    </span>
                </div>
                <div class="w-1/2 flex items-center justify-between">
                    <span class="w-1/2 flex items-center  justify-center gap-3">
                        <span class="bg-gray-200 flex items-center rounded-xl w-full">
                            <div class="w-[87%] score rounded-xl bg-green-500 h-2">
                            </div>
                        </span>
                        <span class="text-sm">87%</span>
                    </span>
                    <span class="flex flex-col gap-2">
                        <h1 class="font-bold text-lg">Topshirilgan davri</h1>
                        <h3 class="font-medium text-base text-center">01.03.2024 10:00</h3>
                    </span>
                </div>
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
<style scoped>
.card1{
    transition: all .3s linear;
}
.card1:hover{
    border-left: 3px solid rgb(2, 249, 122);
    border-right: 3px solid rgb(2, 249, 122);
}
</style>