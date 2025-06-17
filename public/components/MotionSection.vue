<template>
  <div
      class="scroll-snap-child-item flex items-center justify-center px-6 bg-gray-50 relative"
      :class="{ 'animate-fade-in': isVisible, 'animate-fade-out': !isVisible }"
      ref="container"
  >
    <div class="absolute bottom-5 w-full flex justify-center text-gray-500">
      <Arrow class="left-0 right-0 w-10" />
    </div>
    <div class="max-w-5xl">
      <h3 class="text-xl md:text-3xl font-bold mb-6">{{ title }}</h3>
      <p class="text-lg md:text-xl leading-8 md:leading-10 text-gray-700">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Arrow from 'assets/icons/arrow.vue'

defineProps<{
  title: string
  text: string
  reverse?: boolean
  lastItem: boolean
}>()

const isVisible = ref(false);
const isVisibleArrow = ref(false);
const container = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!container.value) return;

  if (!('IntersectionObserver' in window)) {
    isVisible.value = true
    return
  }

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting
        })
      },
      {
        root: null, // Вьюпорт
        rootMargin: '0px', // Сужаем область видимости: элемент виден, только если он в центральной части вьюпорта (80% высоты)
        threshold: 0.9, // Запускаем анимацию, когда 50% элемента видно
      }
  )

  observer.observe(container.value)

  onUnmounted(() => {
    observer.unobserve(container.value!)
    observer.disconnect()
  })
})

// onMounted(() => {
//   if (!container.value) return;
//
//   if (!('IntersectionObserver' in window)) {
//     isVisibleArrow.value = true
//     return
//   }
//
//   const observerArrow = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           isVisibleArrow.value = entry.isIntersecting
//         })
//       },
//       {
//         root: null, // Вьюпорт
//         rootMargin: '200px', // Сужаем область видимости: элемент виден, только если он в центральной части вьюпорта (80% высоты)
//         threshold: 0.91, // Запускаем анимацию, когда 50% элемента видно
//       }
//   )
//
//   observerArrow.observe(container.value)
//
//   onUnmounted(() => {
//     observerArrow.unobserve(container.value!)
//     observerArrow.disconnect()
//   })
// })
</script>

<style scoped>
h3 {
  text-wrap: balance;
}

.scroll-snap-child-item {
  opacity: 0; /* Начальное состояние — невидимый */
  will-change: opacity; /* Оптимизация анимации */
}

.animate-fade-in {
  animation: fadeIn .8s ease-in forwards;
}

.animate-fade-out {
  animation: fadeOut .8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    filter: blur(5px); /* Добавляем лёгкий эффект размытия при появлении */
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    filter: blur(0);
  }
  to {
    opacity: 0;
    filter: blur(5px); /* Размытие при исчезновении */
  }
}
</style>