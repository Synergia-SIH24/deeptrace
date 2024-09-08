<script>
  import { Card } from "$lib/components/ui/card";

  const { children } = $props();
</script>

<Card class="mx-auto max-w-sm max-h-sm mt-[3.6rem] p-3 card-backdrop">
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

  :global(.card-backdrop) {
    position: relative;
    &::after,
    &::before {
      content: "";
      position: absolute;
      height: 101.5%;
      width: 102%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: red;
      z-index: -1;
      border-radius: 10px;
      background-image: conic-gradient(
        #575efb 0%,
        #2b4b7d 25%,
        #98509d 50%,
        #9700f2 75%,
        #575efb 100%
      );
    }
    &::before {
      filter: blur(1.5rem);
      opacity: 0.5;
    }
  }
</style>
