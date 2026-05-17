<script setup>
import CardSeasons from "../components/CardSeasons.vue";
import { onMounted, ref } from "vue";
let cards = ref([
    {
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/10768063/bd4e035a-92ed-4b5c-bb27-ef2f45475f2a/1920x",
        title: "1 сезон",
        desc: "Отличник против банды. Ум вместо силы. Физика вместо кулаков.Замкнутый Ён Си Ын годами терпит буллинг, решая всё головой. Но когда обижают единственного друга, он берёт в руки учебник и ручку — и доказывает, что даже «слабый» может стать самым опасным хищником в школе. Жестокая, напряжённая история о дружбе, насилии и мести.",

    },
    {
        img: "https://avatars.mds.yandex.net/i?id=b08d54bc0a6310ef3daea91a1e51ce5a_l-12478411-images-thumbs&n=13",
        title: "2 сезон",
        desc: "Новая школа. Старые враги. Те же правила. После потери друга Си Ын переводится в ещё более опасную школу. Здесь банды правят бал, а слабых просто не замечают. Но когда прошлое настигает его, отличник снова берёт в руки учебник — и напоминает всем, почему тихих парней лучше не трогать.",

    },
]);
</script>

<template>
  <section>
    <CardSeasons v-for="(card, i) in cards" :key="i" :card="card" />
  </section>
</template>
<style scoped>
section {
  display: grid;
  gap: 40px;
}
</style>
