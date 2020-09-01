<template>
    <div>
        Logout...
    </div>
</template>

<script>
export default {
    mounted() {
        localStorage.removeItem("vuex");
        this.$router.push('../');
        location.reload();
    }
}
</script>