<script setup lang="ts">
import {Line} from 'vue-chartjs'
import type {Ref} from "vue";


const mode: Ref<"daily" | "monthly" | "yearly"> = ref("daily")
const vues: Ref<{ labels: string[], data: number[] }> = ref({labels: [], data: []})
const chartData: Ref<{ labels: string[], datasets: { label: string, data: number[], fill: boolean, borderColor: string, tension: number }[] }> = ref({labels: [], datasets: []})

async function getData() {
  vues.value = await dashboard.stats.get.vues(mode.value)
  chartData.value = {
    labels: vues.value.labels,
    datasets: [{
      label: 'Vues',
      data: vues.value.data,
      fill: false,
      borderColor: 'rgb(255,255,255)',
      tension: 0.4,
      // @TODO: AD amuse toi avec les couleurs et la tailles des point en normal et hover
      pointRadius: 10,
      pointHoverRadius: 15,
      pointBackgroundColor: 'rgb(255,255,255)',
      pointBorderColor: 'rgb(192,0,255)',
      pointHoverBackgroundColor: 'rgb(192,0,255)',
      pointHoverBorderColor: 'rgb(255,255,255)',
    }],
  }
}

onMounted(getData)

const chartOptions = ref({
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
});
</script>

<template>
  <div>
    <input type="radio" v-model="mode" value="daily" @change="getData"> Daily
    <input type="radio" v-model="mode" value="monthly" @change="getData"> Monthly
    <input type="radio" v-model="mode" value="yearly" @change="getData"> Yearly
    <Line
        :data="chartData"
        :options="chartOptions"
    />
  </div>
</template>

<style scoped>
.content {
  flex-grow: 1;
}
</style>