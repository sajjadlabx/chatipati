<script setup>
import AppSidebar from '../components/AppSidebar.vue'
import ChatPage from '../pages/ChatPage.vue';
</script>

<template>
  <div
    dir="rtl"
    class="flex h-dvh overflow-hidden bg-gray-50 text-gray-900"
  >
    <AppSidebar />

    <main class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <ChatPage />
    </main>
  </div>
</template>
