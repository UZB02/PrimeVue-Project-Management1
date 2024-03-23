<template>
    <section>
        <table border="5" width="100%">
            <thead class="bg-red-500">
                <tr>
                    <th v-for="(month,index) in months" :key="index" colspan="2">{{month}}</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td class="flex" rowspan="12">
                    <div v-for="day in Freeday" :key="day">{{day}}</div>
                </td>
              </tr>
            </tbody>
        </table>
    </section>
</template>
<script setup>
import { ref } from 'vue';

const Freeday=ref(52)
const months=ref(['Yan','Fev','Mar','Apr','May','Iyn','Iyl','Avg','Sen','Okt','Noy','Dek'])
console.log(months.value);
</script>
<style>
    
</style>