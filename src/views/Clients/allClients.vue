<template>
    <header class="w-full flex items-center justify-center">
        <div class="w-[96%] flex items-center justify-between pb-3 pt-2">
            <button @click="addClient" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-1"><i class="pi pi-plus"></i> Add Client</button>
        </div>
    </header>
    <section class="w-full  h-6">
        <ClientsCard></ClientsCard>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from '../../router';
import ClientsCard from '../Clients/clientsCard.vue';

const addClient = () => {
    router.push('/addClient');
};
</script>
<style scoped></style>
