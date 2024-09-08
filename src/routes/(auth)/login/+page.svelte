<script lang="ts">
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import { LogIn } from "lucide-svelte";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { CardTitle, CardDescription, CardHeader, CardContent } from "$lib/components/ui/card";

  let checked = false;
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<CardHeader class="space-y-1">
  <CardTitle class="text-2xl font-bold text-gradient">Log In</CardTitle>
  <CardDescription>Enter your email and password to log in.</CardDescription>
</CardHeader>

<CardContent>
  <form method="POST" class="space-y-4">
    <div class="space-y-2">
      <Label for="email">Email</Label>
      <Input name="email" id="email" placeholder="abc@abc.com" type="email" spellcheck="false" />
    </div>

    <div class="space-y-2">
      <Label for="password">Password</Label>
      <Input
        name="password"
        id="password"
        placeholder={checked ? "password" : "*&%#@!-;"}
        type={checked ? "text" : "password"}
        spellcheck="false"
      />
    </div>

    <div class="space-y-2">
      <div class="flex items-center space-x-2 mb-4">
        <Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
        <Label
          id="terms-label"
          for="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show password?
        </Label>
      </div>
    </div>

    <Button class="w-full bg-gradient" type="submit">
      <LogIn class="mr-2 w-5" />
      Log in
    </Button>

    <div class="mt-5">
      <Label>Don't have an account?</Label>
      <a href="/register" class="text-sm cursor-pointer">
        <span class="text-gradient">Register</span>
      </a>!
    </div>
  </form>
</CardContent>
