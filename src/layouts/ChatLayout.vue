<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import AppSidebar from '../components/AppSidebar.vue'
import ChatPage from '../pages/ChatPage.vue'

const mobileSidebarOpen = ref(false)

watch(mobileSidebarOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

function closeMobileSidebar() {
  mobileSidebarOpen.value = false
}

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    dir="rtl"
    class="relative flex h-dvh overflow-hidden bg-gray-50 text-gray-900"
  >
    <AppSidebar
      :mobile-open="mobileSidebarOpen"
      @close="closeMobileSidebar"
    />

    <button
      v-if="mobileSidebarOpen"
      type="button"
      aria-label="بستن منوی کناری"
      class="fixed inset-0 z-40 bg-gray-950/20 backdrop-blur-[2px] md:hidden"
      @click="closeMobileSidebar"
    />

    <main class="relative flex min-w-0 flex-1 flex-col overflow-hidden">
      <header
        dir="rtl"
        class="flex h-14 shrink-0 items-center gap-3 border-b border-gray-200/70 bg-white/80 px-4 backdrop-blur md:hidden"
      >
        <button
          type="button"
          aria-label="باز کردن منوی کناری"
          aria-controls="app-sidebar"
          :aria-expanded="mobileSidebarOpen"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 active:bg-gray-200"
          @click="mobileSidebarOpen = true"
        >
          <Icon icon="lucide:menu" width="23" height="23" />
        </button>

        <span class="text-base font-bold tracking-tight text-gray-900">
          چاتی پاتی
        </span>
      </header>

      <div class="min-h-0 flex-1">
        <ChatPage />
      </div>
    </main>
  </div>
</template>
