<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

defineProps<{
  mobileOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

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
  emit('close')
}

function selectConversation(id: number) {
  activeConversation.value = id
  emit('close')
}
</script>

<template>
  <aside
    id="app-sidebar"
    class="fixed inset-y-0 right-0 z-50 flex h-dvh w-72 shrink-0 flex-col bg-[#f9f9f9]
           text-gray-800 shadow-2xl transition-transform duration-300
           md:relative md:z-auto md:h-screen md:w-auto md:shadow-none md:transition-all"
    :class="[
      isOpen ? 'md:w-64' : 'md:w-[68px]',
      mobileOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0',
    ]"
    dir="rtl"
  >
    <div class="flex h-16 shrink-0 items-center justify-between px-3">
      <span v-if="isOpen" class="text-xl font-bold tracking-tight">
        چاتی پاتی
      </span>

      <button
        type="button"
        aria-label="بستن سایدبار"
        class="flex h-10 w-10 items-center justify-center rounded-xl
               text-gray-600 transition hover:bg-gray-200 md:hidden"
        @click="emit('close')"
      >
        <Icon icon="lucide:x" width="21" height="21" />
      </button>

      <button
        type="button"
        aria-label="جمع یا باز کردن سایدبار"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
        class="hidden h-10 w-10 items-center justify-center
               rounded-xl text-gray-600 transition hover:bg-gray-200 md:flex"
      >
        <Icon icon="lucide:panel-left" width="21" height="21" />
      </button>
    </div>

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
