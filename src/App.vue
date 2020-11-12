<template>
  <div>Hello {{ value }}</div>
  <img src="assets/logo.png">
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "get wild",
    };
  }
};
</script>
