<template>
    <div>
        <input type="text" v-model="input" placeholder="Select Tab" />
        <div class="item tab" v-for="tab in filteredList()" :key="tab">
            <p>{{ tab }}</p>
        </div>
        <div class="item error" v-if="input&&!filteredList().length">
            <p>No results found!</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
let input = ref("");
const tabs = ["Work", "ioGamify - Kudos", "Work Logs"];
function filteredList() {
  return tabs.filter((tab) =>
    tab.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>
