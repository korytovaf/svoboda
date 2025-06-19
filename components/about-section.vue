<template>
  <section class="ui-section pb-[70px]">
    <h2 class="ui-section-title">ABOUT SVOBODA</h2>
    <!--    <p class="text-center uppercase mb-[50px]">Promote artists all over the world</p>-->

    <div class="grid grid-cols-2 gap-16 lg:grid-cols-1">
      <div v-for="item in about" :key="item.title">
        <h3 class="text-[22px] font-semibold mb-3 uppercase">{{ item.title }}</h3>
        <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { about } from "@/data/about";
</script>

<style scoped></style>
