<template>
    <div class="flex justify-content-between align-items-center mb-2">
        <h5>Comentariya</h5>
    </div>
    <ScrollPanel style="width: 100%; height: 300px" class="flex justify-between relative">
        <div class="left w-1/2 bg-slate-100 p-3" style="border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
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
        </div>
        <div class="right flex flex-col gap-2 absolute right-0 w-1/2">
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
        </div>
    </ScrollPanel>
    <div class="bottom flex items-center gap-2 justify-between mt-1 border-t p-1 rounded-3xl">
        <div class="left">
            <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" style="width: 50px; height: 50px; border-radius: 50%;" alt="">
        </div>
        <div class="right flex items-center justify-center w-full">
            <input type="text" placeholder="Yozing" class="w-full outline-none p-2 bg-transparent " />
            <span class="flex items-center justify-center gap-2">
                <i class="pi pi-paperclip cursor-pointer"></i>
                <span class="flex items-center justify-center gap-2 p-2 w-[50px] cursor-pointer h-[50px] rounded-full bg-green-500" >
                    <i class="pi pi-send cursor-pointer text-white"></i>
                </span>
            </span>
        </div>
    </div>
</template>
<script setup></script>
<style scoped></style>
