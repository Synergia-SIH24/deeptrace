<script>
  import { Card } from "$lib/components/ui/card";

  const { children } = $props();
</script>

<Card class="mx-auto max-w-sm max-h-sm mt-20">
  {@render children()}
</Card>

<style lang="postcss">
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  :global(body),
  :global(.bg-gradient),
  :global(.text-gradient) {
    background: linear-gradient(45deg, #d1a7d6, #f5c2e7, #eff1f5, #f5e0dc, #d9a2a3);
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
</style>
