<template>
  <section class="ui-section">
    <h2 class="ui-section-title">Latest News</h2>

    <nuxt-link
      v-for="post in news"
      :id="post.id.toString()"
      :key="post.title"
      :to="`/news/${post.id}`"
      class="flex mb-[50px] gap-x-10 md:flex-col lg:gap-x-[30px] md:gap-6"
    >
      <!-- Левая часть: изображение с датой -->
      <div class="relative w-full overflow-hidden">
        <img :src="post.image" :alt="post.title" class="w-[calc(100%-40px)] h-[377px] object-cover lg:w-full lg:h-[465px] md:h-[200px]" />
        <div class="date">
          <div class="text-4xl text-center">{{ post.day }}</div>
          <div class="text-lg text-center">{{ post.month }}</div>
        </div>
      </div>

      <!-- Правая часть: текст и кнопка -->
      <div class="flex flex-col justify-between w-full">
        <div>
          <h3 class="title">{{ post.title }}</h3>
          <p class="excerpt">{{ post.excerpt }}</p>
        </div>
        <div class="read-more">Read More</div>
      </div>
    </nuxt-link>
  </section>
</template>

<script setup lang="ts">
import { news } from "@/data/news";
</script>

<style scoped lang="postcss">
.title {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: 4.3px;
  text-transform: uppercase;
  text-align: left;
  color: #151518;
  margin: 0 0 20px;
}

.excerpt {
  color: #666666;
  line-height: 30px;
}

.date {
  font-family: "Montserrat", sans-serif;
  @apply absolute top-0 left-0 flex flex-col justify-center bg-[#000] text-[#fff] font-bold uppercase px-5 pt-5 pb-3;
}

.read-more {
  width: fit-content;
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
  padding: 16px 55px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition:
    color,
    background-color 0.2s ease-in-out;
  @apply mt-[50px] md:mt-5;
}

.read-more:hover {
  background-color: #000;
  color: #fff;
}
</style>
