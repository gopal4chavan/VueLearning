<template>
  hello
</template>

<script>
// LifeCycle hooks
// Options API                          Composition API
// beforeCreated, created               No need, we need to do it in setup Method
// beforeMount, mounted                 onBeforeMount and onMounted
// beforeUpdate, updated                onBeforeUpdate, onUpdated
// beforeUnmount, unmounted             onBeforeUnmounted and onUnmounted
import {onBeforeMount} from 'vue';
export default {
  // beforeMount() {
  //   console.log('beforeMount');
  // }

  setup(){
    onBeforeMount(function(){console.log('onbeforeMount')})
  }
  
}
</script>