<template>
    <section class="flex flex-col-reverse justify-center gap-2">
        <div class="left flex items-center justify-center gap-2">
                 <Card>
                    <template v-slot:title>
                        <div class="flex align-items-center justify-content-between mb-0">
                            <h5>Sprint davrida bajarilishi zarur bo’lgan ishlar haqida umumiy ma’lumot</h5>
                            <Button icon="pi pi-plus" class="p-button-text" @click="toggle" />
                        </div>
                        <Menu id="config_menu" ref="menuRef" :model="cardMenu" :popup="true" />
                    </template>

                    <template v-slot:content>
                        <p class="line-height-3 m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </template>
                </Card>
                 <Card>
                    <template v-slot:title>
                        <div class="flex align-items-center justify-content-between mb-0">
                            <h5>Sprint so’nggida olinishi zarur bo’lgan natijalar haqida ma’lumot</h5>
                            <Button icon="pi pi-plus" class="p-button-text" @click="toggle" />
                        </div>
                        <Menu id="config_menu" ref="menuRef" :model="cardMenu" :popup="true" />
                    </template>

                    <template v-slot:content>
                        <p class="line-height-3 m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </template>
                </Card>
        </div>
        <div class="right w-full">
              <div class="w-1/2 h-[26rem]">
                            <div class="card h-full">
                                <h5>Linear Chart</h5>
                                <Chart type="line" :data="lineData" :options="lineOptions"></Chart>
                            </div>
                        </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';


const lineData = ref(null);
const lineOptions = ref(null);
const cardMenu = ref([
    { label: 'Save', icon: 'pi pi-fw pi-check' },
    { label: 'Update', icon: 'pi pi-fw pi-refresh' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);
const menuRef = ref(null);

const toggle = () => {
    menuRef.value.toggle(event);
};

let documentStyle = getComputedStyle(document.documentElement);
let textColor = documentStyle.getPropertyValue('--text-color');
let textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
let surfaceBorder = documentStyle.getPropertyValue('--surface-border');

lineData.value = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue('--primary-500'),
            borderColor: documentStyle.getPropertyValue('--primary-500'),
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue('--primary-200'),
            borderColor: documentStyle.getPropertyValue('--primary-200'),
            tension: 0.4
        }
    ]
};

lineOptions.value = {
    plugins: {
        legend: {
            labels: {
                fontColor: textColor
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        },
        y: {
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        }
    }
};
</script>
<style scoped></style>