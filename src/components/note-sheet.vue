<script setup>
import { onMounted, computed } from 'vue'
import { useNoteSheetStore } from '@/stores/note-sheet'

const noteSheetStore = useNoteSheetStore()



onMounted(() => {
  noteSheetStore.initialize('notes')
})

let offsetPixel = computed(() => {
  return noteSheetStore.lineOffsetPixels
})

</script>

<template>
  <div id="notes"></div>
</template>

<style>
#notes {
  height: 200px !important;
  position: relative;
}

#notes svg {
  transform: translate(0, v-bind(offsetPixel)); 
  transform-origin: 0px 0px 0px;
  transition: all 500ms;
  }
</style>
