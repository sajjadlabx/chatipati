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
    class="flex h-14 w-full shrink-0 items-center justify-between bg-black px-3 text-white md:hidden"
    dir="ltr"
  >
    <!-- دکمه سایدبار -->
    <button
      type="button"
      aria-label="باز کردن سایدبار"
      class="flex size-9 items-center justify-center rounded-lg hover:bg-white/10"
      @click="emit('toggle-sidebar')"
    >
      <Icon icon="lucide:panel-left" width="20" height="20" />
    </button>

    <!-- انتخاب Chat / Work -->
    <div class="flex items-center rounded-full bg-[#111] p-0.5">
      <button
        type="button"
        class="flex h-9 min-w-[92px] items-center justify-center rounded-full px-4 text-sm transition-colors"
        :class="
          activeTab === 'chat'
            ? 'bg-[#202020] text-white'
            : 'text-white/45'
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
            ? 'bg-[#202020] text-white'
            : 'text-white/45'
        "
        @click="emit('change-tab', 'work')"
      >
        <Icon icon="lucide:sparkles" width="14" height="14" />
        Work
      </button>
    </div>

    <!-- تاریخچه / گفت‌وگوی جدید -->
    <button
      type="button"
      aria-label="باز کردن تاریخچه"
      class="flex size-9 items-center justify-center rounded-lg hover:bg-white/10"
      @click="emit('open-history')"
    >
      <Icon icon="lucide:message-circle" width="20" height="20" />
    </button>
  </header>
</template>