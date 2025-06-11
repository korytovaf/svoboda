<template>
  <div class="min-h-screen bg-white text-gray-800">
    <section ref="vantaRef" class="relative py-20 text-center text-white overflow-hidden">
      <div
          class="relative z-10 opacity-0 transition-opacity duration-500"
          :class="{ 'opacity-100': vantaReady }"
      >
        <div class="relative z-10 flex w-full h-[600px] justify-center items-center">
          <img src="/images/SVOBODA_LOGO_blue.svg" alt="Логотип" class="h-32" />
        </div>
      </div>
    </section>

    <section class="py-16 px-6 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 shadow-md transition-transform duration-300 md:hover:scale-102">
          <h3 class="text-xl font-bold mb-2">Support is not a promise. It’s our model</h3>
          <p>We provide direct funding for every project we release.
            From recording to artwork to marketing — we cover essential costs.
            Artists retain full creative control and rights.
            We operate with clear terms, no hidden conditions.
            Our model is built to let you create without compromise.</p>
        </div>

        <div class="p-6 shadow-md transition-transform duration-300 md:hover:scale-102">
          <h3 class="text-xl font-bold mb-2">Artists keep everything they earn</h3>
          <p>You keep 100% of all streaming, tickets, and merch income.
            We charge no commission, take no share, and ask for no advances.
            You’re not tied to us — you collaborate with us.
            All rights stay with you.</p>
        </div>

        <div class="p-6 shadow-md transition-transform duration-300 md:hover:scale-102">
          <h3 class="text-xl font-bold mb-2">We build the platform. You own the stage</h3>
          <p>We don’t take a cut from your streaming, ticket sales, or merch.
            Artists receive 100% of their revenue — always.
            There are no hidden fees, splits, or commissions.
            Our support is real, but it’s never at your expense.
            Because your earnings should stay yours.</p>
        </div>

        <div class="p-6 shadow-md transition-transform duration-300 md:hover:scale-102">
          <h3 class="text-xl font-bold mb-2">Always by your side. Never in your way</h3>
          <p>We provide full legal and administrative support.
            Our team assists with contracts, licensing, and distribution agreements.
            We manage metadata, publishing, and reporting across all platforms.
            You retain focus on the creative — we cover the operational.
            Every release is backed by a structured, reliable back office.</p>
        </div>
      </div>
    </section>


    <footer class="py-6 text-center text-sm text-gray-500">
      © 2025 SVOBODA
    </footer>
  </div>
</template>

<script setup lang="ts">
const vantaRef = ref(null)
let vantaEffect: any = null
const vantaReady = ref(false)

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
</script>

<style scoped></style>