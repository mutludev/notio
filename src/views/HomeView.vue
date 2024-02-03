<script setup>
import NoteSheet from "@/components/note-sheet.vue";
import { useNoteSheetStore } from "@/stores/note-sheet";
const noteSheetStore = useNoteSheetStore();

</script>

<template>
  <note-sheet />
</template>

<style scoped>
</style>

