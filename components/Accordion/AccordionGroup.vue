<template>
    <div class="accordion-group">
        <AccordionItem 
            v-for="question in questions"
            :key="question.id"
            :item-id="question.id"
            :content="question.content"
            :title="question.title"
            :is-open="state.openQuestion === question.id"
            @toggle="toggleAccordion" />
    </div>
</template>

<script setup lang="ts">
const state = reactive({ openQuestion: 0 })
const questions: IAccordionItem[] = [
    {
        id: 1,
        title: 'What is offgoal?',
        content: 'Offgoal is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today! Offgoal is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today!'
    },
    {
        id: 2,
        title: 'What is offgoal?',
        content: 'Offgoal is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today! Offgoal is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today!'
    },
    {
        id: 3,
        title: 'What is offgoal?',
        content: 'Offgoal is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today! Offgoal is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today!'
    },
    {
        id: 4,
        title: 'What is offgoal?',
        content: 'Offgoal is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today! Offgoal is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today!'
    },
    {
        id: 5,
        title: 'What is offgoal?',
        content: 'Offgoal is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today! Offgoal is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today!'
    }
]
function toggleAccordion(id: number) {
    if(state.openQuestion === id) {
        state.openQuestion = 0;
    } else {
        state.openQuestion = id;
    }
}
</script>