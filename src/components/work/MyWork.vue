<template>
    <div class="backRec">
        <h1 class="title">My Work</h1>
        <TableChart></TableChart>
    </div>
</template>

<script>
import TableChart from '../TableChart.vue';

export default {
    components: {
        TableChart,
    }

}
</script>

<style scoped>
.title {
    font-size:large;
    padding-left: 1.25rem;
    color:black;
}

.backRec {
  background-color: white;
  width: 59.375rem;
  height: 27.5rem;
  margin-left: 2.1875rem;
  border-radius: 3%;
  padding-top: 1.25rem;
}
</style>