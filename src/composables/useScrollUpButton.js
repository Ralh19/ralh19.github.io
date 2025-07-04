import { ref, onMounted, onUnmounted } from "vue";

export function useScrollUpButton(showThreshold = 500) {
  const isVisible = ref(false);

  const checkScroll = () => {
    isVisible.value = window.scrollY > showThreshold;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  onMounted(() => window.addEventListener("scroll", checkScroll));
  onUnmounted(() => window.removeEventListener("scroll", checkScroll));

  return { isVisible, scrollToTop };
}
