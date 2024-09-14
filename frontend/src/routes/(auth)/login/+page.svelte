<script lang="ts">
  import { loginSchema } from "./login.schema";
  import { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import * as Alert from "$lib/components/ui/alert";
  import { Button } from "$lib/components/ui/button";
  import { LogIn, TriangleAlert } from "lucide-svelte";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { CardTitle, CardHeader, CardContent } from "$lib/components/ui/card";
  import Logo from "$lib/icons/Logo.svelte";

  const { data } = $props();

  const { form, errors, constraints, enhance } = superForm(data.form, {
    validators: zodClient(loginSchema)
  });

  let checked = $state(false);
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<CardHeader class="space-y-1">
  <CardTitle class="text-2xl font-bold text-gradient">
    <Logo />
  </CardTitle>
</CardHeader>

<CardContent>
  <form method="POST" class="space-y-4" use:enhance>
    <div class="space-y-2">
      <Label for="email" class="text-gradient">Email</Label>
      <Input
        name="email"
        id="email"
        placeholder="abc@abc.com"
        type="email"
        aria-invalid={$errors.email ? "true" : undefined}
        aria-describedby={$errors.email ? "email-error email-desc" : "email-desc"}
        aria-required={$constraints.email?.required ? "true" : undefined}
        spellcheck="false"
        bind:value={$form.email}
        {...$constraints.email}
      />
    </div>

    <div class="space-y-2">
      <Label for="password" class="text-gradient">Password</Label>
      <Input
        name="password"
        id="password"
        placeholder={checked ? "password" : "*&%#@!-;"}
        type={checked ? "text" : "password"}
        aria-invalid={$errors.password ? "true" : undefined}
        aria-describedby={$errors.password ? "password-error password-desc" : "password-desc"}
        aria-required={$constraints.password?.required ? "true" : undefined}
        spellcheck="false"
        bind:value={$form.password}
        {...$constraints.password}
      />
    </div>

    <div class="space-y-2">
      <div class="flex items-center space-x-2 mb-4">
        <Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
        <Label
          id="terms-label"
          for="terms"
          class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed text-gray-500 peer-disabled:opacity-70"
        >
          Show password?
        </Label>
      </div>

      {#if $errors.email}
        <Alert.Root variant="destructive" class="bg-red-100">
          <TriangleAlert class="h-4 w-4" />
          <Alert.Title>{$errors.email}</Alert.Title>
        </Alert.Root>
      {/if}
    </div>

    <Button class="w-full bg-gradient" type="submit">
      <LogIn class="mr-2 w-5" />
      Log in
    </Button>

    <div class="mt-5 text-gray-500">
      <Label class="font-normal">Don't have an account?</Label>
      <a href="/register" class="text-sm cursor-pointer">
        <span class="text-gradient">Register!</span>
      </a>
    </div>
  </form>
</CardContent>
