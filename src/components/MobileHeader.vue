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
    class="flex h-14 w-full shrink-0 items-center justify-between border-b border-gray-200 bg-white px-3 text-gray-900 md:hidden"
    dir="ltr"
  >
    <button
      type="button"
      aria-label="باز کردن سایدبار"
      class="flex size-9 items-center justify-center rounded-lg transition hover:bg-gray-100"
      @click="emit('toggle-sidebar')"
    >
      <Icon icon="lucide:panel-left" width="20" height="20" />
    </button>

    <div class="flex items-center rounded-full bg-gray-100 p-0.5">
      <button
        type="button"
        class="flex h-9 min-w-[92px] items-center justify-center rounded-full px-4 text-sm transition-colors"
        :class="
          activeTab === 'chat'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500'
        "
        @click="emit('change-tab', 'chat')"
      >
        Chat
      </button>

      <button
        type="button"
        class="flex h-9 min-w-[92px] items-center justify-center gap-1 rounded-full px-4 text-sm transition-colors"
        :class="
          activeTab === 'work'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500'
        "
        @click="emit('change-tab', 'work')"
      >
        <Icon icon="lucide:sparkles" width="14" height="14" />
        Work
      </button>
    </div>

    <button
      type="button"
      aria-label="باز کردن تاریخچه"
      class="flex size-9 items-center justify-center rounded-lg transition hover:bg-gray-100"
      @click="emit('open-history')"
    >
      <Icon icon="lucide:message-circle" width="20" height="20" />
    </button>
  </header>
</template>