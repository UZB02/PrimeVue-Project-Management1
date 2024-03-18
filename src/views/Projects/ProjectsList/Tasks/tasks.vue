<template>
    <div>
      <h1>Github Contributions</h1>
      <ul>
        <li v-for="contribution in contributions" :key="contribution.id">
          {{ contribution.date }}: {{ contribution.count }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        contributions: [],
      };
    },
    async mounted() {
      try {
        const response = await axios.get('https://api.github.com/users/your_username/events');
        const contributions = response.data.filter(event => event.type === 'PushEvent').map(event => ({
          date: event.created_at,
          count: event.payload.commits.length,
        }));
        this.contributions = contributions;
      } catch (error) {
        console.error('Error fetching Github contributions:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  /* CSS styles if needed */
  </style>
  