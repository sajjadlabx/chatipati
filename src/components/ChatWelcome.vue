
<script setup >
import logo from '../assets/main_logo.png'
const props = defineProps({
  onSelectPrompt: {
    type: Function,
    required: false,
  },
})
</script>

<template>
  <section
    class="mx-auto flex w-full max-w-3xl flex-1 flex-col
           items-center justify-center px-4 py-10"
    dir="rtl"
  >
    <div class="mb-8 text-center">
      <div
        class="mx-auto mb-5 flex h-14 w-14 items-center
               justify-center rounded-2xl bg-purple-100
               text-purple-600"
      >
        <img :src="logo" alt="" srcset="">
      </div>

      <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        امروز چطور می‌تونم کمکت کنم؟
      </h1>

      <p class="mx-auto mt-3 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
        سؤالت رو بپرس، ایده‌هات رو مطرح کن یا برای حل یک مسئله با هم شروع کنیم.
      </p>
    </div>
  </section>
</template>
