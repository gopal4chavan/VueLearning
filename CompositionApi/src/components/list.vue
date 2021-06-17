<template>
  <div>
    <div class="header">
      <input placeholder="search key..." @input="handleSearch"/><br />
      <button @click="toggleSort">toggle sort</button>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in listItems" :key="item" class="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {watch} from 'vue';
  export default {
    data: function(){
      return {
        originalList: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
        listItems: [],
        sortAsc: true,
        searchKey: '',
      }
    },
    created() {
      this.listItems = [...this.originalList];
    },
    methods: {
      toggleSort() {
        this.sortAsc = !this.sortAsc;
      },
      handleSearch(event) {
        this.searchKey = event.target.value;
      }
    },
    watch: {
      sortAsc: function(value) {
        this.listItems = [...this.originalList]
        this.listItems.sort();
        if(!value) {
          this.listItems.reverse();
        }
      },
      searchKey: function(value) {
        this.listItems = this.originalList.filter(item => item.includes(value));
      }
    },

    setup({sortAsc, searchKey, list}, {emit}) {
      let updatedList = [...list];
      watch([sortAsc, searchKey], function(newVals, oldVals) {
        if(newVals[0] !== oldVals[0]) {
          sortList(newVals[0])
        }
        if(newVals[1] !== oldVals[1]) {
          searchList(newVals[1]);
        }
      })
      function sortList(sortAsc) {
        updatedList = [...list];
        updatedList.sort();
        if(!sortAsc) {
          updatedList.reverse();
          emit('list-updated', updatedList);
        }
      }

      function searchList(searchKey) {
        updatedList.filter(item => item.includes(searchKey))
      }
      return {}
    }
  }

  // function useSort(list, sortAsc){
  //   return function(, sortAsc) {
  //     list
  //   }
  // }
</script>
