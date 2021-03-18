<template>
  <!-- <div class="container">
    <div class="block"></div>
    <button>Animate</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
  <div class="container">
    <div v-if="showPara" class="paragraph">Simple toggleable paragraph...</div>
    <button @click="showPara=!showPara">Toggle Paragraph</button>
  </div>

  <div class="container">
    <!-- <transition> -->
  <transition @before-enter="beforEnterParaOne" @enter="enterParaOne" @after-enter="afterEnterParaOne">
      <div v-if="showParaOne" class="one-paragraph">Simple toggleable paragraph...</div>
    </transition>
    <button @click="showParaOne=!showParaOne">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition>
      <div v-if="showParaTwo" name="two" class="two-paragraph">Simple toggleable paragraph...</div>
    </transition>
    <button @click="showParaTwo=!showParaTwo">Toggle Paragraph</button>
  </div>

</template>  

<script>
export default {
  data() {
    return { dialogIsVisible: false, showPara: false, showParaOne: false, showParaTwo: false };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },

    // Transition Events
    beforEnterParaOne(el) {
      console.log('Before Enter');
      console.log(el);
      console.time('enterTransition')
    },
    enterParaOne(el) {
      console.log('Enter');
      console.log(el);
      console.timeEnd('enterTransition');
    },
    afterEnterParaOne(el) {
      console.log('After Enter');
      console.log(el);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.paragraph, .one-paragraph, .two-paragraph {
  padding: 20px 10px;
}
/* WITH CSS */
.paragraph {
  animation: para-anime-start .3s ease-out forwards;
}


@keyframes para-anime-start {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes para-anime-end {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(30px);
  }
}

/* WITH VUE */
.v-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}
.v-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.v-enter-active {
  transition: all 2s ease-out;
}
.v-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.v-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
.v-leave-active {
  transition: all .3s ease-out; 
}

/*  PREFIX WITH NAME PROP*/
/* .one-enter-active {
  animation: para-anime-start .7s ease-in;
}
.one-leave-active {
  animation: para-anime-end .7s ease-out;
}
.two-enter-active {
  animation: para-anime-start .3s ease-in;
}
.two-leave-active {
  animation: para-anime-end .3s ease-out;
} */

</style>