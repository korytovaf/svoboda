export function useVanta(targetRef: Ref<HTMLElement | null>, options: Record<string, any> = {}) {
  const vantaReady = ref(false);
  let vantaEffect: any = null;

  const defaultOptions = {
    color: 0x005eff,
    shininess: 50,
    waveHeight: 20,
    waveSpeed: 1.2,
    zoom: 1,
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    ...options,
  };

  onMounted(() => {
    const check = setInterval(() => {
      const el = targetRef.value;
      if (window.VANTA?.WAVES && el instanceof HTMLElement) {
        clearInterval(check);
        vantaEffect = window.VANTA.WAVES({
          ...defaultOptions,
          el, // безопасно, уже проверено
        });
        vantaReady.value = true;
      }
    }, 100);
  });

  onBeforeUnmount(() => {
    if (vantaEffect?.destroy) vantaEffect.destroy();
  });

  return {
    vantaReady,
  };
}
