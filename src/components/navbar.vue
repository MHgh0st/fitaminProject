<script setup>
import toggle from "./darkModeToggle.vue";

</script>

<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content">
      <nav class="navbar">
        <div class="navbar-start lg:w-2/6	">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost text-secondary lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
          <a href="#" class="hidden lg:inline"><img src="../../img/logo.png" alt="" class="w-14"></a>
        </div>
        <div class="navbar-center flex lg:hidden">
          <a href="#"><img src="../../img/logo.png" alt="" class="w-10"></a>

        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal menu-lg px-1 text-neutral">
            <li tabindex="0">
              <details>
                <summary>برنامه های ورزشی</summary>
                <ul class="p-2 text-primary w-full bg-neutral">
                  <li><a>برنامه ورزشی کاهش وزن</a></li>
                  <li><a>برنامه تناسب اندام</a></li>
                  <li><a>برنامه بدنسازی</a></li>
                  <li><a>برنامه ورزش در منزل</a></li>
                </ul>
              </details>
            </li>
            <li><a>مجله</a></li>
            <li><a>فروشگاه</a></li>
            <li><a>تماس با ما</a></li>
          </ul>
        </div>
        <div class="navbar-end flex justify-end">
          <toggle></toggle>
          <a href="#" class="text-neutral text-lg pr-10 z-10 font-bold hidden lg:inline">ثبت نام / ورود</a>
        </div>
      </nav>
    </div>
    <div class="drawer-side z-40">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-primary text-neutral flex 	">
        <li class="menu-title text-2xl p-5 flex flex-row"><img src="../../img/logo.png" alt="" class="w-10 ml-2">فیتامین</li>
        <li tabindex="0" class="pb-2">
          <details>
            <summary>برنامه های ورزشی</summary>
            <ul class="p-2">
              <li><a>برنامه ورزشی کاهش وزن</a></li>
              <li><a>برنامه تناسب اندام</a></li>
              <li><a>برنامه بدنسازی</a></li>
              <li><a>برنامه ورزش در منزل</a></li>
            </ul>
          </details>
        </li>
        <li class="pb-2"><a>مجله</a></li>
        <li class="pb-2"><a>فروشگاه</a></li>
        <li><a>تماس با ما</a></li>
        <li class="absolute bottom-5"><a href="#" class="text-neutral text-lg font-bold">ثبت نام / ورود</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu > li {
  @apply xl:pl-[50px];
}

.hamburgerMenu {
  width: 97vw;
}

@media (min-width: 640px) {
  .hamburgerMenu {
    width: 640px;
  }
}

@media (min-width: 768px) {
  .hamburgerMenu {
    width: 768px;
  }
}

@media (min-width: 1024px) {
  .hamburgerMenu {
    width: 1024px;
  }
}
</style>