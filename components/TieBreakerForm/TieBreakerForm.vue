<template>
  <div class="tie-breaker" v-if="tieBreakerData.question">
    <h1 class="tie-breaker-title">Tie Breaker</h1>
    <p class="helper">Results are restricted to extra time results, excluding penalties.</p>
    <p><span>Question:</span> {{ tieBreakerData.question }}</p>
    <Form @submit="onSubmit" :validation-schema="schema" :initial-values="initialDetails">
      <div class="tie-breaker-flex">
        <CustomInput
          placeholder="Enter your answer"
          name="answer"
          type="text"
          inputClass="border-black"
          :is-disabled="hasMatchStarted"
        />
        <div class="tie-breaker-submit">
          <button type="submit" :disabled="isLoading || hasMatchStarted">
            <SmallSpinner v-if="isLoading" />
            <template v-else> Submit </template>
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import * as yup from "yup";
import { answerTieBreaker } from "../../services/Prediction";
import { useToast } from "vue-toastification";

interface IProps {
  tieBreaker: Record<string, string>;
  slug: string;
  firstMatchKickoff: string
}

const props = defineProps<IProps>();

const $toast = useToast();

let tieBreakerData = props.tieBreaker;
const currentDate = new Date();
let firstMatchDate = new Date(props.firstMatchKickoff);
let hasMatchStarted = true

const isLoading = ref(false);
let initialDetails = ref({
  answer: props.tieBreaker?.user_tiebreaker_answer,
});

const schema = yup.object().shape({
  answer: yup.string().required("Tie breaker answer is required"),
});

watch(
  () => props.tieBreaker,
  (newVal) => {
    if (newVal) {
      tieBreakerData = newVal;
      initialDetails.value = {answer: newVal?.user_tiebreaker_answer}
    }
  }
);

watch(
  () => props.firstMatchKickoff,
  (newVal) => {
    if (newVal) {
      firstMatchDate = new Date(newVal);
      hasMatchStarted = currentDate >= firstMatchDate;
    }
  }
);

async function onSubmit(values: any) {
  try {
    isLoading.value = true;
    await answerTieBreaker(props.slug, tieBreakerData.id, { answer: values.answer });

    $toast.success("Tie breaker submitted successfully!", {
      timeout: 3000,
    });

    isLoading.value = false;
  } catch (error: any) {
    $toast.error(error?.response?.data?.message || "Something went wrong. Please try again later", {
      timeout: 3000,
    });
    isLoading.value = false;
  }
}
</script>

<style lang="scss" scoped src="./TieBreakerForm.scss"></style>
