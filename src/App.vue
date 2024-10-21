<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import PageFooter from './components/PageFooter.vue'

const navbar = useTemplateRef<HTMLDivElement>('navbar')
const navbarHeight = computed(() => navbar.value?.clientHeight + 'px')
</script>

<template>
  <header>
    <div ref="navbar" class="fixed w-full py-4">
      <NavBar />
    </div>
  </header>
  <RouterView class="pb-4" :style="{ paddingTop: navbarHeight }" />

  <PageFooter></PageFooter>
</template>
