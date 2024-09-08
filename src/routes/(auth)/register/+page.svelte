<script>
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Milestone, TriangleAlert } from "lucide-svelte";
  import { CardHeader, CardTitle, CardDescription, CardContent } from "$lib/components/ui/card";

  let checked = $state(false);
  let password = $state("");
  let confirmPassword = $state("");
</script>

<svelte:head>
  <title>Register</title>
</svelte:head>

<CardHeader class="space-y-1">
  <CardTitle class="text-2xl font-bold text-gradient">Register</CardTitle>
  <CardDescription>Enter your email and password to register.</CardDescription>
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
        bind:value={password}
      />
    </div>

    <div class="space-y-2">
      <Label for="confirmPassword">Confirm password</Label>
      <Input
        name="confirmPassword"
        id="confirm-password"
        placeholder={checked ? "password" : "*&%#@!-;"}
        type={checked ? "text" : "password"}
        spellcheck="false"
        bind:value={confirmPassword}
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

    <Button class="w-full bg-gradient" type="submit" disabled={password !== confirmPassword}>
      <Milestone class="mr-2 w-5" />
      Register
    </Button>

    <div class="mt-5">
      <Label>Already have an account?</Label>
      <a href="/login" class="text-sm text-primary cursor-pointer">
        <span class="text-gradient">Log In</span>
      </a>!
    </div>
  </form>
</CardContent>
