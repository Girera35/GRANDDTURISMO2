<script setup>

</script>

<template>
  <div class="container">
    <h1 class="verch">GrandTurismo</h1>
    <iframe
        width="1920"
        height="900"
        src="https://w4.kpfr.wiki/film/1044002/?utm_referrer=www.google.com"
        title="video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  justify-content: center;
}

.verch {
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 2.5em;
  margin: 0;
  padding: 20px 0;
}

iframe {
  max-width: 100%;
  max-height: 100%;
  border: none;
}
</style>

