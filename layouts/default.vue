<template>
  <div class="min-h-[100dvh] flex flex-col">
    <main class="flex-1">
      <slot />
    </main>

    <footer class="py-4 text-gray-500 flex flex-col gap-1 items-center justify-center bg-gray-100">
      <a href="mailto:svoboda@example.com" class="text-lg hover:underline hover:text-gray-700 transition-colors leading-4">
        svoboda@example.com
      </a>
      <div class="text-xs">© 2025 SVOBODA</div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
