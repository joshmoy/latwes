<template>
  <div class="tie-breaker">
    <h1 class="tie-breaker-title">Tie Breaker</h1>
    <p class="helper">Results are restricted to full time results, excluding penalties.</p>
    <p><span>Question:</span> {{ tieBreaker?.question }}</p>
    <Form @submit="onSubmit" :validation-schema="schema" :initial-values="initialDetails">
      <div class="tie-breaker-flex">
        <CustomInput
          placeholder="Enter your answer"
          name="answer"
          type="text"
          inputClass="border-black"
        />
        <div class="tie-breaker-submit">
          <button type="submit" :disabled="isLoading">
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
}

const props = defineProps<IProps>();
const { tieBreaker, slug } = props;

const $toast = useToast();

const isLoading = ref(false);
const initialDetails = ref({
  answer: tieBreaker?.user_tiebreaker_answer,
});

const schema = yup.object().shape({
  answer: yup.string().required("Tie breaker answer is required"),
});

async function onSubmit(values: any) {
  try {
    isLoading.value = true;
    await answerTieBreaker(slug, tieBreaker.id, { answer: values.answer });

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
