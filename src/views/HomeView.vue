<script setup lang="ts">
import AboutUs from '@/components/AboutUs.vue'
import ContactUs from '@/components/ContactUs.vue'
import HowToUse from '@/components/HowToUse.vue'
import HeroElement from '@/components/HeroElement.vue'
import FeatureBanner from '@/components/FeatureBanner.vue'
</script>

<template>
  <main class="container flex flex-col gap-y-4 justify-center">
    <HeroElement></HeroElement>
    <HowToUse></HowToUse>
    <FeatureBanner></FeatureBanner>
    <AboutUs></AboutUs>
    <ContactUs></ContactUs>
  </main>
</template>
