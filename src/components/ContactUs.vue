<script setup lang="ts">
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import * as yup from 'yup'

import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { object } from 'yup'
import InputMask from 'primevue/inputmask'

const { defineField, handleSubmit, meta } = useForm({
  validationSchema: toTypedSchema(
    object({
      name: yup.string().required(),
      email: yup.string().required().email(),
      telephone: yup.number().required(),
      organization: yup.string().required(),
      message: yup.string().required()
    })
  )
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [telephone, telephoneAttrs] = defineField('telephone')
const [organization, organizationAttrs] = defineField('organization')
const [message, messageAttrs] = defineField('message')

const onSubmit = handleSubmit((values) => {
  console.log(values)
  window.open(
    `https://docs.google.com/forms/d/e/1FAIpQLSdUKPTrARstbUiashjFgtLg708uqbIBjw7_t0-0dmWFgBTOEw/viewform?usp=pp_url&entry.1496819275=${encodeURIComponent((name.value || '').trim())}&entry.214348020=${encodeURIComponent((email.value || '').trim())}&entry.2003020273=${encodeURIComponent((telephone.value || '').toString().trim())}&entry.1743049687=${encodeURIComponent((organization.value || '').trim())}&entry.2030350315=${encodeURIComponent((message.value || '').trim())}`,
    '_blank'
  )
})
</script>

<template>
  <form @submit="onSubmit" class="container flex flex-col gap-y-4 w-2/3 self-center">
    <h1 class="text-center">ติดต่อเพื่อใช้ผลิตภัณฑ์จาก Naitingale</h1>
    <FloatLabel class="grow" variant="on">
      <InputText required v-model="name" v-bind="nameAttrs" class="w-full" id="name" type="text" />
      <label for="name">ชื่อ<span>*</span></label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <InputText
        required
        v-model="email"
        v-bind="emailAttrs"
        class="w-full"
        id="email"
        type="email"
      />
      <label for="email">อีเมล<span>*</span></label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <InputMask
        v-model="telephone"
        v-bind="telephoneAttrs"
        mask="999-999-9999"
        class="w-full"
        id="tel"
      />
      <label for="tel">โทร</label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <InputText
        required
        v-model="organization"
        v-bind="organizationAttrs"
        class="w-full"
        id="organization"
        type="text"
      />
      <label for="organization">บริษัท/หน่วยงาน<span>*</span></label>
    </FloatLabel>
    <FloatLabel class="grow" variant="on">
      <Textarea
        required
        v-model="message"
        v-bind="messageAttrs"
        class="w-full"
        id="message"
        rows="5"
      ></Textarea>
      <label for="message">ข้อความ<span>*</span></label>
    </FloatLabel>
    <Button
      :disabled="!meta.valid"
      type="submit"
      class="rounded-full bg-accent text-background shadow-md border-0 self-center px-8 font-bold"
    >
      ส่งข้อมูล
    </Button>
  </form>
</template>
