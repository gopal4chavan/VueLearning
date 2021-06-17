<template>
  <div>
    Name:{{userName}}<br/>
    Age:{{userAge}}
  </div>
</template>

<script>
// reactive
import {
  ref, 
  reactive, 
  isRef, 
  isReactive, 
  toRefs
} from 'vue';
export default {
  setup() {
    // const user = ref({name: 'Test', age: 20})
    // setTimeout(() => {
    //   user.value.age = 30;
    // }, 500)
    // console.log(user);
    // return {user}

    const user = reactive({name: 'test', age: 20});
    const a = ref('t')
    setTimeout(() => {user.name = 'reactive user name'},500);
    console.log(isRef(user))
    console.log(isReactive(user));
    console.log(isRef(a))
    console.log(isReactive(a))
    
    const userRef = toRefs(user);
    return {userName: userRef.name, userAge: userRef.age}
  }
}
</script>
