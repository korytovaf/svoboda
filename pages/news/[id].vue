<template>
  <div>
    <header class="flex items-center border-b border-gray-100 h-14">
      <div class="ui-section">
        <nuxt-link to="/" class="text-blue-500">
          <icons-logo class="h-10" />
        </nuxt-link>
      </div>
    </header>
    <section class="ui-section my-10">
      <div class="grid md:grid-cols-1 grid-cols-2 gap-10">
        <div>
          <h1 class="title">{{ newsItem?.title }}</h1>
          <div class="hidden md:block my-5">
            <div class="w-full overflow-hidden">
              <img :src="newsItem?.image" :alt="newsItem?.title" class="w-full h-full object-cover" />
            </div>
          </div>
          <p class="excerpt">{{ newsItem?.excerpt }}</p>
          <p class="excerpt mt-5">{{ newsItem?.text }}</p>
        </div>
        <div class="md:hidden">
          <div class="w-full overflow-hidden">
            <img :src="newsItem?.image" :alt="newsItem?.title" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section class="ui-section my-10">
      <h2 class="ui-section-title">More News</h2>

      <nuxt-link
        v-for="post in news.filter(i => i.id !== +route.params.id)"
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
  </div>
</template>

<script setup lang="ts">
import { news } from "@/data/news";

const route = useRoute();
const newsItem = computed(() => {
  return news.find(i => i.id === +route.params.id);
});
</script>

<style scoped lang="scss">
.title {
  font-family: "Montserrat", sans-serif;
  font-size: 34px;
  font-weight: 900;
  line-height: 50px;
  letter-spacing: 7.7px;
  text-transform: uppercase;
  text-align: left;
  color: #151518;
  margin: 0 0 15px;
}

.excerpt {
  line-height: 36px;
}

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
