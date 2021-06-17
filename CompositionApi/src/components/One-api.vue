<template>
  {{name}}
</template>

<script>
import {ref} from 'vue';
export default {
  setup() {
    let name = ref('hello world from setup method');
    console.log(name);
    setTimeout(() => {
      name.value = 'test';
    console.log(name);

    })
    return {name};
  }

}
</script>


