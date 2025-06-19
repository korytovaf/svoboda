<template>
  <div class="bg-[#000]">
    <section class="pb-[70px]">
      <h2 class="ui-section-title text-[#fff]">Watch Our Artists in Action</h2>

      <!-- Основной слайдер -->
      <div class="ui-section">
        <Swiper class="mb-6" :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }" :space-between="10" :slides-per-view="1">
          <SwiperSlide v-for="video in videos" :key="video.id">
            <div class="w-full aspect-video">
              <iframe
                class="w-full h-full"
                :src="`https://www.youtube.com/embed/${video.id}`"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Превью -->
      <div class="py-10 mt-[50px]">
        <div class="ui-section">
          <Swiper
            :slides-per-view="Math.min(videos.length, 5)"
            space-between="10"
            watch-slides-progress
            watch-slides-visibility
            class="cursor-pointer"
            @swiper="onThumbsSwiper"
          >
            <SwiperSlide
              v-for="video in videos"
              :key="video.id"
              class="aspect-video overflow-hidden border-2 border-transparent hover:border-white transition"
            >
              <img :src="`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`" alt="Video thumbnail" class="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/thumbs";

import { Thumbs } from "swiper/modules";
import { ref } from "vue";

const thumbsSwiper = ref<any>(null);

function onThumbsSwiper(swiperInstance: any) {
  thumbsSwiper.value = swiperInstance;
}

const videos = [{ id: "6XCZVl-3_Vc" }, { id: "mj-tIXt3I5s" }, { id: "sz1mF1gG5IE" }, { id: "S8k7VxC5QRk" }];
</script>

<style scoped>
.swiper-slide-thumb-active {
  border-color: white !important;
}
</style>
