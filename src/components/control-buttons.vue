<script setup>
import { useNoteSheetStore } from "@/stores/note-sheet";
const noteSheetStore = useNoteSheetStore();

function togglePlaying() {
  if(noteSheetStore.playing) {
    noteSheetStore.pausePlaying()
  } else {
    noteSheetStore.startPlaying()
  }
}

</script>

<template>
    <div class="buttons">
        <div>
          <button @click="togglePlaying">{{ noteSheetStore.playing ? 'Stop' : 'Play' }}</button>
          <button @click="noteSheetStore.resetPlaying">Restart</button>
        </div>
        <div>
          <button @click="noteSheetStore.randomizeNotes">New Notes</button>
        </div>
    </div>
</template>

<style scoped>
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.buttons div {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.buttons button {
  min-width: 150px;
  width: 100%;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: hsl(42, 31%, 60%);
  color: black;
  cursor: pointer;
}
</style>
