<script setup>
import {computed, ref} from "vue";

const props = defineProps(['title' , 'text' , 'value' , 'selected']);
const emit = defineEmits(['update-selected'])
const arrowId = `arrow-${Math.random().toString(36).substr(2, 9)}`;
const isActive = computed(() => props.selected === props.value);
function click(){
  emit('update-selected', props.value);
}
</script>

<template>
  <div class="w-full xl:h-24 lg:h-20 sm:h-24 h-20 border-4 border-secondary mt-5 cursor-pointer md:rounded-[30px] rounded-[24px] overflow-hidden flex items-center relative" @click="click">
    <div class="pr-5 text-neutral">
      <p class="font-semibold text-xl md:text-3xl lg:text-xl xl:text-3xl">{{title}}</p>
      <p class="text-lg hidden-text">{{text}}</p>
    </div>
    <div class="w-10 h-10 md:w-14 md:h-14 lg:w-10 lg:h-10 xl:w-14 xl:h-14 border-4 border-secondary rounded-[14px] absolute left-[-56px] transition-all ease-out" :class="{active:isActive}" :id="arrowId">
      <img src="../../icons/Arrow%20right.png" class="w-1/2 md:w-2/3 lg:w-1/2 xl:w-2/3 m-auto mt-2">
    </div>

  </div>
</template>

<style scoped>
.active{
  @apply left-[22px] md:left-[32px]
}
@media (max-width: 480px) {
  .hidden-text{
    @apply hidden
  }
}
</style>

