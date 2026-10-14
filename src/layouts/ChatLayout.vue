<script setup>
import { ref } from 'vue'
import AppSidebar from '../components/AppSidebar.vue'
import MobileHeader from '../components/MobileHeader.vue'
import ChatPage from '../pages/ChatPage.vue'

const activeTab = ref('chat')
const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function closeSidebar() {
  sidebarOpen.value = false
}
</script>

<template>
  <div class="relative flex h-dvh overflow-hidden bg-gray-50 text-gray-900">
    <AppSidebar
      :mobile-open="sidebarOpen"
      @close="closeSidebar"
    />

    <button
      v-if="sidebarOpen"
      type="button"
      aria-label="بستن سایدبار"
      class="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
      @click="closeSidebar"
    />

    <main class="relative flex min-w-0 flex-1 flex-col overflow-hidden">
      <MobileHeader
        :active-tab="activeTab"
        @toggle-sidebar="toggleSidebar"
        @change-tab="activeTab = $event"
      />

      <div class="min-h-0 flex-1">
        <ChatPage />
      </div>
    </main>
  </div>
</template>