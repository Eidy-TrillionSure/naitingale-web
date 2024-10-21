<script setup lang="ts">
import AboutUs from '@/components/AboutUs.vue'
import ContactUs from '@/components/ContactUs.vue'
import HowToUse from '@/components/HowToUse.vue'
import HeroElement from '@/components/HeroElement.vue'
import FeatureBanner from '@/components/FeatureBanner.vue'
</script>

<template>
  <main class="container flex flex-col gap-y-10 justify-center">
    <HeroElement></HeroElement>
    <HowToUse id="howto"></HowToUse>
    <FeatureBanner></FeatureBanner>
    <AboutUs id="about"></AboutUs>
    <ContactUs id="contact"></ContactUs>
  </main>
</template>
