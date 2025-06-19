<template>
  <section ref="vantaRef" class="h-[100dvh] relative text-center text-white flex items-center justify-center">
    <div class="relative z-10 opacity-0 transition-opacity duration-500" :class="{ 'opacity-100': vanta.vantaReady }">
      <img src="/images/SVOBODA_LOGO_blue.svg" alt="Логотип" class="h-32 mx-auto" />
    </div>
    <div
      class="absolute bottom-5 w-full flex justify-center text-[#fff]"
      :class="{ 'animate-fade-in': isVisible, 'animate-fade-out': !isVisible }"
    >
      <icons-arrow class="left-0 right-0 w-10" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useVanta } from "@/composables/useVanta";

const isVisible = ref(false);
const vantaRef = ref<HTMLElement | null>(null);
const vanta = useVanta(vantaRef);

onMounted(() => {
  if (!vantaRef.value) {
    console.error("Container ref is null. Ensure the element is rendered.");
    return;
  }

  if (!("IntersectionObserver" in window)) {
    isVisible.value = true;
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        isVisible.value = entry.isIntersecting;
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    },
  );

  observer.observe(vantaRef.value);

  onUnmounted(() => {
    if (vantaRef.value instanceof Element) {
      observer.unobserve(vantaRef.value);
    }
    observer.disconnect();
  });
});
</script>

<style scoped lang="scss">
.animate-fade-in {
  animation: fadeIn 0.5s ease-in forwards;
}

.animate-fade-out {
  animation: fadeOut 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
