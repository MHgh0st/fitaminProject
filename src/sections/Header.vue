<script setup>
import navbar from "../components/navbar.vue";
</script>

<template>

  <header class="container lg:px-10">
    <navbar></navbar>
    <div class="grid grid-cols-12 w-full h-fit	">
      <div class="col-span-12 lg:col-span-6 xl:col-span-5 text-neutral self-center mt-8 lg:mt-0	">
        <p class="font-black	sm:text-5xl text-4xl lg:text-right text-center">با فیتامین؛</p> <br>
        <p class="font-bold sm:text-4xl text-3xl lg:text-right text-center">برنامه ورزشی مخصوص خودتو داشته باش</p> <br>
        <p class="font-medium lg:text-right text-center sm:text-lg text-base">با برنامه ورزشی فیتامین میتونی هر جایی که دلت میخواد تمرین کنی
          و همیشه با
          مربی ات در تماس باشی</p>
        <div class="mt-8 flex justify-center lg:justify-start " id="buttons">
          <button class="btn btn-secondary text-[#F3EAE5] text-lg">همین الان شروع کن ...</button>
          <button class="btn btn-accent text-xl mr-2 text-[#F3EAE5]">
            <font-awesome-icon icon="fa-brands fa-android"/>
            <font-awesome-icon icon="fa-brands fa-apple"/>
          </button>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6 xl:col-span-4 z-10 flex justify-center mt-10 lg:mt-0">
        <div id="headerPic"
             class=" rounded-t-full border-primary mt-20 relative body-img-bg">
          <img src="../../img/bodybuilder%20man%201.png" alt=""
               class="body_img absolute max-w-none">
        </div>
      </div>
      <div
          class="col-span-12 xl:col-span-3 xl:grid lg:hidden grid grid-cols-2 z-10 lg:mr-12 h-5/6	mt-10 lg:mt-5 sm:gap-6 gap-9 justify-items-stretch lg:justify-items-start	">
        <div class="xl:col-span-full sm:col-span-1 col-span-full justify-self-center">
          <div class="flex items-center">
            <button class="btn btn-primary w-12 p-1">
              <img src="../../icons/smartphone%201.png" class="w-fit" alt="">
            </button>
            <p class="font-bold text-primary pr-2 w-48">ارتباط مستقیم با مربی <br> در طول دوره</p>
          </div>
        </div>
        <div class="xl:col-span-full sm:col-span-1 col-span-full justify-self-center">
          <div class="flex items-center">
            <button class="btn btn-primary w-12 p-1">
              <img src="../../icons/analyzing%201.png" class="w-fit" alt="">
            </button>
            <p class="font-bold text-primary pr-2 w-48">کاملا اختصاصی برای شما، <br> هدف و شرایط جسمانیتون</p>
          </div>
        </div>
        <div class="xl:col-span-full sm:col-span-1 col-span-full justify-self-center">
          <div class="flex items-center">
            <button class="btn btn-primary w-12 p-1">
              <img src="../../icons/video%201.png" class="w-fit" alt="">
            </button>
            <p class="font-bold text-primary pr-2 w-48">ویدیو های اختصاصی <br> آموزش اجرای حرکات</p>

          </div>
        </div>
        <div class="xl:col-span-full sm:col-span-1 col-span-full justify-self-center">
          <div class=" flex items-center">
            <button class="btn btn-primary w-12 p-1">
              <img src="../../icons/Mobile%20phone.png" class="w-fit" alt="">
            </button>
            <p class="font-bold text-primary pr-2 w-48">اپلیکیشن اختصاصی موبایل</p>

          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
#headerPic {
  background-image: url("../../img/3d-rendering-modern-loft-gym-fitness 1.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.body_img{
  @apply md:w-[350px] md:right-[56px] md:top-[-85px] w-[270px] right-[50px] top-[-63px];
}
.body-img-bg {
  @apply md:w-[400px] md:h-[454px] md:rounded-b-[90rem] md:border-[15px] w-[300px] h-[349px] rounded-b-[90rem] border-[10px];
}
</style>