<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <h1 class="mb-5 text-5xl font-bold text-white">{{ msg }}</h1>
    <h3 class="text-white">
      Clique em "buscar" para inserir o CEP desejado.
    </h3>
  </div>
</template>