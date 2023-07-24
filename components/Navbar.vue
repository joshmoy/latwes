<script setup lang="ts">
interface INavbarProps {
    homeNav?: boolean;
    authNav?: boolean;
}

defineProps<INavbarProps>()
</script>
<template>
  <header class="header">
    <div class="logo">Goborr!</div>
    <nav>
        <ul>
            <li>
                <nuxt-link  to="/login">Predictions</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/login">FAQs</nuxt-link>
            </li>
        </ul>
    </nav>
    <button
        :class="{
            'homeNavButton': homeNav,
            'authNavButton': authNav
        }"
        @click="$router.push('/login')">Login</button>
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
        color: $white;
    }
    nav {
        ul {
            list-style: none;
            display: flex;
            gap: 20px;
            li {
                a {
                    font-size: 18px;
                    font-weight: 400;
                    color: $white;
                }
            }
        }
    }
    .homeNavButton {
        font-size: 18px;
        background: #0052C5;
        color: #ffffff;
        border-radius: 40px;
        padding: 16px 24px;
        border: 1px solid #0052C5;
    }
    .authNavButton {
        font-size: 18px;
        background: transparent;
        color: #ffffff;
        padding: 16px 24px;
    }
}
</style>