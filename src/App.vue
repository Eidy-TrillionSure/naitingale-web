<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import PageFooter from './components/PageFooter.vue'

const navbar = useTemplateRef<HTMLDivElement>('navbar')
</script>

<template>
  <header>
    <div ref="navbar" class="fixed w-full py-4">
      <NavBar />
    </div>
  </header>

  <RouterView :style="{ paddingTop: navbar?.clientHeight + 'px' }" />

  <PageFooter></PageFooter>
</template>
