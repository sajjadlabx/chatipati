<script setup>
import TextBox from '../components/TextBox.vue'
import ChatHeader from '../components/ChatHeader.vue'
import ChatWelcome from '../components/ChatWelcome.vue'
</script>

<template>
  <div class="flex h-full min-h-0 flex-col" dir="rtl">
    <ChatHeader />

    <main class="flex min-h-0 flex-1 flex-col items-center overflow-y-auto px-4">
      <ChatWelcome />

      <div class="mt-auto w-full max-w-3xl py-4">
        <TextBox />
      </div>
    </main>
  </div>
</template>
