<template>
    <section class="flex gap-2">
     <span class="w-full">
      <span class="flex">
        <Dropdown v-model="selectedTime" :options="times" optionLabel="name"
                              placeholder="2024-yil" class=" font-bold md:w-14rem border" />
      </span>
      <div class="top flex gap-2 border p-2 rounded-lg">
        <span class="flex gap-2 border p-2 rounded-lg h-[10rem] w-[70%]">
          <div class="days mt-5 flex flex-col gap-3 items-center justify-center">
          <h1 v-for="day in weekday" class="font-sans font-medium">{{ day }}</h1>
        </div>
        <div class="month-info w-full flex flex-col gap-2">
          <div class="months flex justify-around w-full">
            <h1 v-for="month in months" class="font-sans font-bold">{{ month }}</h1>
          </div>
          <div class="info flex flex-wrap gap-1">
      <div v-for="number in year" :key="number" :class="test ? `hidden` : `block`" id="day" v-tooltip.top="`${number}`"></div>
      <div v-for="number in year2" :key="number" :class="test ? `day block` : `hidden`" id="day" v-tooltip.top="`${number}`"></div>
          </div>
        </div>
        </span>
        <div class="bottom w-[30%]">
          <div class="">
            <Timeline :value="events">
            <template #opposite="slotProps">
                <small class="p-text-secondary">{{slotProps.item.date}}</small>
            </template>
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
        </Timeline>
    </div>
      </div>
      </div>
     </span>
    </section>
  </template>
  <script setup>
  import { ref , watchEffect} from 'vue';
  
  const year=ref(365)
  const year2=ref(366)
  const test=ref(false)
  const weekday=ref(['Du','Ch','Ju'])
  const months=ref(['Yan','Fev','Mar','Apr','May','Iyn','Iyl','Avg','Sep','Okt','Noy','Dek'])
  
  const selectedTime = ref();
  const times = ref([
      { name: '2021-yil', code: '2021', },
      { name: '2022-yil', code: '2022', },
      { name: '2023-yil', code: '2023', },
      { name: '2024-yil', code: '2024', },
  ]);
  
  watchEffect(() => {
      if (selectedTime.value && selectedTime.value.code === '2023') {
          test.value = true;
      } else {
          test.value = false;
      }
  });
  
  const events = ref([
    { status: 'Loyiha bosqichlari', date: '15/01/2024 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: `Loyiha ijrochilari bo'limi`, date: '26/03/2024 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Loyiha ijrochilari davomat jadvali', date: '30/03/2024 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: `Moliyaviy ko'rsatkichlari`, date: '16/04/2024 10:00', icon: 'pi pi-check', color: '#607D8B' },
    { status: `Diogramma`, date: '16/04/2024 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);
  </script>
  <style>
    #day{
      background-color: rgb(249, 248, 248);
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