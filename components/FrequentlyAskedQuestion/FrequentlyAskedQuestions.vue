<template>
    <section class="faq-wrapper">
        <div class="faq-header">
            <h3 class="faq-title">Frequently asked questions.</h3>
            <p class="faq-subtitle">Everything you need to know about {{ state.appName }}.</p>
        </div>
        <div class="container">
            <AccordionGroup />
        </div>
    </section>
</template>

<script setup lang="ts">
import { APP_NAME } from '~~/config';

const state: FAQState = {
    appName: APP_NAME
}
</script>
<style lang="scss" scoped src="./FrequentlyAskedQuestions.scss"></style>