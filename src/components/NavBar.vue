<script setup lang="ts">
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import type { MenuItem } from 'primevue/menuitem'
import { RouterLink } from 'vue-router'

const items: MenuItem[] = [
  { label: 'วิธีการใช้งาน' },
  { label: 'เกี่ยวกับเรา' },
  { label: 'ติดต่อเรา' }
]
</script>

<template>
  <!-- <nav class="fixed w-full top-4"> -->
  <Menubar
    class="container py-4 rounded-full bg-opacity-60 shadow-lg backdrop-blur-md border border-white/20"
    :model="items"
    :pt="{ rootList: { class: 'justify-end grow' } }"
  >
    <template #start>
      <RouterLink to="/">
        <img class="h-10" src="../assets/naitingale-logo-light.svg" alt="Naitingale Logo" />
      </RouterLink>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <!-- <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" /> -->
        <Button class="bg-gradient-to-r from-accent-light to-accent rounded-full">
          เริ่มตรวจสอบ
        </Button>
      </div>
    </template>
  </Menubar>
</template>
