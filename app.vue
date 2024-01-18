<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
defineProps({
  msg: String,
})

const t = () => {
  console.log('test')
}
</script>

<style lang="scss">
.test {
  margin: 20px;
  padding: 20px;

  text-align: center;

  background-color: #fff;
  border-radius: 5px;

  &__lmao {
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    text-align: center;

    background: red;
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>
