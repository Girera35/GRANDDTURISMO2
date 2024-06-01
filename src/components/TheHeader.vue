
<script>
export default {
  methods:{
    scrollTrailer(id,align){
      let el = document.getElementById(id);
      el.scrollIntoView({behavior:'smooth',block:align});
    }
  }
};
</script>


<template>
  <div>
    <header class="header">
      <nav>
        <router-link class="link_film" to="/watch-movie">Смотреть фильм</router-link>
        <button class="btn" @click="scrollTrailer('trailer','end')">Трейлер</button>
      </nav>
    </header>
    <div class="movie-page">
      <div class="image-container">
        <img src="@/assets/image/glav.png" alt="Grand Turismo" />
      </div>
      <div class="description-container">
        <h1>Grand Turismo</h1>
        <p>
          Фильм основан на реальных событиях. <br><br>
          Геймер Янн Марденборо всегда мечтал стать настоящим автогонщиком, но пока он довольствовался лишь игровыми состязаниями.
          Его мечта неожиданно исполняется, когда он, одержав победу в нескольких турнирах Gran Turismo, оказывается приглашён в
          настоящую команду по гонкам. Эта идея принадлежит маркетологу Дэнни Муру, задумавшему подготовить талантливых геймеров к соревнованиям на треке.
          <br><br>
          Сопровождайте Янна в его захватывающем путешествии в мир профессиональных автогонок, где на кону стоит не только слава, но и личные человеческие ценности.
        </p>
      </div>
    </div>
  </div>
</template>



<style scoped>
.header {
  background: rgb(153, 39, 166);
  position: fixed;
  top: 10px;
  width: 300px;
  margin-left: 805px;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.header nav {
  display: flex;
  gap: 20px;
}

.header a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
}

.movie-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: url("@/assets/image/fon1.png") fixed;
  background-size: cover;
  color: white;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.image-container img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.description-container {
  flex: 1;
  padding: 20px;
}

.description-container p {
  font-size: 30px;
}

.description-container h1 {
  margin-bottom: 20px;
  font-size: 50px;
  text-align: left;
}

.description-container p {
  font-size: 30px;
  line-height: 1.6;
  text-align: left;
}


.btn{
  background: none;
  border:none;
  color: white;
  font-weight: bold;
  font-family: "Times New Roman";
  font-size: 20px;
  cursor: pointer;
}

.link_film{
  color: white;
}

/* Параллакс эффект */
.movie-page {
  background-attachment: fixed;
}
</style>
