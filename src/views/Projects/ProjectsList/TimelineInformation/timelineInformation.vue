<template>
  <div>
    <ul class="pagination">
      <li class="page-item" :class="{ 'active': page === currentPage }" v-for="page in totalPages" :key="page">
        <button class="page-link" @click="changePage(page)">{{ page }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    }
  },
  setup(props, { emit }) {
    const currentPage = ref(1);

    // Umumiy sahifalar soni
    const totalPages = 10;

    // Sa'yohatni o'zgartirish
    const changePage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        emit('page-change', page); // sahifani o'zgartirishni oldindan bildirish
      }
    };

    return {
      currentPage,
      totalPages,
      changePage
    };
  }
};
</script>

<style>
.pagination {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.page-item {
  margin-right: 5px;
}

.page-link {
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 3px;
}

.page-link:hover {
  background-color: #f0f0f0;
}

.page-item.active .page-link {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}
</style>
