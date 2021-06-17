<template>
    <div class="header">
      <input placeholder="search key..." @input="handleSearch"/><br />
      <button @click="sortAsc = !sortAsc">toggle sort</button>
    </div>
    <list :list="list" :sort-asc="sortAsc" :search-key="searchKey"/>
</template>

<script>
  import list from './list.vue';
  export default {
    components: {
      list,
    },
    data: function(){
      return {
        list: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
        sortAsc: true,
        searchKey: '',
      }
    },
    methods: {
      handleSearch(event) {
        this.sortAsc = event.target.value;
      }

    }
  }
</script>