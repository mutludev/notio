<script setup>
import { onMounted } from "vue";
import { useNoteSheetStore } from "@/stores/note-sheet";

const noteSheetStore = useNoteSheetStore();

onMounted(() => {
  noteSheetStore.initialize("notes");
});

</script>

<template>
  <div class="notes-container">
    <div id="notes"></div>
  </div>
</template>

<style scoped>
.notes-container {
  width: 500px;
}
</style>

