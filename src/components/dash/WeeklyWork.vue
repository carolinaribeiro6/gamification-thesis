<template>
  <Bar
    class="barchart"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        datasets: [
          {
            data: [8, 7, 6, 6, 8, 0, 0],
            backgroundColor: [
              "rgba(28,62,112)",
              "rgba(28,62,112)",
              "rgba(28,62,112)",
              "rgba(28,62,112)",
              "rgba(28,62,112)",
              "rgba(28,62,112)",
              "rgba(28,62,112)",
            ],
            
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>

<style scoped>
.barchart {
}
</style>
