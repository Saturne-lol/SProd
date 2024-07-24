<script setup lang="ts">
import { Line } from 'vue-chartjs'
const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.4
  }]
})

const chartOptions = ref({
  scales: {
    y: {
      beginAtZero: true
    }
  }
})
</script>

<template>
  <div>
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