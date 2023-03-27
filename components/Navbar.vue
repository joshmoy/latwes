<script setup lang="ts">

</script>
<template>
  <header class="header">
    <div class="logo">Offside</div>
    <nav>
        <ul>
            <li>Home</li>
            <li>Docs</li>
            <li>Matches</li>
        </ul>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 100px;
    .logo {
        font-size: 36px;
    }
    nav {
        ul {
            list-style: none;
            display: flex;
            gap: 20px;
        }
    }
}
</style>