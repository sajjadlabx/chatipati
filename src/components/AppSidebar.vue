
<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const isOpen = ref(true)

const conversations = ref([
  { id: 1, title: 'یادگیری Vue و TypeScript' },
  { id: 2, title: 'طراحی رابط کاربری چت‌بات' },
  { id: 3, title: 'ساخت پروژه با Tailwind CSS' },
  { id: 4, title: 'معماری پروژه‌های فرانت‌اند' },
])

const activeConversation = ref<number | null>(1)

function newChat() {
  activeConversation.value = null
}

function selectConversation(id: number) {
  activeConversation.value = id
}
</script>

<template>
  <aside
    class="flex h-screen shrink-0 flex-col bg-[#f9f9f9]
           text-gray-800 transition-all duration-300"
    :class="isOpen ? 'w-64' : 'w-[68px]'"
    dir="rtl"
  >
    <!-- Header -->
    <div class="flex h-16 items-center justify-between px-3">
      <span v-if="isOpen" class="text-xl font-bold tracking-tight">
        چاتی پاتی
      </span>

      <button
        type="button"
        aria-label="باز و بسته کردن سایدبار"
        @click="isOpen = !isOpen"
        class="flex h-10 w-10 items-center justify-center
               rounded-xl text-gray-600 transition
               hover:bg-gray-200"
      >
        <Icon icon="lucide:panel-left" width="21" height="21" />
      </button>
    </div>

    <!-- Main actions -->
    <div class="space-y-1 px-2 pt-2">
      <button
        type="button"
        @click="newChat"
        class="flex h-10 w-full items-center gap-3 rounded-xl
               px-3 text-sm transition hover:bg-gray-200"
        :class="{ 'justify-center': !isOpen }"
      >
        <Icon icon="lucide:square-pen" width="21" height="21" />
        <span v-if="isOpen">چت جدید</span>
      </button>

      <button
        type="button"
        class="flex h-10 w-full items-center gap-3 rounded-xl
               px-3 text-sm transition hover:bg-gray-200"
        :class="{ 'justify-center': !isOpen }"
      >
        <Icon icon="lucide:search" width="21" height="21" />
        <span v-if="isOpen">جستجوی گفتگوها</span>
      </button>
    </div>

    <!-- Conversation history -->
    <div v-if="isOpen" class="mt-7 flex-1 overflow-y-auto px-3">
      <p class="mb-3 px-2 text-xs font-semibold text-gray-500">
        گفتگوهای اخیر
      </p>

      <div class="space-y-1">
        <button
          v-for="conversation in conversations"
          :key="conversation.id"
          type="button"
          @click="selectConversation(conversation.id)"
          class="w-full truncate rounded-lg px-3 py-2.5 text-right
                 text-sm transition hover:bg-gray-200"
          :class="
            activeConversation === conversation.id
              ? 'bg-gray-200'
              : ''
          "
        >
          {{ conversation.title }}
        </button>
      </div>
    </div>

    <div v-else class="flex-1"></div>

    <!-- Bottom actions -->
    <div class="border-t border-gray-200 p-2">
      <button
        type="button"
        class="flex h-11 w-full items-center gap-3 rounded-xl
               px-3 text-sm transition hover:bg-gray-200"
        :class="{ 'justify-center': !isOpen }"
      >
        <Icon icon="lucide:settings" width="21" height="21" />
        <span v-if="isOpen">تنظیمات</span>
      </button>

      <button
        type="button"
        class="flex h-12 w-full items-center gap-3 rounded-xl
               px-2 transition hover:bg-gray-200"
        :class="{ 'justify-center': !isOpen }"
      >
        <div
          class="flex h-9 w-9 shrink-0 items-center justify-center
                 rounded-full bg-purple-600 text-sm font-semibold text-white"
        >
          چ
        </div>

        <div v-if="isOpen" class="min-w-0 flex-1 text-right">
          <p class="truncate text-sm font-medium">کاربر</p>
          <p class="text-xs text-gray-500">حساب کاربری</p>
        </div>

        <Icon
          v-if="isOpen"
          icon="lucide:ellipsis"
          width="20"
          height="20"
        />
      </button>
    </div>
  </aside>
</template>
