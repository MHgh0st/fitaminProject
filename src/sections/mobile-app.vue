<script setup>

</script>

<template>
  <div class="container flex items-center">
    <div class="w-1/2 flex flex-col text-neutral">
      <h3 class="font-bold text-5xl">اپلیکیشن فیتامین</h3>
      <p class="font-medium text-lg pt-5">با نصب اپلیکیشن فیتامین روی موبایل اندرویدی یا اپل خود میتونید در هر زمان
        و مکان به برنامه ورزشی تون دسترسی داشته باشید ، به صورت مستقیم با
        مربی در تماس باشید و از بانک حرکات فیتامین استفاده کنید.</p>
      <div class="grid xl:grid-cols-4 grid-cols-2 pt-8 gap-5 xl ">
        <button class="btn btn-secondary flex justify-around text-neutral text-lg  rounded-xl"><span
            class=" font-medium ">گوگل پلی</span>
          <font-awesome-icon icon="fa-brands fa-google-play"/>
        </button>
        <button class="btn btn-secondary flex justify-around text-neutral text-lg  rounded-xl"><span
            class=" font-medium ">کافه بازار</span><img
            src="../../icons/bazar.png" alt="" class="w-8"></button>
        <button class="btn btn-secondary flex justify-around text-neutral text-lg  rounded-xl"><span
            class=" font-medium ">سیب اپ</span>
          <img src="../../icons/sibap.png" alt="" class="w-8">
        </button>
        <button class="btn btn-secondary flex justify-around text-neutral text-lg  rounded-xl"><span
            class=" font-medium ">آی اپس</span>
          <img src="../../icons/iapps.png" alt="" class="w-8">
        </button>
      </div>
    </div>
    <div class="w-1/2 flex justify-end">
      <img src="../../img/mobile.png" alt="" class="w-[560px]">
    </div>
  </div>
</template>

<style scoped>

</style>