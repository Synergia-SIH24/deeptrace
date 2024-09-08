<script>
  import { Card } from "$lib/components/ui/card";

  const { children } = $props();
</script>

<Card class="mx-auto max-w-sm max-h-sm mt-10 card-blur p-3">
  {@render children()}
</Card>

<style lang="postcss">
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  :global(body),
  :global(.bg-gradient),
  :global(.text-gradient) {
    background: radial-gradient(circle, #575efb, #2b4b7d, #5f5195, #98509d, #9700f2);
    background-size: 300% 300%;
    animation: gradientAnimation 10s ease infinite;
  }

  :global(body) {
    margin: 0;
    height: 100vh;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  :global(.text-gradient) {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    display: inline-block;
  }

  :global(.card-blur) {
    background: rgba(255, 255, 255, 0.6);
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0, 0.2);
    backdrop-filter: blur(10px) saturate(100%);
    -webkit-backdrop-filter: blur(10px) saturate(100%);
  }

  :global(.input-blur) {
    background: rgba(255, 255, 255, 0.4);
  }
</style>
