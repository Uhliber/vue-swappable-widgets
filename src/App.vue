<template>
  <main class="swappable-wrapper grid grid-cols-12 gap-4 w-full h-full p-4">
    <div class="col-span-9 grid grid-rows-6 gap-4">
      <div class="row-span-4 box">
        <WidgetGallery class="swappable-item transition-colors" />
      </div>
      <div class="row-span-2 grid grid-cols-12 gap-4">
        <div class="col-span-5 box">
          <WidgetCamera class="swappable-item transition-colors" />
        </div>
        <div class="col-span-7 box">
          <WidgetVideo class="swappable-item transition-colors" />
        </div>
      </div>
    </div>
    <div class="col-span-3 grid grid-rows-6 gap-4">
      <div class="row-span-2 box">
        <WidgetGame class="swappable-item transition-colors" />
      </div>
      <div class="row-span-4 box">
        <WidgetMusic class="swappable-item transition-colors" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { Swappable, Plugins } from '@shopify/draggable';

import WidgetGallery from './components/WidgetGallery.vue';
import WidgetVideo from './components/WidgetVideo.vue';
import WidgetCamera from './components/WidgetCamera.vue';
import WidgetGame from './components/WidgetGame.vue';
import WidgetMusic from './components/WidgetMusic.vue';
import { onMounted } from 'vue';

onMounted(() => {
  const containerSelector = '.swappable-wrapper';

  new Swappable(document.querySelectorAll(containerSelector), {
    draggable: '.swappable-item',
    mirror: {
      appendTo: containerSelector,
      constrainDimensions: true,
    },
    plugins: [Plugins.ResizeMirror],
  });
});
</script>
