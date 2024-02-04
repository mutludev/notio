<script setup>
import NoteSheet from "@/components/note-sheet.vue";
import ControlButtons from "@/components/control-buttons.vue";
import Metronome from "@/components/metronome.vue";
import { onMounted } from "vue";
import { useNoteSheetStore } from "@/stores/note-sheet";
const noteSheetStore = useNoteSheetStore();

</script>

<template>
  <div class="container">
        <metronome />
        <note-sheet />
      <control-buttons /> 
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  background-color: #f9f7f4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

</style>

