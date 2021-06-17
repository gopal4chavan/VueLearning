<template>
  <h2>From Optional API</h2>
  <input placeholder="FirstName" v-model="fn" /><br/>
  <input placeholder="LastName" v-model="ln" /><br/>
  <input placeholder="refElem" ref="refElement" /><br/>
  Age: {{age}}<br/>
  fullName: {{fullName}}<br/>
  <button @click="changeAge">Change Age</button>
  <button @click="alertRefElemVal">Alert RefElem Value</button>
</template>

<script>
// methods and computed, watch and refs 
export default {
  data: function(){
    return {fn: '', ln: '', age: 10};
  },
  methods: {
    changeAge() {
      this.age = this.age + 5;
    },
    alertRefElemVal() {
      alert(this.$refs.refElement.value);
    }
  },
  computed: {
    fullName() {
      return this.fn + this.ln || 'Enter Name';
    }
  }, 
  watch: {
    age: function(newV, oldV) {
      console.log(newV);
      console.log(oldV);
    }
  }
  
}
</script>
