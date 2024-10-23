<script setup lang="ts">
import Button from 'primevue/button'
</script>

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
        <Button
          as="a"
          href="https://line.me/R/ti/p/@780zbcmk?from=page&accountId=780zbcm"
          target="_blank"
          class="text-white bg-transparent hover:bg-background hover:text-accent border-0 p-1"
        >
          <font-awesome-icon size="xl" :icon="['fab', 'line']" />
        </Button>
        <Button
          as="a"
          href="https://line.me/R/ti/p/@780zbcmk?from=page&accountId=780zbcm"
          target="_blank"
          class="text-white bg-transparent hover:bg-background hover:text-accent border-0 p-1"
        >
          <font-awesome-icon size="xl" :icon="['fab', 'facebook']" />
        </Button>
      </div>
    </div>
  </footer>
</template>
