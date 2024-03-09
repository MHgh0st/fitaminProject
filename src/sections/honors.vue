<script setup>
import {ref} from "vue";

  const nextBtn1 = ref(null)
  const lastBtn1 = ref(null)
const nextBtn2 = ref(null)
const lastBtn2 = ref(null)
  const carousel = ref(null)
  const number = ref(null)
  const image = ref(null)
const texts = [
  {
    title : 'داستان اختصاصی  پرستو اسماعیلی',
    weight : '12 کیلوگرم کاهش وزن'
  },
  {
    title : 'داستان اختصاصی  ابوالفضل براتی',
    weight : '7 کیلوگرم کاهش وزن'
  },
  {
    title : 'داستان اختصاصی  حامد اصلحی',
    weight : '32 کیلوگرم کاهش وزن'
  }
]
window.addEventListener("load", ()=>{
  carousel.value.scrollLeft = -1188;
  setText()
  if (window.screen.width < 640){
    document.querySelector("#con").style.height =(2* carousel.value.clientHeight)+ "px";
    // console.log(carousel.value.clientHeight)
  }
})
let active = 1;
function setLink(){
  nextBtn1.value.href = `#slide${active}`
  lastBtn1.value.href = `#slide${active}`
  nextBtn2.value.href = `#slide${active}`
  lastBtn2.value.href = `#slide${active}`
}
function nextClicked(){
  active++;
  if (active === 4) active = 1;
  setLink()
  setText()
  number.value.innerHTML = `0${active}`
}
function lastClicked(){
  active--;
  if (active === 0) active = 3;
  setLink()
  setText()
  number.value.innerHTML = `0${active}`
}
const title = ref()
const weight = ref()
function setText(){
  title.value = texts[active-1].title
  weight.value = texts[active-1].weight
}

</script>

<template>
  <div id="con" class="container lg:h-[460px] h-[600px] relative mt-40 flex lg:flex-row flex-col  items-center">
      <div class="lg:w-2/3 w-fit grid grid-rows-6 lg:h-full h-1/6">
        <p class="sm:font-bold font-semibold sm:text-5xl text-4xl text-neutral">قهرمانان فیتامین</p>
        <div class="row-start-4 pr-6 lg:flex items-center text-neutral hidden">
          <a href="#slide2" ref="nextBtn1" @click="nextClicked"><font-awesome-icon icon="fa-solid fa-chevron-up" class="rotate-90 w-5"/></a>
          <p class="text-xl font-medium px-2" ><span class="text-7xl font-bold" ref="number">01</span>/03</p>
          <a href="#slide3" ref="lastBtn1" @click="lastClicked"><font-awesome-icon icon="fa-solid fa-chevron-up" class="rotate-[-90deg] w-5"/></a>
        </div>
      </div>
      <div ref="carousel" class="carousel lg:w-1/3 md:w-2/5 w-1/2 xl:h-full relative z-10 xl:bottom-10 lg:left-10">
        <div ref="image" id="slide3" class="item">
          <img src="../../img/item1.png" alt="" class="rounded-[2.5rem]">
        </div>
        <div id="slide2" class="item">
          <img src="../../img/item2.png" alt="" class="rounded-[2.5rem]">
        </div>
        <div id="slide1" class="item">
          <img src="../../img/item3.png" alt="" class="rounded-[2.5rem]">
        </div>
      </div>
    <div id="gCon" class="absolute w-full lg:h-1/3 h-4/6 bg-[#0DBFA7] bottom-0 rounded-3xl text-[#F3EAE5] flex flex-col lg:justify-center justify-end">
      <div class="flex justify-around mb-auto sm:mt-16 mt-8 text-4xl lg:hidden">
        <a href="#slide2" ref="nextBtn2" @click="nextClicked" class="pl-[150px]"><font-awesome-icon icon="fa-solid fa-chevron-up" class="rotate-90 w-5 "/></a>

        <a href="#slide3" ref="lastBtn2" @click="lastClicked"><font-awesome-icon icon="fa-solid fa-chevron-up" class="rotate-[-90deg] w-5"/></a>
      </div>
      <div class="lg:pr-7 pb-10 lg:text-start text-center">
        <p class="font-semibold sm:text-4xl text-2xl align-middle">{{title}}</p>
        <p class="sm:text-2xl pt-1">{{weight}}</p>
      </div>
    </div>
    </div>
</template>

<style scoped>
.item{
  @apply  right-16 relative carousel-item w-full mx-5;
}
.carousel{
  filter: drop-shadow(0px 0px 20px);
}
</style>