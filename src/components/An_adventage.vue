<script setup>

  const props = defineProps(['title' , 'imgAdd']);
</script>

<template>
  <div class="w-5/6	rounded-3xl border-4 lg:border-[#0DBFA7] border-primary z-10 h-fit grid grid-cols-12 relative">
    <div id="texts" class="flex flex-col justify-around col-span-8 lg:text-neutral text-primary p-3">
      <p class="font-bold text-xl pb-3">{{title}}</p>
      <p class="text-sm z-20">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
        روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
    </div>
    <div class="col-span-4 w-full">
      <img :src="imgAdd" class="absolute w-28 lg:w-32 bottom-0 left-0">
    </div>


  </div>
</template>

<style scoped>

</style>