<template >
     <div class="col-12 ">
                <div class="card">
                    <h5>Vaqt ko'rsatkichi</h5>
                    <Chart type="line" :data="lineData" :options="lineOptions"></Chart>
                </div>
            </div>
</template>
<script setup>
import { ref } from 'vue';
let documentStyle = getComputedStyle(document.documentElement);
let textColor = documentStyle.getPropertyValue('--text-color');
let textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
let surfaceBorder = documentStyle.getPropertyValue('--surface-border');
const lineOptions = ref(null);
const lineData = ref(null);

lineData.value = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 65,45],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue('--primary-500'),
            borderColor: documentStyle.getPropertyValue('--primary-500'),
            tension: 0.4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 20, 85],
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
<style scoped>
    
</style>