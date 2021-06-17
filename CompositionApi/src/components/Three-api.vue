<template>
  <h2>From Optional API</h2>
  <input placeholder="FirstName" v-model="fn" /><br/>
  <input placeholder="LastName" v-model="ln" /><br/>
  <input placeholder="refElem" ref="refElement" /><br/>
  Age: {{age}}<br/>
  fullName: {{fullName}}<br/>
  <button @click="changeAge">Change Age</button>
  <button @click="alertRefElemVal">show RefElem Val</button>
</template>

<script>
import { computed, ref, watch, reactive, toRefs } from 'vue';
// methods and computed props  and watchers and refs
export default {
  // setup() {
  //   const fn = ref('');
  //   const ln = ref('');
  //   const age = ref(10);
  //   const refElement = ref(null);

  //   function changeAge() {
  //     age.value = age.value + 5;
  //   }

  //   const fullName = computed(function(){
  //     return fn.value + ' ' + ln.value;
  //   })

  //   watch(age, (n, o) => {
  //     console.log(n);
  //     console.log(o);
  //   })

  //   function alertRefElemVal() {
  //     console.log(refElement);
  //     alert(refElement.value.value);
  //   }

  //   return {
  //     fn, ln, age, changeAge, fullName, alertRefElemVal, refElement
  //   }
  // }

  setup() {
    const user = reactive({fn: '', ln: '', age: 10});
    const refElement = ref(null);
    const userRefs = toRefs(user);
    function changeAge() {
      user.age = user.age + 5;
    }
    function alertRefElemVal() {
      alert(refElement.value.value);
    }
    const fullName = computed(function(){return user.fn + ' ' + user.ln});
    watch(userRefs.age, function(nv, ov){console.log(nv, ov)});
    return {fullName, fn: userRefs.fn, ln: userRefs.ln, age: userRefs.age, changeAge, alertRefElemVal, refElement}
  }
  
}
</script>
