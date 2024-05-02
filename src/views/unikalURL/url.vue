<template>
    <section>
        <div class="container flex flex-col gap-4">
            <div class="top w-full h-[50vh]">
                <img class="w-full h-full object-cover rounded-lg" src="https://vp-leads.com/wp-content/uploads/2021/09/professiya-veb-analitik.jpg" alt="">
            </div>
            <div class="bottom">
                      <div class="border p-3 rounded-xl">
                        <div class="flex justify-content-between align-items-center mb-2">
                            <h5>Fayllar bo'limi. </h5>
                        </div>
                        <div class="flex justify-content-between align-items-center mb-2">
                            <div class="left">
                                <span class=""><i class="pi pi-plus bg-blue-400 pl-2 pr-2 pb-1 pt-1 rounded-lg cursor-pointer text-white flex items-center justify-center gap-2"><h2 class="font-sans  text-white font-medium text-lg">Add file</h2></i></span>
                            </div>
                            <div class="right">
                                  <div class="flex items-center shadow rounded border-0 bg-purple-white justify-between">
                            <input type="text" class="p-2 outline-none" placeholder="Search...">
                            <i class="pi pi-search mr-1 cursor-pointer"></i>
                        </div>
                            </div>
                        </div>
                        <ul class="list-none flex flex-col p-0 m-0">
                            <li  class="flex flex-column border-b-2 p-1 flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div class="cards w-full flex items-center justify-between">
                                    <div class="w-[70%] flex items-center gap-3 text-white">
                                        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="130" preview />
                                        <div class="">
                                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">rasmNomi.jpg</span>
                                            <div class="mt-1 text-600">Rasm haqida ma'lumot</div>
                                        </div>
                                    </div>
                                    <div class="mt-2 pr-5 md:mt-0 flex align-items-center gap-3 cursor-pointer">
                                    <i class="pi pi-file-edit" v-tooltip.top="'Taxrirlash'"></i>
                                        <i class="pi pi-trash" v-tooltip.top="`O'chirish`"></i>
                                        <i class="pi pi-download" v-tooltip.top="'Yuklab olish'"></i>
                                    </div>
                                </div>
                            </li>
                            <li  class="flex flex-column border-b-2 p-1 flex-wrap md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div class="cards w-full flex items-center justify-between">
                                    <div class="w-[70%] flex items-center gap-3 text-white">
                                        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="130" preview />
                                        <div class="">
                                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">TZ.doc</span>
                                            <div class="mt-1 text-600">Rasm haqida ma'lumot</div>
                                        </div>
                                    </div>
                                    <div class="mt-2 pr-5 md:mt-0 flex align-items-center gap-3 cursor-pointer">
                                         <i class="pi pi-file-edit" v-tooltip.top="'Taxrirlash'"></i>
                                        <i class="pi pi-trash" v-tooltip.top="`O'chirish`"></i>
                                        <i class="pi pi-download" v-tooltip.top="'Yuklab olish'"></i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    </section>
</template>
<script>
import { ref } from 'vue';
import router from '../../router';
const url = router.currentRoute.value;
console.log(url, 88);
</script>
<style></style>



