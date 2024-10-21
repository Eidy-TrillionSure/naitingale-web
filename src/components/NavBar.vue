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
  <Menubar
    class="container py-4 rounded-full bg-opacity-60 shadฃow-lg backdrop-blur-md border border-white/20 z-[5000]"
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
        <Button class="bg-gradient-to-r from-accent-light to-accent rounded-full">
          เริ่มตรวจสอบ
        </Button>
      </div>
    </template>
  </Menubar>
</template>
