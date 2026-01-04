<template>
  <div class="center-content">
    <div class="stripes-animated" />
    <div class="grid gap-4 items-center justify-center">
      <div class="widget-icon w-max mx-auto">
        <GalleryHorizontal :size="50" />
      </div>
      <Transition name="collapse">
        <div
          v-if="!hideHelptext"
          class="helptext-wrapper"
        >
          <span class="helptext text-center text-sm p-4">
            {{ helptext }}
          </span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { GalleryHorizontal } from 'lucide-vue-next';

defineProps({
  helptext: {
    type: String,
    default: ''
  },
  hideHelptext: {
    type: Boolean,
    default: false,
  }
})
</script>

<style>
  .collapse-enter-active,
  .collapse-leave-active {
    transition:
      max-height 0.35s ease,
      opacity 0.25s ease;
    overflow: hidden;
  }

  .collapse-enter-from,
  .collapse-leave-to {
    max-height: 0;
    opacity: 0;
  }

  .collapse-enter-to,
  .collapse-leave-from {
    max-height: 120px;
    opacity: 1;
  }

  .helptext {
    display: block;
  }

  .helptext-wrapper {
    overflow: hidden;
  }
</style>