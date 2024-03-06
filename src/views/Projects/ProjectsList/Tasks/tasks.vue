<template>
   <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addProject"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-1"><i
                    class="pi pi-plus"></i> ADD
                Project</button>
            <!-- <h2 class="font-semibold">Loyihaning umumiy ma’lumotlarini ko’rish</h2> -->
            <span class="flex items-center justify-center gap-3 p-input-icon-right">
                <button type="button" @click="rolsToggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                    <!-- <Menu ref="menu" id="overlay_menu" :model="profil" :popup="true"  />
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" /> -->
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
</template>
<script setup>
</script>
<style scoped>
    
</style>