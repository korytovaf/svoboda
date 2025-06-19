export {}

declare global {
  interface Window {
    VANTA: {
      WAVES: (options: any) => {
        destroy?: () => void
      }
    }
  }
}
