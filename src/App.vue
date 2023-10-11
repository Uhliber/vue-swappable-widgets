<template>
  <main class="grid grid-cols-12 gap-4 w-full h-full p-4">
    <div class="col-span-9 grid grid-rows-6 gap-4">
      <div class="row-span-4 box">
        <WidgetGallery />
      </div>
      <div class="row-span-2 grid grid-cols-12 gap-4">
        <div class="col-span-6 box">
          <WidgetCamera />
        </div>
        <div class="col-span-6 box">
          <WidgetVideo />
        </div>
      </div>
    </div>
    <div class="col-span-3 grid grid-rows-6 gap-4">
      <div class="row-span-3 box">
        <WidgetGame />
      </div>
      <div class="row-span-3 box">
        <WidgetMusic />
      </div>
    </div>
  </main>
</template>

<script setup>
import WidgetGallery from './components/WidgetGallery.vue';
import WidgetVideo from './components/WidgetVideo.vue';
import WidgetCamera from './components/WidgetCamera.vue';
import WidgetGame from './components/WidgetGame.vue';
import WidgetMusic from './components/WidgetMusic.vue';
</script>
