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
        title: 'What is Goborr?',
        content: 'Goborr is a platform for you to compete with other football fans to get the winner takes all price by predict the outcome of football matches and stacking up points. Start predicting today!'
    },
    {
        id: 2,
        title: 'How does the soccer prediction pool work, and how can I participate?',
        content: 'The soccer prediction pool is a community-driven game where all participants put money into a common pool and make predictions on upcoming soccer events. At the end of the week, the participant with the most accurate predictions win the entire pool. To participate, simply create an account, deposit your chosen amount into the pool, and start making your predictions!'
    },
    {
        id: 3,
        title: 'What is the minimum amount I can contribute to the pool, and is there a limit to how many predictions I can make?',
        content: `The minimum contribution to the pool varies depending on the rules set for that particular week. Generally, there is a fixed amount to participate, and once you've paid into the pool, you can make predictions on all the available games for that week. Specific guidelines, including any limitations on the number of predictions, will be outlined in the app's terms and conditions.`
    },
    {
        id: 4,
        title: 'How are the winners determined, and when will the winnings be distributed?',
        content: `Winners are determined based on the accuracy of their predictions relative to the actual outcomes of the sports events. Points are awarded for correct predictions, and the participant(s) with the highest points at the end of the week win the pool. Winnings are typically distributed within 24 hours of the final game's conclusion. Check the app's rules section for detailed information on scoring and prize distribution.`
    },
    {
        id: 5,
        title: 'I won the pool! How can I withdraw my winnings, and are there any fees associated with it?',
        content: `Winnings are automatically sent to the bank account you've linked with our app at the end of each week's competition. Typically, it can take up to a few business days for the funds to reflect in your account, depending on your bank's processing times. There are no additional fees on our end for this transfer, but always check with your bank in case they have any incoming transfer fees.`
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
