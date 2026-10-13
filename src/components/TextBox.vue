<script setup>
import { Icon } from '@iconify/vue'


</script>

<template>
  <div class="w-full max-w-3xl mx-auto px-4">
    <form
      class="flex items-end gap-3 rounded-3xl border border-gray-200
             bg-white p-3 shadow-sm transition
             focus-within:border-purple-300
             focus-within:shadow-md"
      dir="rtl"
      @submit.prevent
    >
      <textarea
        name="promptarea"
        id="promptarea"
        placeholder="اینجا بنویسید..."
        rows="1"
        class="min-h-10 max-h-52 flex-1 resize-none bg-transparent
               px-2 py-2 text-sm leading-6 text-gray-800
               placeholder:text-gray-400 outline-none
               overflow-y-auto"
      ></textarea>

      <button
        type="submit"
        aria-label="ارسال پیام"
        class="flex h-10 w-10 shrink-0 items-center justify-center
               rounded-full bg-purple-600 text-white
               transition hover:bg-purple-700
               active:scale-95
               focus-visible:outline-none
               focus-visible:ring-2
               focus-visible:ring-purple-400
               focus-visible:ring-offset-2
               cursor-pointer"
      >
        <Icon icon="lucide:arrow-up" width="21" height="21" />
      </button>
    </form>

    <p class="mt-2 text-center text-xs text-gray-400">
      .چاتی پاتی ممکن است اشتباه کند؛ پاسخ‌ها را بررسی کنید
    </p>
  </div>
</template>
