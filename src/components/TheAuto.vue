<template>
  <div class="wrapper">
  <div class="car-page">
    <div class="overlay">
      <h1 class="car-title">Nissan GTR-35</h1>
      <p class="car-description">
        Однако упоминается Nissan GT-R GT3 образца 2014 года, который был частью европейской команды Nissan
        и участвовал в чемпионатах FIA GT.
        В одном из сезонов его пилотировал гонщик Дженн Мартенборо, историю которого и рассказывает фильм.
      </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "CarPage"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}


.car-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("../assets/image/car1.png") center/cover no-repeat; /* Путь к изображению автомобиля */
  position: relative;
  color: white;
}

.overlay {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Темный полупрозрачный фон для читабельности текста */
  padding-left: 20px;
  text-align: center;
}

.car-title {
  border: #222222;
  margin-top: 20px;
  font-size: 48px;
}

.car-description {
  margin-bottom: 20px;
  font-size: 24px;
  max-width: 800px;
  line-height: 1.5;
}
</style>
