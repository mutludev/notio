<script setup>

</script>

<template>
    <div class="metronome-container">
       <div class="metronome">
        Metronome
       </div>
        <div class="controls">
            <div class="bpm">
                <input type="number" name="bpm" id="bpm" min="1" max="300" value="60">
            </div>
            <div class="tick">
                <input type="number" name="tick" id="tick" min="1" max="4" value="1">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .metronome-container {
        display: flex;
        flex-direction: row;
    }
    .metronome {
        font-size: 2rem;
    }
    .controls {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    input {
        border: 2px solid hsl(42, 31%, 60%);
        border-radius: 4px;
        height: 40px;
        width: 100px;
        font-size: 1.5rem;
    }

    div {
        border: 1px solid red;
    }
</style>