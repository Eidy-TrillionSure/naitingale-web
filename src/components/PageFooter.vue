<template>
  <footer class="bg-gradient-to-r to-[#2c78ff] from-[#00c9ff] text-white">
    <div
      class="container py-8 flex flex-col items-center gap-y-6 md:gap-y-0 md:flex-row md:justify-between"
    >
      <div class="">
        <a href="https://eidy.cloud" target="_blank" class="font-bold">{ Eidy }</a>
        <br />
        &copy; {{ new Date().getFullYear() }} Trillion Sure Co., Ltd. <br class="md:hidden" />
        &mdash; All rights reserved
      </div>
      <div class="text-2xl flex gap-x-4">
        <font-awesome-icon :icon="['fab', 'line']" />
        <font-awesome-icon :icon="['fab', 'x-twitter']" />
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </div>
    </div>
  </footer>
</template>
