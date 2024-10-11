<script setup lang="ts">
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
</script>

<template>
  <section class="flex flex-col gap-y-4">
    <h1>ติดต่อเพื่อใช้ผลิตภัณฑ์จาก Naitingale</h1>
    <FloatLabel class="grow" variant="on">
      <InputText class="w-full" id="name" type="text" />
      <label for="name">ชื่อ</label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <InputText class="w-full" id="email" type="email" />
      <label for="email">อีเมล</label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <InputText class="w-full" id="tel" />
      <label for="tel">โทร</label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <InputText class="w-full" id="organization" type="text" />
      <label for="organization">บริษัท/หน่วยงาน</label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <Textarea class="w-full" id="message" rows="5"></Textarea>
      <label for="message">ข้อความ</label>
    </FloatLabel>
    <Button type="submit" class="rounded-full bg-white text-accent border-accent">ส่ง</Button>
  </section>
</template>
