import { defineStore } from 'pinia'
import abcjs from 'abcjs'

const audio = new Audio(
 'data:audio/mpeg;base64,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' 
)
function randomNotes() {
  let notes ='X:96\nT:Ode to Joy\nM:4/4\nL:1/4\nK:G\n| B B c d | d c B A | G G A B | B>A A2 |\n| B B c d | d c B A | G G A B | A>G G2 |\n| A A B G | A B/c/ B G | A B/c/ B A | G A D2 |\n| B B c d | d c B A | G G A B | A>G G2 |]'
  console.log(notes)
  return notes
}

function clearAllNotes() {
  let notes = document.getElementsByClassName('abcjs-note')
  for (let i = 0; i < notes.length; i++) {
    notes[i].style.color = 'black'
  }
}

export const useNoteSheetStore = defineStore('noteSheet', {
  state: () => ({
    containerId: '',
    abcObject: null,
    timingObject: null,
    isPlaying: false,
    lineOffsetPixels: 0,
    notes: "A"
  }),
  actions: {
    initialize(containerId) {
      let abcObject = abcjs.renderAbc(containerId, this.notes, {
        add_classes: true,
        paddingright: 15,
        staffwidth: 800,
      })[0]
      this.abcObject = abcObject
      let timingObject = new abcjs.TimingCallbacks(abcObject, {
        qpm: 72,
        extraMeasuresAtBeginning: 0,
        beatCallback: this.onBeat,
        eventCallback: this.eventCallback,
        lineEndCallback: this.lineEnd,
        beatSubdivisions: 1
      })
      this.timingObject = timingObject
      this.containerId = containerId
    },
    updateNotes(notes) {
      this.notes = notes
      this.timingObject.stop()
      this.timingObject = null
      this.isPlaying = false
      this.initialize(this.containerId)
    },
    randomizeNotes() {
      this.updateNotes(randomNotes())
    },
    startPlaying() {
      this.timingObject.start()
      this.isPlaying = true
    },
    pausePlaying() {
      this.timingObject.pause()
      this.isPlaying = false
    },
    stopPlaying() {
      this.timingObject.stop()
      this.isPlaying = false
    },
    resetPlaying() {
      this.lineOffsetPixels = 0
      clearAllNotes()
      this.stopPlaying()
    },
    onBeat(beatNumber) {
      
      console.log(beatNumber)
    },
    eventCallback(event) {
      clearAllNotes()

      if (event) {
        audio.play()
        event.elements[0][0].style.color = '#b71010'
      } else {
        this.isPlaying = false
        this.lineOffsetPixels = 0
      }
    },
    lineEnd(info) {
      console.log(info)
      this.lineOffsetPixels = `-${info.top-75}px`
    }
  },
  getters: {
    playing: (state) => state.isPlaying,
    getLineOffsetPixels: (state) => state.lineOffsetPixels
  }
})
