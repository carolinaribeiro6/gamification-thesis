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
        <!-- <tbody slot="body" slot-scope="{displayData}">
          <tr v-for="row in displayData" :key="row.id">
            <td>{{ row.name }}</td>
            <td>{{ row.age }}</td>
            <td>{{ row.email }}</td>
            <td>
                {{ row.address.street }}, 
                {{ row.address.city }} 
                {{ row.address.state}}
            </td>
          </tr>
        </tbody> -->
      </v-table>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          items: [
            { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { age: 38, first_name: 'Jami', last_name: 'Carney' }
          ]
        }
      }
    }
  </script>