<script setup lang="ts">
import AboutUs from '@/components/AboutUs.vue'
import ContactUs from '@/components/ContactUs.vue'
import HowToUse from '@/components/HowToUse.vue'
import InteractiveHero from '@/components/InteractiveHero.vue'
</script>

<template>
  <main class="container flex flex-col gap-y-4">
    <InteractiveHero></InteractiveHero>
    <HowToUse></HowToUse>
    <AboutUs></AboutUs>
    <ContactUs></ContactUs>
  </main>
</template>
