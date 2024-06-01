<template>
  <div class="video-page" >
    <h1 class="title">Трейлер</h1>
    <div class="video-container">
      <video controls autoplay id="trailer">
        <source  src="../assets/Video/Grand%20Turismo.mp4" type="video/mp4">
      </video>
    </div>
    <div class="description-container">
      <h2>Grand Turismo: официальный трейлер</h2>
      <p>
        В этом захватывающем трейлере вы узнаете о самых эпических моментах фильма "Grand Turismo" и его потрясающих гонках.
        Подготовьтесь к невероятным приключениям на трассах и ощутите адреналин от каждой заезды.
        Готовы ли вы к самому захватывающему гоночному опыту в вашей жизни?
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "VideoPage"
};
</script>

<style scoped>
.video-page {
  width: 100%;
  height: 110vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding-left: 2.5em  ;
  background-color: black; /* добавьте, если фон должен быть черным */
}

.title {
  margin-bottom: 20px;
  font-size: 36px; /* размер текста для заголовка */
}

.video-container {
  margin-top: 20px;
}

.description-container {
  font-size: 20px;
  margin-top: 20px;
  max-width: 800px;
  text-align: center;
}
</style>
