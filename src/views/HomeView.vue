<script setup lang="ts">
import AboutUs from '@/components/AboutUs.vue'
import ContactUs from '@/components/ContactUs.vue'
import HowToUse from '@/components/HowToUse.vue'
import HeroElement from '@/components/HeroElement.vue'
import FeatureBanner from '@/components/FeatureBanner.vue'
</script>

<template>
  <main class="flex flex-col gap-y-10 justify-center">
    <HeroElement></HeroElement>
    <HowToUse id="howto"></HowToUse>
    <div
      class="w-full self-center h-40 -mb-10 -mt-32 bg-[linear-gradient(180deg,_rgba(250,_252,_255,_0)_72.5%,_rgba(68,_155,_252,_0.8)_100%)]"
    ></div>
    <FeatureBanner></FeatureBanner>
    <AboutUs id="about"></AboutUs>
    <div
      class="w-full self-center h-40 -mt-10 -mb-32 rotate-180 bg-[linear-gradient(180deg,_rgba(250,_252,_255,_0)_72.5%,_rgba(68,_155,_252,_0.8)_100%)]"
    ></div>
    <ContactUs id="contact"></ContactUs>
  </main>
</template>
