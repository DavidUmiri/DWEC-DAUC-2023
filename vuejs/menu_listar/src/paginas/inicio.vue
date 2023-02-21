<script setup>

</script>

<template>
    <div>
        <h6>Página principal</h6>
        <section>
            <img src="../../public/wallhaven-3zypzy.png" alt="">
            <img src="../../public/wallhaven-72xwvy.png" alt="">
            <img src="../../public/wallhaven-e7vgml.jpg" alt="">
            <img src="../../public/wallhaven-rdeevj.png" alt="">
            <img src="../../public/wallhaven-x8kg33.png" alt="">
        </section>
    </div>
</template>

<style scoped>
h6 {
    text-align: center;
    margin: 3%;
}

section {
    display: flex;
    width: 85%;
    height: 50vh;
    margin: 0 auto;
}

section img {
    width: 0px;
    flex-grow: 1;
    object-fit: cover;
    opacity: .8;
    transition: .5s ease;
}

section img:hover {
    cursor: progress;
    width: 30%;
    opacity: 1;
    filter: contrast(120%);
}
</style>