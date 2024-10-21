<script setup lang="ts">
import AboutUs from '@/components/AboutUs.vue'
import ContactUs from '@/components/ContactUs.vue'
import HowToUse from '@/components/HowToUse.vue'
import HeroElement from '@/components/HeroElement.vue'
</script>

<template>
  <main class="container flex flex-col gap-y-4 justify-center">
    <HeroElement></HeroElement>
    <HowToUse></HowToUse>
    <AboutUs></AboutUs>
    <ContactUs></ContactUs>
  </main>
</template>
