<template>
  <div class="characters-page">
    <h1>Персонажи</h1>
    <div class="characters-container">
      <div class="character" v-for="character in characters" :key="character.name">
        <img :src="character.image" :alt="character.image" class="character-image"/>
        <h2>{{ character.name }}</h2>
        <p>{{ character.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import characters from '@/components/characters.json';
export default {
  name: "CharactersPage",
  data() {
    return {
      characters: characters
    };
  }
};
</script>

<style scoped>
.characters-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  color: white;
  padding: 20px;
  min-height: 100vh;
  width: 100%;
}

.characters-page h1 {
  margin-bottom: 40px;
  font-size: 36px;
}

.characters-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.character {
  max-width: 300px;
  text-align: center;
  margin: 20px;
}

.character-image {
  width: 100%;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.character h2 {
  margin: 20px 0 10px;
  font-size: 24px;
}

.character p {
  font-size: 18px;
}
</style>