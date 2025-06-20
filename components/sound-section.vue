<template>
  <section class="ui-section pb-[50px]">
    <h2 class="ui-section-title">LATEST RELEASE</h2>

    <ul class="grid grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-[45px]">
      <li v-for="item in sounds" :key="item.id" class="">
        <a :href="item.spotify" target="_blank" rel="noopener">
          <div class="relative group overflow-hidden">
            <img
              :src="item.image"
              :alt="`${item.title} - ${item.author}`"
              class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div class="overlay">
              <div class="overlay-content">
                <icons-spotify />
                Listen on Spotify
              </div>
            </div>
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="author">{{ item.author }}</div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { sounds } from "@/data/sound";
import IconsSpotify from "~/components/icons/icons-spotify.vue";
</script>

<style scoped lang="postcss">
.title {
  font-family: "Cousine", monospace;
  line-height: 25px;
  @apply mt-[30px] uppercase font-medium leading-[2.6px] text-center text-xl;
}
.author {
  font-weight: 400;
  color: #bbbaba;
  padding-bottom: 5px;
  margin-top: 10px;
  font-family: "Cousine", monospace;
  text-transform: uppercase;
  letter-spacing: 2.6px;
  line-height: 25px;
  text-align: center;
  font-size: 18px;
}

.overlay {
  @apply absolute inset-0 bg-black/50 flex justify-center items-center p-6 text-white cursor-pointer group-hover:bg-black/80 transition-all;
}

.overlay-content {
  @apply flex flex-col items-center gap-2 opacity-0 md:opacity-100 px-4 py-2 text-sm transition-opacity group-hover:opacity-100;
}
</style>
