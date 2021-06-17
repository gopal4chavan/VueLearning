<template>
  <Child fn='test' ln='test' test='test'/>
</template>

<script>
// props, context(emit, attrs and slots)
import Child from './child.vue';
export default {
  components: {
    Child
  },
  data: function(){
    return {name: 'HelloWorld'}
  }
}
</script>