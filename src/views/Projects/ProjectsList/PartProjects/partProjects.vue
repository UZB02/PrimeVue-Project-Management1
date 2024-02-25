<template>
    <div>
        <h1>Loyihaning qism loyihalari</h1>
    </div>
    <div class="dop-zone">
        <div class="drag-el">
            
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const items = ref([
    {
        id: 0,
        title: 'List 0',
        list:1
    },
    {
        id: 1,
        title: 'List 1',
        list:1
    },
    {
        id: 2,
        title: 'List 2',
        list:2
    },
])

const getList = (list) => {
    return items.value.filter((item) => item.list==list)
}
getList(),
</script>
<style scoped>
    
</style>