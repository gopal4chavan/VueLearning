<template>
  <div class="list">
    <ul>
      <li v-for="item in listItems" :key="item" class="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import {watch} from 'vue';
export default {
  props: ['sortAsc', 'searchKey', 'list'],
  setup(props, {emit}) {
    let updatedList = [...props.list];
    watch([props.sortAsc, props.searchKey], function(newVals, oldVals) {
      if(newVals[0] !== oldVals[0]) {
        sortList(newVals[0])
      }
      if(newVals[1] !== oldVals[1]) {
        searchList(newVals[1]);
      }
    })
    function sortList(sortAsc) {
      updatedList = [...props.list];
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
</script>