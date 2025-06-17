<template>
  <div class="min-h-[100dvh] bg-white text-gray-800">
    <!-- Контейнер скролла -->
    <div class="scroll-wrapper">
      <!-- VANTA секция (прилипание) -->
      <section
          ref="vantaRef"
          class="relative text-center text-white scroll-snap-child flex items-center justify-center"
      >
        <div
            class="relative z-10 opacity-0 transition-opacity duration-500"
            :class="{ 'opacity-100': vantaReady }"
        >
          <img src="/images/SVOBODA_LOGO_blue.svg" alt="Логотип" class="h-32 mx-auto" />
        </div>
        <div class="absolute bottom-5 w-full flex justify-center" :class="{ 'animate-fade-in': isVisible, 'animate-fade-out': !isVisible }">
          <Arrow class="left-0 right-0 w-10" />
        </div>
      </section>

      <!-- Секции Motion (прилипание) -->
      <section class="scroll-snap-container">
        <MotionSection
            v-for="(block, i) in sections"
            :key="i"
            :title="block.title"
            :text="block.text"
            :reverse="i % 2 === 1"
            :class="i === 3 ? 'scroll-snap-last': 'scroll-snap-child'"
            :lastItem="i === 3"
        />
      </section>

      <!-- Футер как точка прилипания -->
      <footer class="scroll-snap-child py-40 text-gray-500 flex flex-col gap-5 items-center justify-center">
        <a href="mailto:svoboda@example.com" class="text-lg md:text-xl hover:underline hover:text-gray-700 transition-colors">
          svoboda@example.com
        </a>
        <div class="text-xs">© 2025 SVOBODA</div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import MotionSection from 'public/components/MotionSection.vue'
import Arrow from "assets/icons/arrow.vue";

const vantaRef = ref(null)
let vantaEffect: any = null
const vantaReady = ref(false)

const isVisible = ref(false)
// const container = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!vantaRef.value) {
    console.error('Container ref is null. Ensure the element is rendered.')
    return
  }

  if (!('IntersectionObserver' in window)) {
    isVisible.value = true // Fallback for browsers without IntersectionObserver
    return
  }

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting
        })
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px', // Margin around the root
        threshold: 0.9, // Trigger when 10% of the element is visible
      }
  )

  observer.observe(vantaRef.value)

  // Store observer for cleanup
  onUnmounted(() => {
    observer.unobserve(vantaRef.value!)
    observer.disconnect()
  })
})

onMounted(() => {
  const check = setInterval(() => {
    if (window.VANTA && window.VANTA.WAVES && vantaRef.value) {
      clearInterval(check)
      vantaEffect = window.VANTA.WAVES({
        el: vantaRef.value,
        color: 0x005eff,
        shininess: 50,
        waveHeight: 20,
        waveSpeed: 1.2,
        zoom: 1,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
      })
      vantaReady.value = true
    }
  }, 100)
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})

const sections = [
  {
    title: 'Support is not a promise. It’s our model.',
    text: `We provide direct funding for every project we release.
      From recording to artwork to marketing — we cover essential costs.
      Artists retain full creative control and rights.
      We operate with clear terms, no hidden conditions.
      Our model is built to let you create without compromise.`,
  },
  {
    title: 'Artists keep everything they earn.',
    text: `You keep 100% of all streaming, tickets, and merch income.
We charge no commission, take no share, and ask for no advances.
You’re not tied to us — you collaborate with us.
All rights stay with you.`,
  },
  {
    title: 'We build the platform. You own the stage.',
    text: `We don’t take a cut from your streaming, ticket sales, or merch.
Artists receive 100% of their revenue — always.
There are no hidden fees, splits, or commissions.
Our support is real, but it’s never at your expense.
Because your earnings should stay yours.`,
  },
  {
    title: 'Always by your side. Never in your way.',
    text: `We provide full legal and administrative support.
Our team assists with contracts, licensing, and distribution agreements.
We manage metadata, publishing, and reporting across all platforms.
You retain focus on the creative — we cover the operational.
Every release is backed by a structured, reliable back office.`,
  },
]
</script>

<style scoped>
.scroll-wrapper {
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.scroll-snap-container {
  display: flex;
  flex-direction: column;
}

.scroll-snap-last {
  scroll-snap-align: start;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.scroll-snap-child {
  scroll-snap-align: start;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

/* Убедимся, что футер — полноценная точка прилипания */
footer.scroll-snap-child {
  scroll-snap-align: start;
  min-height: 100dvh; /* Достаточная высота для прилипания */
}

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