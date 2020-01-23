<template>
    <span>
        <span v-if="value === true" class="text-success">✔</span>
        <span v-else-if="value === false" class="text-danger">✗</span>
        <span v-else>-</span>
    </span>
</template>
<script>
</script>