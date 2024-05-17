<template>
    <section>
           <div class="container flex flex-wrap justify-center gap-2">
                <div :class="'container flex flex-wrap gap-2'">
                    <div class="card shadow-md p-3 rounded-lg w-[32%] h-[350px] max-[1100px]:w-[45%] max-[1100px]:h-[300px] flex flex-col gap-2 max-[1030px]:w-[49%] max-[1030px]:h-[350px]">
                        <div class="actions flex items-center justify-between">
                            <h2 class="font-bold text-sm text-slate-400">1</h2>
                            <div class="svg flex items-center justify-end gap-2">
                                <i v-tooltip.top="'Taxrirlash'" class="pi pi-pencil cursor-pointer" @click="() => modalEdit(JSON.stringify(item))"></i>
                                <i v-tooltip.top="`O'chirish`" class="pi pi-trash cursor-pointer" @click="modalDelet(item.id)"></i>
                                <i @click="getProjectiId(item.id)" aria-haspopup="true" aria-controls="overlay_menu" class="pi pi-ellipsis-h cursor-pointer"></i>
                            </div>
                        </div>
                        <div class="image">
                            <img @click="generalinformation(item.id)" class="rounded-xl cursor-pointer w-full h-[200px] object-cover" src="https://avatars.mds.yandex.net/i?id=672ad595cdb990ce88658fad70c678881050887e-10809483-images-thumbs&n=13" alt="Rasm" />
                        </div>
                        <div class="bottom">
                            <span class="flex flex-col gap-2">
                                <div class="flex items-center justify-between">
                                    <h1 @click="generalinformation(item.id)" class="w-[80%] whitespace-nowrap overflow-hidden text-overflow-ellipsis cursor-pointer text-2xl font-bold">
                                        Bisyor
                                    </h1>
                                </div>

                                <div class="flex items-center justify-between gap-1">
                                    <div class="flex items-center justify-center gap-2">
                                        <span class="flex items-center justify-center gap-1">
                                            <i class="pi pi-calendar"></i>
                                            <h2 class="whitespace-nowrap overflow-hidden text-overflow-ellipsis">20.10.2024</h2>
                                        </span>
                                        <span class="flex items-center justify-center gap-1">
                                            <i class="pi pi-paperclip"></i>
                                            <h2>6</h2>
                                        </span>
                                    </div>
                                    <span class="flex items-center justify-center gap-1">
                                        <div :style="`width: 50px; padding: 8px; border-radius: 10px; background-color: red`"></div>
                                    </span>
                                </div>
                                <div class="w-full flex items-center justify-center gap-3">
                                    <span class="bg-gray-200 flex items-center rounded-xl w-full">
                                        <div style="width: 50%;" class="score rounded-xl bg-green-500 h-2"></div>
                                    </span>
                                    <span class="text-sm">50%</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>
<script setup>
</script>
<style scoped>
    
</style>