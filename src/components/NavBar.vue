<script setup lang="ts">
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import type { MenuItem } from 'primevue/menuitem'
import { RouterLink } from 'vue-router'

const items: MenuItem[] = [
  { label: 'วิธีการใช้งาน', url: '#howto' },
  { label: 'เกี่ยวกับเรา', url: '#about' },
  { label: 'ติดต่อเรา', url: '#contact' }
]
</script>

<template>
  <Menubar
    class="container py-4 rounded-full bg-opacity-70 bg-background shadow-[0_0_30px_-10px_rgba(0,0,0,0.3)] backdrop-blur-md border border-white/20 font-bold"
    :model="items"
    :pt="{ rootList: { class: 'justify-end grow gap-x-2' } }"
  >
    <template #start>
      <RouterLink to="/">
        <img class="h-10" src="../assets/naitingale-logo-light.svg" alt="Naitingale Logo" />
      </RouterLink>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <Button class="bg-gradient-to-r from-accent-light to-accent rounded-full border-0 ml-4">
          เริ่มตรวจสอบอาการ
        </Button>
      </div>
    </template>
  </Menubar>
</template>
