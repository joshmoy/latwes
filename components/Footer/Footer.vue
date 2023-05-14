<template>
    <footer class="footer">
        <nav class="footer__navigation container">
            <ul class="footer__navigation__links">
                <li>
                    <NuxtLink to="/privacy">
                        Privacy Policy
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/terms">
                        Terms & Conditions
                    </NuxtLink>
                </li>
            </ul>
            <ul class="footer__navigation__socials">
                <li>
                    <NuxtLink to="https://twitter.com/**" class="footer__navigation__icon">
                        <svgo-twitter />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://instagram.com/**" class="footer__navigation__icon">
                        <svgo-instagram />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://facebook/**" class="footer__navigation__icon">
                        <svgo-facebook />
                    </NuxtLink>
                </li>
            </ul>
        </nav>

        <div class="watermark">
            {{ state.appName }}
        </div>
    </footer>
</template>

<script setup lang="ts">
import { APP_NAME } from '~~/config';

const state: FooterState = {
    appName: APP_NAME
}
</script>

<style lang="scss" scoped src="./Footer.scss"></style>