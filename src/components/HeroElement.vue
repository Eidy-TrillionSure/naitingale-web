<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <section class="flex">
    <div class="flex flex-col justify-center gap-y-6">
      <h1>
        Helping you <span class="text-accent">navigate your symptoms</span> to the most suitable
        care
      </h1>
      <span>
        ประเมินอาการอย่างแม่นยำ และให้คำแนะนำทันที
        <br />มั่นใจได้ว่าคุณจะได้รับการรักษาที่เหมาะสมจากแพทย์ผู้เชี่ยวชาญ
      </span>
    </div>
    <div class="flex flex-col items-center relative">
      <!-- background: radial-gradient(24.37% 35.3% at 58.72% 48.92%, #449BFC 0%, #FAFCFF 93.5%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
 -->
      <img
        class="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent to-background to-65%"
        src="@/assets/naitingale-avatar.png"
        alt="Naitingale avatar"
      />
      <div class="flex flex-col items-center bottom-8 absolute gap-y-4">
        <Button
          class="bg-gradient-to-r from-accent-light to-accent rounded-full border-0 shadow-lg font-bold"
        >
          เริ่มตรวจสอบอาการ
        </Button>
        <div class="text-center text-[.625rem]">
          *ไม่ใช่การวินิจฉัยทางการแพทย์<br />
          *ไม่สามารถใช้แทนการวินิจฉัยทางการแพทย์<br />
          *ควรได้รับการตรวจจากแพทย์โดยตรง
        </div>
      </div>
    </div>
  </section>
</template>
