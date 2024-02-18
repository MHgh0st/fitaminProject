<script setup>

</script>

<template>
  <div class="container flex items-center md:px-0 px-4">
    <div class="md:w-1/2 w-full flex flex-col text-neutral md:justify-start justify-center">
      <h3 class="font-bold lg:text-5xl text-4xl">اپلیکیشن فیتامین</h3>
      <p class="font-medium lg:text-lg text-sm pt-5">با نصب اپلیکیشن فیتامین روی موبایل اندرویدی یا اپل خود میتونید در هر زمان
        و مکان به برنامه ورزشی تون دسترسی داشته باشید ، به صورت مستقیم با
        مربی در تماس باشید و از بانک حرکات فیتامین استفاده کنید.</p>
      <div class="grid xl:grid-cols-4 grid-cols-2 pt-8 gap-4 justify-items-center lg:w-80 xl:w-full">
        <button class="btn btn-secondary flex justify-around text-neutral text-lg  rounded-xl w-full"><span
            class=" font-medium ">گوگل پلی</span>
          <font-awesome-icon icon="fa-brands fa-google-play"/>
        </button>
        <button class="btn btn-secondary flex justify-around text-neutral text-lg rounded-xl w-full"><span
            class=" font-medium ">کافه بازار</span><img
            src="../../icons/bazar.png" alt="" class="w-8"></button>
        <button class="btn btn-secondary flex justify-around text-neutral text-lg  rounded-xl w-full"><span
            class=" font-medium ">سیب اپ</span>
          <img src="../../icons/sibap.png" alt="" class="w-8">
        </button>
        <button class="btn btn-secondary flex justify-around text-neutral text-lg  rounded-xl w-full"><span
            class=" font-medium ">آی اپس</span>
          <img src="../../icons/iapps.png" alt="" class="w-8">
        </button>
      </div>
    </div>
    <div class="w-1/2  justify-end hidden md:flex">
      <img src="../../img/mobile.png" alt="" class="w-[560px]">
    </div>
  </div>
</template>

<style scoped>

</style>