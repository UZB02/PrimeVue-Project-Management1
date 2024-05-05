<template>
    <div class="flex justify-content-between align-items-center mb-2">
        <h5>Comentariya</h5>
    </div>
    <ScrollPanel style="width: 100%; height: 300px" class="flex justify-between relative">
        <div class="left w-full bg-slate-100 p-3" style="border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
            <span class="flex items-center  gap-2">
                       <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 30px; height: 30px; border-radius: 50%;" alt="">
                       <span>
                        <h1 class="font-bold">Muhsinbek Mirzamatov</h1>
                        <h3 class="text-sm text-gray-400">Front-End</h3>
                       </span>
            </span>
               <div class="bottom w-full">
            <!-- <div class="top">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 100%; object-fit: cover; border-radius: 12px; height: 50px;" alt="">
            </div> -->
            <div class="text w-full">
               <p class="w-full text-base font-medium">
                 1-File yuklashda xatoliklar bor
                2-User qo'shish bo'limini tiklab chiqish kerak
               </p>
            </div>
        </div>
        </div>
        <!-- <div class="right flex flex-col gap-2 absolute right-0 w-1/2">
         <span class=" w-full bg-slate-100 p-3" style="border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
               <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 30px; height: 30px; border-radius: 50%;" alt="">
               <div class="bottom w-full">
            <div class="top">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 100%; object-fit: cover; border-radius: 12px; height: 50px;" class="hidden" alt="">
            </div>
            <div class="text">
                1-File yuklashda xatoliklar bor
                2-User qo'shish bo'limini tiklab chiq
            </div>
        </div>
         </span>
         <span class="w-full bg-slate-100 p-3" style="border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
               <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 30px; height: 30px; border-radius: 50%;" alt="">
               <div class="bottom w-full">
            <div class="top">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 100%; object-fit: cover; border-radius: 12px; height: 50px;" alt="">
            </div>
            <div class="text">
                1-File yuklashda xatoliklar bor
                2-User qo'shish bo'limini tiklab chiq
            </div>
        </div>
         </span>
        </div> -->
    </ScrollPanel>
    <div class="bottom flex items-center gap-2 justify-between mt-1 border-t p-1 rounded-3xl">
        <div class="left">
            <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 50px; height: 50px; border-radius: 50%;" alt="">
        </div>
        <div class="right flex items-center justify-center w-full">
            <input type="text" placeholder="Yozing" class="w-full outline-none p-2 bg-transparent " />
            <span class="flex items-center justify-center gap-2">
                 <i class="pi pi-paperclip cursor-pointer" @click="openFileSelector"></i>
  <input ref="fileInput" type="file" style="display: none;" @change="onFileChange" />
                <span class="flex items-center justify-center gap-2 p-2 w-[40px] transition active:scale-90 cursor-pointer h-[40px] rounded-full bg-green-500" >
                    <i class="pi pi-send cursor-pointer text-white"></i>
                </span>
            </span>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const fileInput = ref(null);

  const openFileSelector = () => {
    fileInput.value.click();
  };
    const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Fayl bilan qaysi amalni bajaramiz
    console.log('Tanlangan fayl:', selectedFile);
  };
</script>
<style scoped></style>
