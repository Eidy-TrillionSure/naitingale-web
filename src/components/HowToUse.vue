<template>
  <section class="text-center flex flex-col w-full justify-center gap-8">
    <h1>วิธีใช้งาน</h1>
    <div class="flex flex-col md:flex-row md:justify-center gap-12">
      <div class="flex flex-col md:w-[30%] gap-y-8">
        <div
          class="bg-background rounded-2xl border-accent border-2 aspect-square shadow-lg flex items-center justify-center overflow-hidden p-12"
        >
          <img class="w-full h-full" alt="Step 1" src="@/assets/howto-step-1.svg" />
        </div>
        <div class="text-lg">
          <h1 class="text-accent">กดเริ่มตรวจสอบอาการ</h1>
          เพื่อตรวจสอบอาการของท่านกับ
          <img
            class="h-8 mx-auto my-2"
            src="@/assets/naitingale-logo-light.svg"
            alt="Naitingale Logo"
          />
        </div>
      </div>
      <div class="flex flex-col md:w-[30%] gap-y-8">
        <div
          class="bg-background rounded-2xl border-accent border-2 aspect-square shadow-lg flex items-center justify-center overflow-hidden p-12"
        >
          <img class="w-full h-full" alt="Step 2" src="@/assets/howto-step-2.svg" />
        </div>
        <div class="text-lg">
          <h1 class="text-accent">คัดกรองอาการ</h1>
          เพื่อเข้ารับการรักษา ได้ถูกต้อง
        </div>
      </div>
      <div class="flex flex-col md:w-[30%] gap-y-8">
        <div
          class="bg-background rounded-2xl border-accent border-2 aspect-square shadow-lg flex items-center justify-center overflow-hidden p-12"
        >
          <img class="w-full h-full" alt="Step 3" src="@/assets/howto-step-3.svg" />
        </div>
        <div class="text-lg">
          <h1 class="text-accent">สแกน QR Code</h1>
          เพื่อรับใบสรุปผลอาการ และแนะนำการรักษาต่อ
        </div>
      </div>
    </div>
  </section>
</template>
