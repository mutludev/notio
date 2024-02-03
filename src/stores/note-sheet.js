import { defineStore } from 'pinia'
import abcjs from 'abcjs'

export const useNoteSheetStore = defineStore('noteSheet', {
    state: () => ({
        containerId: "",
        abcObject: null,
        timingObject: null,
        notes: "A"
    }),
    actions: {
        initialize(containerId) {
            let abcObject = abcjs.renderAbc(containerId, this.notes, { scale: 1.5 })[0];
            this.abcObject = abcObject
            let timingObject = new abcjs.TimingCallbacks(abcObject, {
                          qpm: abcObject.metaText.tempo,
                          extraMeasuresAtBeginning: 0,
                          beatCallback: this.onBeat,
                          beatSubdivisions: 20,
            });
            this.timingObject = timingObject
            this.containerId = containerId
        },
        updateNotes(notes) {
            this.notes = notes
            this.initialize(this.containerId)
        }
    },
})