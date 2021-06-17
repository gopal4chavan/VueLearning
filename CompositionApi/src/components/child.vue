<template>
<div>{{userName}}</div>
</template>
<script>
import { computed } from 'vue';
export default {
  props: ['fn', 'ln'],
  // computed: {
  //   userName: function() {
  //     return this.fn + ' ' + this.ln;
  //   }
  // },
  setup(props, {attrs, emit, slots}) {
    const userName = computed(function(){return props.fn + ' ' + props.ln});
    console.log(attrs);
    return{userName}
  },
  created() {
    console.log(this.$attrs);
  },
}
</script>