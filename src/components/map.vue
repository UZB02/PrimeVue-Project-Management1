<template>
  <section>
    <div class="top flex gap-2">
      <div class="flex gap-2">
      <div v-for="(month, monthIndex) in months" :key="monthIndex" class="month flex gap-2 flex-col">
        <h3 class="text-center">{{ month.name }}</h3>
        <div class="days">
          <div v-for="(day, dayIndex) in month.days" :key="dayIndex" class="day" v-tooltip.top="tooltipText(day, month)">
            
          </div>
        </div>
      </div>
    </div>
    <div class="left flex flex-col gap-2">
      <span class="flex justify-end">
        <Dropdown v-model="selectedTime" :options="times" optionLabel="name"
                              placeholder="2024-yil" class=" font-bold md:w-14rem border" />
      </span>
    </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

  const selectedTime = ref();
  const times = ref([
      { name: '2021-yil', code: '2021', },
      { name: '2022-yil', code: '2022', },
      { name: '2023-yil', code: '2023', },
      { name: '2024-yil', code: '2024', },
  ]);

const months = ref([
  { name: 'Yan', days: 31 },
  { name: 'Fev', days: 28 },
  { name: 'Mar', days: 31 },
  { name: 'Apr', days: 30 },
  { name: 'May', days: 31 },
  { name: 'Iyun', days: 30 },
  { name: 'Iyul', days: 31 },
  { name: 'Aug', days: 31 },
  { name: 'Sen', days: 30 },
  { name: 'Okt', days: 31 },
  { name: 'Noy', days: 30 },
  { name: 'Dek', days: 31 }
]);

function tooltipText(day, month) {
  const dayName = ['Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha', 'Ya'][new Date(2022, month.days, day).getDay()];
  return `${day}. ${month.name} - ${dayName}`;
}
</script>

<style>
/* Add your CSS styles here */
.days {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}
.day {
  background-color: rgba(128, 128, 128, 0.63);
  padding: 5px;
  text-align: center;
  border-radius: 1px;
  width: 5px;
  height: 5px;
}
</style>
