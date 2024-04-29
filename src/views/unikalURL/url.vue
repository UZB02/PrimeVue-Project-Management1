<template>
    <div>Bu taskning unikal urli</div>
</template>
<script>
import { ref } from 'vue';
import router from '../../router';
const url = router.currentRoute.value;
console.log(url, 88);
</script>
<style></style>
