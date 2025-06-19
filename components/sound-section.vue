<template>
  <section class="ui-section pb-[50px]">
    <h2 class="ui-section-title">LATEST RELEASE</h2>

    <ul class="grid grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-[45px] max-w-7xl mx-auto">
      <li v-for="item in sounds" :key="item.id" class="">
        <div class="relative group overflow-hidden">
          <img
            :src="item.image"
            :alt="`${item.title} - ${item.author}`"
            class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <!-- Оверлей -->
          <div
            class="absolute inset-0 bg-black/50 flex justify-center items-center p-6 text-white cursor-pointer group-hover:bg-black/80 transition-all"
          >
            <a
              :href="item.spotify"
              target="_blank"
              rel="noopener"
              class="flex flex-col items-center gap-2 opacity-0 md:opacity-100 px-4 py-2 text-sm transition-opacity group-hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" fill="currentColor" viewBox="0 0 496 512">
                <path
                  d="M248 8C111 8 0 119 0 256c0 137 111 248 248 248s248-111 248-248C496 119 385 8 248 8zm101.4 365.4c-4.2 6.9-13.2 9.1-20.1 4.9-55-33.5-124.2-41.1-205.7-22.7-7.9 1.8-15.9-3.3-17.8-11.2-1.9-7.9 3.3-15.9 11.2-17.8 91.4-20.6 169.2-11.3 232.8 26.8 6.8 4.2 9 13.2 4.9 20zm27.5-65.6c-5.3 8.4-16.5 11-24.9 5.7-62.9-38.7-158.8-50-233.3-27.6-9.3 2.6-19.1-2.6-21.7-11.9-2.6-9.3 2.6-19.1 11.9-21.7 87.2-25 195.8-12.1 268.6 33.4 8.3 5.2 10.9 16.4 5.7 24.9zm.3-66.6C329.4 199 221.5 185 133.1 211.1c-11 3.2-22.6-3-25.8-14.1-3.2-11 3-22.6 14.1-25.8 102.1-30 221.2-13.3 307.6 41.6 9.7 6 12.7 18.7 6.7 28.4-6.1 9.6-18.8 12.6-28.4 6.6z"
                />
              </svg>
              Listen on Spotify
            </a>
          </div>
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="author">{{ item.author }}</div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { sounds } from "@/data/sound";
</script>

<style scoped lang="postcss">
.title {
  margin-top: 30px;
  font-family: "Cousine", monospace;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2.6px;
  line-height: 25px;
  text-align: center;
  font-size: 20px;
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
  font-size: 20px;
}
</style>
