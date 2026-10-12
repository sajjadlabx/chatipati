<script setup>


</script>

<template>
<section id="center" class="flex min-h-screen items-center justify-center">
  <div id="hero" class="flex flex-col items-center justify-center gap-3">
    <img :src="logoImg" class="w-24" alt="لوگو" />
    <h3 class="text-center text-2xl font-bold text-gray-900">
      سلام چطور می‌تونم کمک کنم؟
    </h3>
  </div>


</section>
  <aside
    dir="rtl"
    class="fixed right-0 top-0 z-50 flex h-dvh w-[260px] flex-col bg-[#f9f9f9] p-2 text-[#0d0d0d]"
  >
    <!-- Header -->
    <div class="mb-5 flex h-12 items-center justify-between px-2">
      <span class="text-[19px] font-semibold tracking-tight">
        چاتی پاتی
      </span>

      <button
        type="button"
        aria-label="بستن سایدبار"
        class="rounded-lg p-2 text-[#555] transition hover:bg-[#ececec]"
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none"
          stroke="currentColor" stroke-width="1.7">
          <rect x="3.5" y="4" width="17" height="16" rx="2" />
          <path d="M9 4v16" />
        </svg>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="space-y-1">
      <button
        v-for="item in actions"
        :key="item.label"
        type="button"
        class="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-[14px] transition hover:bg-[#ececec]"
        @click="handleAction(item.id)"
      >
        <svg
          viewBox="0 0 24 24"
          class="h-[19px] w-[19px] shrink-0"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            v-for="(path, index) in item.paths"
            :key="index"
            :d="path"
          />
          <circle
            v-if="item.circle"
            :cx="item.circle[0]"
            :cy="item.circle[1]"
            :r="item.circle[2]"
          />
        </svg>

        <span>{{ item.label }}</span>
      </button>
    </nav>

    <!-- History -->
    <div class="mt-7 min-h-0 flex-1 overflow-y-auto">
      <h2 class="mb-2 px-3 py-1 text-[12px] font-semibold text-[#777]">
        اخیر
      </h2>

      <div v-if="chats.length" class="space-y-0.5">
        <button
          v-for="chat in chats"
          :key="chat.id"
          type="button"
          @click="$emit('select-chat', chat)"
          class="group flex h-9 w-full items-center rounded-lg px-3 text-right text-[13.5px] transition"
          :class="
            activeChatId === chat.id
              ? 'bg-[#e5e5e5]'
              : 'hover:bg-[#ececec]'
          "
        >
          <span class="truncate">{{ chat.title }}</span>
        </button>
      </div>

      <p v-else class="px-3 py-2 text-[13px] text-[#777]">
        گفت‌وگویی وجود ندارد
      </p>
    </div>

    <!-- User profile -->
    <div class="border-t border-[#e5e5e5] pt-2">
      <button
        type="button"
        class="flex w-full items-center gap-2.5 rounded-lg p-2 text-right transition hover:bg-[#ececec]"
      >
        <div
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7546f6] text-xs font-semibold text-white"
        >
          ک
        </div>

        <div class="min-w-0 flex-1">
          <p class="truncate text-[13px] font-medium">
            کاربر چاتی پاتی
          </p>
          <p class="text-[11px] text-[#777]">رایگان</p>
        </div>

        <svg viewBox="0 0 24 24" class="h-5 w-5 text-[#555]"
          fill="none" stroke="currentColor" stroke-width="1.7">
          <circle cx="5" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import logoImg from '../assets/main_logo.png'

defineProps<{
  chats: { id: string | number; title: string }[]
  activeChatId?: string | number | null
}>()

const emit = defineEmits<{
  (event: 'select-chat', chat: { id: string | number; title: string }): void
  (event: 'new-chat'): void
  (event: 'search'): void
  (event: 'tools'): void
}>()

const actions = [
  {
    id: 'new-chat',
    label: 'گفت‌وگوی جدید',
    paths: ['M12 5v14', 'M5 12h14'],
  },
  {
    id: 'search',
    label: 'جست‌وجو',
    paths: ['m20 20-4.2-4.2'],
    circle: [10.8, 10.8, 6.8] as [number, number, number],
  },
  {
    id: 'tools',
    label: 'ابزارها',
    paths: ['M12 3v3', 'M12 18v3', 'M3 12h3', 'M18 12h3'],
    circle: [12, 12, 5] as [number, number, number],
  },
]

function handleAction(id: string) {
  if (id === 'new-chat') emit('new-chat')
  if (id === 'search') emit('search')
  if (id === 'tools') emit('tools')
}
</script>