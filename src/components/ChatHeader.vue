<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'

const emit = defineEmits([
  'new-chat',
  'toggle-temporary',
  'select-model',
])

const models = [
  { id: 'auto', name: 'GPT-Astra' },
  { id: 'fast', name: 'Deepseek-V4-Pro' },
  { id: 'smart', name: 'مدل هوشمند' },
]

const selectedModel = ref('auto')
const isTemporaryChat = ref(false)
const modelMenuOpen = ref(false)
const moreMenuOpen = ref(false)

function selectModel(model) {
  selectedModel.value = model.id
  modelMenuOpen.value = false
  emit('select-model', model)
}

function toggleTemporaryChat() {
  isTemporaryChat.value = !isTemporaryChat.value
  emit('toggle-temporary', isTemporaryChat.value)
}

function createNewChat() {
  emit('new-chat')
  moreMenuOpen.value = false
}

function closeMenus(event) {
  if (!event.target.closest('[data-header-menu]')) {
    modelMenuOpen.value = false
    moreMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenus)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenus)
})
</script>

<template>
  <header
    dir="rtl"
    class="relative z-30 flex h-16 shrink-0 items-center justify-between px-4 sm:px-6"
  >
    <!-- انتخاب مدل -->
    <div class="relative" data-header-menu>
      <button
        type="button"
        @click="modelMenuOpen = !modelMenuOpen; moreMenuOpen = false"
        :aria-expanded="modelMenuOpen"
        class="flex h-10 items-center gap-2 rounded-xl px-3
               text-sm font-semibold text-gray-800
               transition hover:bg-black/5"
      >
        <span>
          {{ models.find(model => model.id === selectedModel)?.name }}
        </span>
        <Icon
          icon="lucide:chevron-down"
          width="16"
          height="16"
          class="text-gray-500"
        />
      </button>

      <div
        v-if="modelMenuOpen"
        class="absolute right-0 top-12 w-56 rounded-xl
               border border-gray-200 bg-white p-1.5 shadow-lg"
      >
        <p class="px-3 py-2 text-xs text-gray-400">
          انتخاب مدل
        </p>

        <button
          v-for="model in models"
          :key="model.id"
          type="button"
          @click="selectModel(model)"
          class="flex w-full items-center justify-between rounded-lg
                 px-3 py-2.5 text-sm transition hover:bg-gray-100"
          :class="selectedModel === model.id
            ? 'bg-purple-50 text-purple-700'
            : 'text-gray-700'"
        >
          <span>{{ model.name }}</span>
          <Icon
            v-if="selectedModel === model.id"
            icon="lucide:check"
            width="16"
            height="16"
          />
        </button>
      </div>
    </div>

    <!-- ابزارها -->
    <div class="flex items-center gap-1 sm:gap-2">
      <!-- چت موقت -->
      <button
        type="button"
        @click="toggleTemporaryChat"
        :aria-pressed="isTemporaryChat"
        title="چت موقت"
        aria-label="چت موقت"
        class="flex h-10 w-10 items-center justify-center rounded-xl
               transition hover:bg-black/5"
        :class="isTemporaryChat
          ? 'bg-purple-100 text-purple-700'
          : 'text-gray-600'"
      >
        <Icon icon="lucide:ghost" width="20" height="20" />
      </button>

      <!-- چت جدید -->
      <button
        type="button"
        @click="createNewChat"
        title="چت جدید"
        aria-label="چت جدید"
        class="flex h-10 w-10 items-center justify-center rounded-xl
               text-gray-600 transition hover:bg-black/5"
      >
        <Icon icon="lucide:square-pen" width="20" height="20" />
      </button>

      <!-- منوی بیشتر -->
      <div class="relative" data-header-menu>
        <button
          type="button"
          @click="moreMenuOpen = !moreMenuOpen; modelMenuOpen = false"
          :aria-expanded="moreMenuOpen"
          title="بیشتر"
          aria-label="بیشتر"
          class="flex h-10 w-10 items-center justify-center rounded-xl
                 text-gray-600 transition hover:bg-black/5"
        >
          <Icon icon="lucide:ellipsis" width="21" height="21" />
        </button>

        <div
          v-if="moreMenuOpen"
          class="absolute left-0 top-12 w-48 rounded-xl
                 border border-gray-200 bg-white p-1.5 shadow-lg"
        >
          <button
            type="button"
            @click="toggleTemporaryChat"
            class="flex w-full items-center gap-2 rounded-lg
                   px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Icon icon="lucide:ghost" width="17" height="17" />
            {{ isTemporaryChat ? 'چت عادی' : 'چت موقت' }}
          </button>

          <button
            type="button"
            @click="createNewChat"
            class="flex w-full items-center gap-2 rounded-lg
                   px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Icon icon="lucide:plus" width="17" height="17" />
            چت جدید
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
