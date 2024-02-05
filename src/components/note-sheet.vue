<script setup>
import { onMounted } from "vue";
import { useNoteSheetStore } from "@/stores/note-sheet";

const noteSheetStore = useNoteSheetStore();

onMounted(() => {
  noteSheetStore.initialize("notes");
});

</script>

<template>
    <div id="notes"></div>
</template>

<style scoped>
  #notes {
    height: 200px !important;
  }
</style>

