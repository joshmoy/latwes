<template>
  <div class="modal-overlay">
    <div class="modal">
      <!-- Modal content -->
      modal opened
      <slot></slot>

      <!-- Close button -->
      <button @click="handleCloseModal">Close</button>
    </div>
  </div>
</template>

<script setup>
// const { emit } = defineEmits(["close"]);

// Emits the 'close' event to parent when the modal is closed
const handleCloseModal = () => {
  ctx.emit("close");
};
</script>
