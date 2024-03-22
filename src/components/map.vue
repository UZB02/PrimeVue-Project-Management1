<template>
  <section>
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
    <div v-for="number in 365" :key="number" :class="day" id="day" v-tooltip.bottom="`Oy ichida o'zgartirish kiritilmadi`"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';

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
  }
</style>