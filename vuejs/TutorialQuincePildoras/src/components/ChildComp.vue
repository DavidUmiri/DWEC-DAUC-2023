<script setup>
const props = defineProps({
    msg: String
})
</script>

<template>
    <h2>A Child Component!</h2>
    <h2>¡Un componente secundario!</h2>
    <h2>{{ msg || 'No props passed yet' }}</h2>
</template>