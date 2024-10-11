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
    class="container py-4 rounded-full"
    :model="items"
    :pt="{ rootList: { class: 'justify-end grow' } }"
  >
    <template #start>
      <RouterLink to="/">
        <img class="h-10" src="../assets/naitingale-logo-light.svg" alt="Naitingale Logo" />
      </RouterLink>
    </template>
    <!-- <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex justify-self-center items-center" v-bind="props.action">
          <span :class="item.icon"></span>
          <span class="ml-2">{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down',
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }
            ]"
          ></i>
        </a>
      </template> -->
    <template #end>
      <div class="flex items-center gap-2">
        <!-- <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" /> -->
        <Button class="bg-gradient-to-r from-accent-light to-accent rounded-full">
          เริ่มตรวจสอบ
        </Button>
      </div>
    </template>
  </Menubar>
  <!-- </nav> -->

  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav> -->
</template>
