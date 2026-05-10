<template>
    <header>
        <router-link to="/">Главная</router-link>
        <router-link to="/seasons">Сезоны</router-link>
        <router-link to="/herous">Герои</router-link>
        <router-link to="/forum">Форум</router-link>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    margin: 40px 0;
    border-radius: 50px;
    font-size: 25px;
    color: white;
    background-color: rgb(124, 4, 124);
}
</style>