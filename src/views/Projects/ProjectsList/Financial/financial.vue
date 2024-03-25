<template>
    <section class="flex">
        <div class="top w-1/2">
            <div class="card">
                <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
            </div>
        </div>
        <div class="bottom w-1/2">
            <div class="card flex justify-content-center">
        <Chart type="pie" :data="chartData2" :options="chartOptions2" class="w-full md:w-30rem" />
    </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData1();
    chartOptions.value = setChartOptions1();
});

const chartData = ref();
const chartOptions = ref();
onMounted(() => {
    chartData2.value = setChartData2();
    chartOptions2.value = setChartOptions2();
});

const chartData2 = ref();
const chartOptions2 = ref();

const setChartData1 = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: documentStyle.getPropertyValue('--cyan-500'),
                data: [50, 25, 12, 48, 90, 76, 42, 23, 44, 33, 22, 11]
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: documentStyle.getPropertyValue('--gray-500'),
                data: [21, 84, 24, 75, 37, 65, 34, 88, 24, 12, 51, 41]
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: documentStyle.getPropertyValue('--green-500'),
                data: ["21", 84, 24, 75, 37, 65, 34, 88, 24, 12, 51, 41]
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                data: [41, 52, 24, 74, 23, 21, 32, 42, 32, 34, 53, 41]
            }
        ]
    };
};
const setChartOptions1 = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}

const setChartData2 = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--gray-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--gray-400')]
            }
        ]
    };
};

const setChartOptions2 = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };
};
</script>