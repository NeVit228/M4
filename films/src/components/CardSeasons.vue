<script setup>
defineProps({
    card: Object,
})
</script>
<template>
  <div>
    <img
     :src="card.img" />
    <nav>
      <h2>{{ card.title }}</h2>
      <p>{{ card.desc }}</p>
    </nav>
  </div>
</template>

<style scoped>
div {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 3fr;
}
img {
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 16px;
}
nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
h2 {
  font-size: 40px;
}
p {
  font-size: 25px;
  line-height: 1.5;
  text-align: justify;
}
</style>
