<template>
    <div>
        <h1>{{ map }}</h1>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import router from '@/router';
const map=router.currentRoute.value.name
console.log(map);
</script>