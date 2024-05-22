<template>
    <div>
      <v-table :data="items">
        <thead>
          <th>Date</th>
          <th>Project</th>
          <th>Category</th>
          <th>SubCategory</th>
          <th>Description</th>
          <th>Hours</th>
        </thead>
        <tr v-for="item in items" :key="item">
          <td v-for="field in item" :key="field">{{field}}</td>
        </tr>
      </v-table>
    </div>
  </template>
  
  <script type="text/<script>">
  export default {
    data() {
      return {
        items: [
          { date: "2024-03-25", project: 13, area: "ioEnergy", task: "Gestão", description: "Gestão de Tarefas", hours: "CFP" }
        ]
      }
    }
    /*async created() {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyP2S6CajCrBm6uAbJX42pORmKpyODnAj_4Mj1t0LycWHzvYILNC6cjUZpVn7Sw8KKa8A/exec?endpoint=workData");
      const workData = await response.json();
      this.items = workData;
    }*/
  }
  </script>
