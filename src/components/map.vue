<template>
  <section>
    <span class="flex justify-end">
      <Dropdown v-model="selectedTime" :options="times" optionLabel="name"
                            placeholder="2024-yil" class=" font-bold md:w-14rem border" />
    </span>
    <div class="top flex gap-2 border p-2 rounded-lg">
      <div class="days mt-5 flex flex-col gap-5 items-center justify-center">
        <h1 class="font-sans font-medium">Du</h1>
        <h1 class="font-sans font-medium">Ch</h1>
        <h1 class="font-sans font-medium">Ju</h1>
      </div>
      <div class="month-info w-full flex flex-col gap-2">
        <div class="months flex justify-around w-full">
          <h1 class="font-sans font-bold">Yan</h1>
          <h1 class="font-sans font-bold">Fev</h1>
          <h1 class="font-sans font-bold">Mar</h1>
          <h1 class="font-sans font-bold">Apr</h1>
          <h1 class="font-sans font-bold">May</h1>
          <h1 class="font-sans font-bold">Iyn</h1>
          <h1 class="font-sans font-bold">Iyl</h1>
          <h1 class="font-sans font-bold">Avg</h1>
          <h1 class="font-sans font-bold">Sep</h1>
          <h1 class="font-sans font-bold">Okt</h1>
          <h1 class="font-sans font-bold">Noy</h1>
          <h1 class="font-sans font-bold">Dek</h1>
        </div>
        <div class="info flex flex-wrap gap-1">
    <div v-for="number in year" :key="number" :class="day" id="day" v-tooltip.bottom="`${number}`"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';

const year=ref(365)
const selectedTime = ref();
const times = ref([
    { name: '2021-yil', code: '2021', },
    { name: '2022-yil', code: '2022', },
    { name: '2023-yil', code: '2023', },
    { name: '2024-yil', code: '2024', },
]);

const info=ref([
  {
    id: 1,
    text: 'text',
    bg: 'bg-red-500'
  }
])
</script>
<style>
  #day{
    background-color: gainsboro;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    box-shadow: 0 0 0px 1px black;
  }
  #day:nth-child(71){
    background-color: rgba(58, 249, 0, 0.642);
  }
  #day:nth-child(63){
    background-color: rgb(58, 249, 0);
  }
  #day:nth-child(61){
    background-color: rgb(58, 249, 0);
  }
  #day:nth-child(62){
    background-color: rgba(58, 249, 0, 0.646);
  }
  #day:nth-child(64){
    background-color: rgba(58, 249, 0, 0.502);
  }
  #day:nth-child(84){
    background-color: rgb(58, 249, 0);
  }
  #day:nth-child(100){
    background-color: rgba(58, 249, 0, 0.669);
  }
  #day:nth-child(101){
    background-color: rgb(58, 249, 0);
  }
  #day:nth-child(102){
    background-color: rgba(58, 249, 0, 0.63);
  }
  #day:nth-child(105){
    background-color: rgb(58, 249, 0);
  }
  #day:nth-child(160){
    background-color: rgba(58, 249, 0, 0.861);
  }
  #day:nth-child(162){
    background-color: rgb(58, 249, 0);
  }
  #day:nth-child(163){
    background-color: rgb(58, 249, 0);
  }
  #day:nth-child(200){
    background-color: rgba(58, 249, 0, 0.276);
  }
  #day:nth-child(210){
    background-color: rgba(58, 249, 0, 0.379);
  }
  #day:nth-child(211){
    background-color: rgb(58, 249, 0);
  }
  #day:nth-child(212){
    background-color: rgba(58, 249, 0, 0.4);
  }
  #day:nth-child(300){
    background-color: rgba(58, 249, 0, 0.621);
  }
  #day:nth-child(305){
    background-color: rgba(58, 249, 0, 0.368);
  }
  #day:nth-child(306){
    background-color: rgba(58, 249, 0, 0.648);
  }
  #day:nth-child(307){
    background-color: rgba(58, 249, 0, 0.568);
  }
  #day:nth-child(308){
    background-color: rgb(58, 249, 0);
  }
</style>