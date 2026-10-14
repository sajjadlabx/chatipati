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

function changeTab(tab) {
  activeTab.value = tab
}

function openHistory() {
  // بعداً به تاریخچه گفت‌وگوها متصل می‌کنیم.
}
</script>

<template>
  <div class="flex h-dvh flex-col overflow-hidden text-white md:flex-row">
    <!-- Desktop sidebar -->
    <AppSidebar class="hidden shrink-0 md:flex" />

    <!-- Main layout -->
    <div class="flex min-h-0 min-w-0 flex-1 flex-col">
      <!-- Mobile header -->
      <MobileHeader
        :active-tab="activeTab"
        @toggle-sidebar="toggleSidebar"
        @change-tab="changeTab"
        @open-history="openHistory"
      />

      <!-- Chat content -->
      <main class="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <ChatPage />
      </main>
    </div>
  </div>
</template>