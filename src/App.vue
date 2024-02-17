<script setup>
import Header from "./sections/Header.vue";
import advantages from "./sections/adventages.vue";
import program from "./sections/program.vue";
import mobileApp from "./sections/mobile-app.vue"
import {nextTick} from "vue";
function setHeight(){
  const width = window.innerWidth;
  if ( width < 640){
    let extra= 650;
    if (width > 474) extra = 620;
    if (width >602) extra = 580;
    document.querySelector("#header").style.height = (document.querySelector("#advantages").clientHeight + extra) + "px"
  }
  else if(width > 640 && width<768) document.querySelector("#header").style.height = "1250px";
  else if (width > 768 && width < 1024) document.querySelector("#header").style.height = "1320px";
  else if(width > 1024) document.querySelector("#header").style.height = "550px"
}
nextTick(()=> {
  setHeight();
})
window.addEventListener('resize', setHeight)
</script>
<template>
  <div
      class="bg-secondary lg:w-[420px] xl:w-[663px] w-full absolute left-0 lg:top-0 top-[600px] rounded-3xl lg:rounded-none" id="header"></div>
  <Header></Header>
  <advantages id="advantages"></advantages>
  <program></program>
  <mobile-app></mobile-app>
</template>
<style scoped>
</style>