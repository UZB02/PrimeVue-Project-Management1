<template>
  <nav class="flex items-center justify-center space-x-2">
    <button
      class="px-3 py-1 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
    >
      Previous
    </button>
    <button
      v-for="page in totalPages"
      :key="page"
      :class="[
        'px-3 py-1 rounded-md',
        currentPage === page ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'
      ]"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>
    <button
      class="px-3 py-1 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
      :disabled="currentPage === totalPages"
      @click="goToPage(currentPage + 1)"
    >
      Next
    </button>
  </nav>
</template>

<script>
export default {
  props: ['currentPage', 'totalPages'],
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('goToPage', page);
      }
    },
  },
};
</script>

<style scoped>
/* Optional: Customize styles further if needed */
</style>