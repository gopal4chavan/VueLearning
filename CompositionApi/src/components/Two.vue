<template>
  <div>
    Name:{{userName}}<br/>
    Age:{{userAge}}
  </div>
</template>

<script>
// reactive
import {ref, 
  // reactive, 
  // isRef, 
  // isReactive, 
  // toRefs
} from 'vue';
export default {
  setup() {
    const user = ref({name: 'Test', age: 20})
    setTimeout(() => {
      user.value.age = 30;
    }, 500)
    console.log(user);
    return {userName: user.value.name, userAge: user.value.age}
  }
}
</script>
