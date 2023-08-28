<script setup lang="ts">
import getChargebee from '../utils/chargebee';

defineProps<{
  msg: string;
}>();

async function openCheckout() {
  const chargebee = await getChargebee();

  chargebee?.openCheckout({
    hostedPage: async () => {
      const res = await fetch("http://localhost:8000/api/checkout");
      const data = await res.json();
      return data;
    },
    success: () => {
      alert("You have successfully checked out");
    },
  });
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Get started by clicking on this button</h3>
    <button @click="openCheckout">Open Checkout</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
