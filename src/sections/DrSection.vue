<script setup>

</script>

<template>
  <div class="container lg:h-[323px] h-[402px] md:mt-10 mt-20">
    <div id="container"
         class="h-full bg-contain bg-no-repeat bg-center w-5/6 mx-auto flex justify-center items-center">
      <div class="lg:bg-[#3E4046] bg-[#0DBFA7] xl:w-4/6 lg:w-9/12 md:w-1/2 w-full xl:h-1/2 lg:h-2/5 h-full m-auto rounded-3xl flex lg:flex-row flex-col">
        <div class="lg:bg-[#F3EAE5] bg-neutral lg:h-full h-1/2 lg:w-2/5 w-full div-round  flex justify-between relative lg:px-4 lg:overflow-visible overflow-hidden">
          <div><img src="../../img/DrImage.png" alt="" class="2xl:w-[135px] xl:w-[105px] lg:w-[80px] w-[130px] absolute lg:bottom-0 right-4 bottom-[-40px]"></div>
          <div id="texts" class="self-center lg:pl-0 pl-6">
            <p class="text-sm font-semibold lg:text-[#3E4046] text-primary">دکتر محمد صادق کرمانی</p>
            <p class="text-xs pt-1 lg:text-[#3E4046] text-primary">ارائه دهنده برترین رژیم غذایی در ایران</p>
          </div>
        </div>
        <div class="lg:h-full h-1/2 lg:w-1/2 w-full lg:px-0 px-5 mx-auto flex flex-col justify-center lg:py-4 py-0">
          <img src="../../img/Quote.png" alt="" class="xl:w-8 w-7 ">
          <p class="text-[#F3EAE5] font-semibold py-2 text-xs text-center">تیم فیتامین با ارائه برنامه ورزشی، زیر نظر مربی " تاثیر به سزایی در کاهــش وزن و افــــزایش وزن کاربران ما داشته است "</p>
          <img src="../../img/Quote.png" alt="" class="xl:w-8 w-7 rotate-180 self-end">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.div-round{
  @apply lg:rounded-r-3xl lg:rounded-tl-[100px] lg:rounded-bl-[150px] rounded-t-3xl rounded-bl-[160px] rounded-br-[200px];
}
@media (min-width: 1024px){
  #container {
    background-image: url("../../img/DrSectionBg.png");
  }
}



</style>