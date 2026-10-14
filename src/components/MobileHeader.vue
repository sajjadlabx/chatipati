<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  activeTab: {
    type: String,
    default: 'chat',
  },
})

const emit = defineEmits([
  'toggle-sidebar',
  'change-tab',
  'open-history',
])
</script>

<template>
  <header
    class="relative z-10 flex h-14 w-full shrink-0 items-center justify-between border-b border-gray-200/70 bg-gray-50 px-3 text-gray-700 md:hidden"
    dir="ltr"
  >
    <!-- Sidebar -->
    <button
      type="button"
      aria-label="باز کردن سایدبار"
      class="flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-gray-200/70"
      @click="emit('toggle-sidebar')"
    >
      <Icon icon="lucide:panel-left" width="20" height="20" />
    </button>

    <!-- Tabs -->
    <div class="flex shrink-0 items-center rounded-full bg-gray-200/70 p-0.5">
      <button
        type="button"
        :aria-pressed="activeTab === 'chat'"
        class="flex h-9 min-w-[76px] items-center justify-center rounded-full px-4 text-sm transition-colors"
        :class="
          activeTab === 'chat'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-800'
        "
        @click="emit('change-tab', 'chat')"
      >
        Chat
      </button>

      <button
        type="button"
        :aria-pressed="activeTab === 'work'"
        class="flex h-9 min-w-[76px] items-center justify-center gap-1 rounded-full px-4 text-sm transition-colors"
        :class="
          activeTab === 'work'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-800'
        "
        @click="emit('change-tab', 'work')"
      >
        <Icon icon="lucide:sparkles" width="14" height="14" />
        Work
      </button>
    </div>

    <!-- History -->
    <button
      type="button"
      aria-label="باز کردن تاریخچه"
      class="flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-gray-200/70"
      @click="emit('open-history')"
    >
      <Icon icon="lucide:message-circle" width="20" height="20" />
    </button>
  </header>
</template>