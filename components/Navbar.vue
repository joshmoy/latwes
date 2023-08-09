<script setup lang="ts">
import { ref } from 'vue'

interface INavbarProps {
    homeNav?: boolean;
    authNav?: boolean;
}

defineProps<INavbarProps>()


let showNav = ref(false) 

const showNavigation = () => {
    showNav.value = !showNav.value
}
</script>
<template>
  <div class="desktop-header">
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
  </div>
  <div class="mobile-header">
    <header class="mobile-header">
        <div class="logo">Goborr!</div>
        <div
            aria-label="open-menu"
            id="nav-icon"
            @click="showNavigation">
            <span id="spanNav" class="nav1"></span>
            <span id="spanNav" class="nav2"></span>
        </div>
        <div :class="{mobileDrawer : showNav, hide : !showNav}">
            <div class="mobileDrawer__header">
                <div class="mobileDrawer__header--logo">Goborr!</div>
                <div @click="showNavigation">
                    <svg stroke="#0052C5" fill="#0052C5" stroke-width="0" viewBox="0 0 512 512" class="text-white" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg></div>
            </div>
            <nav class="mobileDrawer__nav">
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
              class="mobileDrawer__button"
                :class="{
                    'homeNavButton': homeNav,
                    'authNavButton': authNav
                }"
                @click="$router.push('/login')">Login</button>
        </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>

.desktop-header {
    display: block;
    @media screen and (max-width: 768px) {
        display: none;
    }
}
.mobile-header {
    display: none;
    .logo {
        font-size: 36px;
        color: $white;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        width: 100%;
    }
}
.show {
  box-shadow: 0 10px 53px 0 rgb(72 49 212 / 5%)
}
.hide {
    display: none;
}

.mobileDrawer {
    position: fixed;
    background: #fff;
    top: 0;
    right: 0;
    padding: 30px 50px 150px 50px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 100px;
    z-index: 999;
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &--logo {
            color: #0052C5;
            font-size: 36px;
        }
    }
    &__nav {
        text-align: center;
        font-size: 34px;
        ul {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
    }
    &__button {
        margin-top: auto;
    }
}
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


#nav-icon {
  width: 60px;
  height: 25px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 999;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #fff;
  @media screen and (max-width: 768px) {
    // background: #fff;
  }
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
  @media screen and (max-width: 1048px) {
    width: 70%;
    left: 10%;
  }
}

#nav-icon span:nth-child(2) {
  top: 18px;
  width: 70% !important;
  @media screen and (max-width: 969px) {
    width: 50% !important;
  }
  left: 30%;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon.show-nav span:nth-child(1) {
  top: 5px;
  left: 8px;
  width: 50% !important;
  // background: #212121;
  transform: rotateZ(45deg);
}

#nav-icon.show-nav span:nth-child(2) {
  top: 40px;
  left: 8px;
  width: 50% !important;
  transform:  translate(0,-0.8rem) rotateZ(-45deg);
}
</style>