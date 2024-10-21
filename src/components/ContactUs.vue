<script setup lang="ts">
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { computed, ref } from 'vue'

const name = ref('')
const email = ref('')
const telephone = ref('')
const organization = ref('')
const message = ref('')

const target = computed(
  () =>
    `https://docs.google.com/forms/d/e/1FAIpQLSdUKPTrARstbUiashjFgtLg708uqbIBjw7_t0-0dmWFgBTOEw/viewform?usp=pp_url&entry.1496819275=${name.value}&entry.214348020=${email.value}&entry.2003020273=${telephone.value}&entry.1743049687=${organization.value}&entry.2030350315=${message.value}`
)
</script>

<template>
  <section class="flex flex-col gap-y-4 w-2/3 self-center">
    <h1 class="text-center">ติดต่อเพื่อใช้ผลิตภัณฑ์จาก Naitingale</h1>
    <FloatLabel class="grow" variant="on">
      <InputText required v-model="name" class="w-full" id="name" type="text" />
      <label for="name">ชื่อ<span>*</span></label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <InputText required v-model="email" class="w-full" id="email" type="email" />
      <label for="email">อีเมล<span>*</span></label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <InputText v-model="telephone" class="w-full" id="tel" />
      <label for="tel">โทร</label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <InputText required v-model="organization" class="w-full" id="organization" type="text" />
      <label for="organization">บริษัท/หน่วยงาน<span>*</span></label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <Textarea required v-model="message" class="w-full" id="message" rows="5"></Textarea>
      <label for="message">ข้อความ<span>*</span></label>
    </FloatLabel>
    <Button
      as="a"
      :href="target"
      target="_blank"
      type="submit"
      class="rounded-full bg-accent text-background shadow-md border-0 self-center px-8 font-bold"
    >
      ส่งข้อมูล
    </Button>
  </section>
</template>
