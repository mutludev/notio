<script setup>
import { useNoteSheetStore } from "@/stores/note-sheet";
const noteSheetStore = useNoteSheetStore();

</script>

<template>
    <div class="buttons">
        <button @click="noteSheetStore.startPlaying">New Notes</button>
        <button @click="noteSheetStore.resetPlaying">Restart Playing</button>
    </div>
</template>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.buttons button {
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: hsl(42, 31%, 60%);
  color: black;
  cursor: pointer;
}
</style>
