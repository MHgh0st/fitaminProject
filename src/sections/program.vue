<script setup>
import optionButton from "../components/optionButton.vue"
import {nextTick, onMounted, ref} from "vue";

let Buttons = [
  {
    title: "کاهش وزن",
    text: "اگه میخوای کاهش وزن موندگار داشته باشی",
    value: "weight-loss"
  },
  {
    title: "افزایش وزن",
    text: "اگه میخوای دیگه لاغر نباشی",
    value: "weight-gain"
  },
  {
    title: "تناسب اندام",
    text: "اگه میخوای تناسب اندامت رو حفظ کنی",
    value: "fitness"
  },
  {
    title: "برنامه بدنسازی",
    text: "اگه میخوای عضله سازی کنی",
    value: "bodybuilding"
  }
];
let selected = ref(null);
function setHeight(El){
  let max;
  if (El.clientHeight > document.querySelector("#background").clientHeight) max = El.clientHeight
  else max = document.querySelector("#background").clientHeight
  if (window.screen.width > 1024 && window.screen.width < 1280) document.querySelector("#imgContainer").style.height = "500px"
  else if(window.screen.width > 1280) document.querySelector("#imgContainer").style.height = "600px"
  else document.querySelector("#imgContainer").style.height = max + "px";

}
function updateSelected(value) {
  const notSelectedEl = document.querySelector("#notSelected");
  const weightLoss = document.querySelector("#weightLoss");
  const weightGain = document.querySelector("#weightGain")
  const fitness = document.querySelector("#fitness")
  const bodybuilding = document.querySelector("#bodybuilding")
  if (value === "weight-loss") {
    notSelectedEl.style.right = "1000px"
    weightGain.style.right = "1000px"
    fitness.style.right = "1000px"
    bodybuilding.style.right = "1000px"
    weightLoss.style.right = "0px"
    setHeight(weightLoss)
  } else if (value === "weight-gain") {
    notSelectedEl.style.right = "1000px"
    weightLoss.style.right = "1000px"
    fitness.style.right = "1000px"
    bodybuilding.style.right = "1000px"
    weightGain.style.right = "0px"
    setHeight(weightGain)
  } else if (value === "fitness") {
    notSelectedEl.style.right = "1000px"
    weightLoss.style.right = "1000px"
    fitness.style.right = "0px"
    bodybuilding.style.right = "1000px"
    weightGain.style.right = "1000px"
    setHeight(fitness)
  } else {
    notSelectedEl.style.right = "1000px"
    weightLoss.style.right = "1000px"
    fitness.style.right = "1000px"
    bodybuilding.style.right = "0px"
    weightGain.style.right = "1000px"
    setHeight(bodybuilding)
  }
  selected.value = value;
}
window.addEventListener('load' , ()=>{
  if (window.screen.width < 1024){
    let max ;
    if (document.querySelector("#notSelected").clientHeight > document.querySelector("#background").clientHeight) max = document.querySelector("#notSelected").clientHeight
    else max = document.querySelector("#background").clientHeight
    document.querySelector("#imgContainer").style.height = max + "px";
  }
})

</script>

<template>
  <div class="container flex flex-col lg:flex-row mt-24 lg:px-10 lg:h-[500px] xl:h-[600px] h-fit md:px-0 px-4" >
    <div class="lg:w-1/2 w-full lg:h-full sm:h-1/2 h-[39%] flex flex-col">
      <option-button v-for="(Button , index) in Buttons" :key="index" :title="Button.title" :text="Button.text"
                     :value="Button.value" :selected="selected" @update-selected="updateSelected"></option-button>
      <button class="btn btn-secondary mt-5 md:rounded-[15px] rounded-[10px] text-[#F3EAE5] text-3xl">بزن بریم!</button>
    </div>
    <div class="lg:w-1/2 w-full overflow-hidden relative lg:mt-0 mt-7 mr-0 lg:mr-5" id="imgContainer">
      <img src="../../img/Vector.png" alt="" class="w-4/5 md:w-3/5 lg:w-4/5 absolute left-0 right-0 top-0 bottom-0 mx-auto" id="background">
      <img src="../../img/program/nothing.png" id="notSelected" alt=""
           class="w-[505px] absolute left-0 right-0 top-0 bottom-0 mx-auto transition-all duration-700	">
      <img src="../../img/program/weightLoss.png" id="weightLoss" alt=""
           class="w-[492px] absolute left-0 right-[1000px] top-0 bottom-0 mx-auto transition-all duration-700	">
      <img src="../../img/program/weightGain.png" id="weightGain" alt=""
           class="w-[637px] absolute left-0 right-[1000px] top-0 bottom-0 mx-auto transition-all duration-700">
      <img src="../../img/program/fitness.png" id="fitness" alt=""
           class="w-[540px] absolute left-0 right-[1000px] top-0 bottom-0 mx-auto transition-all duration-700">
      <img src="../../img/program/bodybuilding.png" id="bodybuilding" alt=""
           class="w-[649px] absolute left-0 right-[1000px] top-0 bottom-0 mx-auto transition-all duration-700">
    </div>
  </div>
</template>

<style scoped>

</style>