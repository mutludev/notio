import { defineStore } from 'pinia'
import abcjs from 'abcjs'


const audio = new Audio('data:audio/wav;base64,UklGRlsZAABXQVZFZm10IBAAAAABAAEARKwAAESsAAABAAgAZGF0YTcZAAAAIEhwl77l///as41nQRsABSpQdZq/4//00KuHZEAdABE0V3qdv+H96Makg2FAIAYdPl5/n77e9d29nn9gQSMPKEZkgqC92uvStZh7X0MnGTJOaoWhu9bhyK2SeF5FKyM8Vm+IobnR1r6mjnZeRzEuRl10iqC2zMu1n4l0X0s2OU5jd4ufs8XArZmGc2FOPUNWaHqNn7HCuqiWg3FfTTxGWGp9j6Gzw7imk4FvXUs8SFptf5GjtsO2o5F/bVtIPEtdb4GTprjDs6GPfWtYRj1NX3GDlqi6wrGfjXpoVkQ+T2J0hpiqvMCunIp4ZlRCQFJkdoiarL6+rJqIdmRSQEJUZniKnK7AvKqYhnRiUD5FV2l6jJ6wwbmnlYNxYE49R1lrfY+gssK3pZOBb11MPUlbbX+Ro7TCtKORf21bST1MXm+Bk6W3wbKgjn1rWUc+TmByg5WnucCwnox7aVdFP1BidIaXqbu/rZyKeGdVQ0FTZHaImau9vauZiHZkU0FDVWd4ipytv7qpl4Z0YlFARldpe4yer8C4ppWDcmBPP0haa32OoLHAtqSTgXBeTT5KXG1/kKKzwLOikH9tXEs/TV5wgZOktcCxoI59a1pJP09hcoOVpre/r52Me2lYR0FRY3SFl6i5vqybinhnVkVCVGV2iJmqu7uqmYh2ZVRDRVZneYqbrL25qJeFdGNSQUdYaXuMna6+t6aUg3JhUEBJWmx9jp+wv7WjkoFwX05ATF1uf5Chsr+yoZB/bl1MQE5fcIGSo7S/sJ+OfWxbSkFQYXKDlKW2vq6djHtqWUhCUmN0hZanuLyrm4p5aFdGRFVmd4eYqbq6qZiHd2ZVREZXaHmKmqu8uKeWhXRkU0JIWWp7jJytvballINyYlFCSltsfY6er76zo5KBcGBPQU1dbn+QoLG+saCQf25eTUFPYHCBkqKzva+ejn1sXEtCUWJyg5SktbytnIt7alpJQ1NkdYWWpre7q5qJeWhYR0VWZneHmKi5uaiYh3dmVkVHWGh5iZqqu7emloV1ZFRESVpqe4ucrLy0pJSDc2JSQ0xcbX2Nnq68sqKRgXFgUENOXm9/j6CwvLCgj39vXk5DUGBxgZGisryuno19bVxMQ1Jic4OTpLS7rJuLe2taSkVUZXWFlaa2uqqZiXlpWEhGV2d3h5enuLinl4d3Z1dGSFlpeYmZqbm1pZWFdWVVRUtba3uLm6u6s6OTg3NjU0RNXW19jZ2tu7GhkYFxYVFET19vf4+fr7uvn49/b19PRFFhcYGRobG7rZ2NfW1dTUVTY3ODk6Ozuqubi3trW0tGVWV1hZWltbipmYl5aVlKSFdnd4eXp7a2p5eHd2dYSEpaaXmJmai4tKSVhXVlVkZMXGt7i5uqubKik4NzZFRGTl5tfY2crLqwoJGBcWJSRVBgb3+Pnq66rp6Pf29gUEVSYnGBkaCwuaycjX1tXk5GVGRzg5Kisriqmot7bFxNR1ZmdYWUpLO3qJiJeWpaS0lYaHeHlqa1taaWh3doWElLWmp5iZint7OklIV1ZldITVxse4uaqbixopKDdGRVR09ebn2MnKu4r6CQgXJiU0dRYHB/jp6tuK2ejn9wYVFHU2JygZCfr7irnIx9bl9QR1VkdIOSobC3qZqKe2xdTklXZnaFlKOytqeYiHlqW0xKWWh3h5altLSllod3aFlKTFtqeYiXprWyo5SFdmdYSU5dbHuKmai2sKGSg3RlVkhQX259jJuqt66fkIFyY1RIUmFwf46drLesnY5/cGFSSFRjcoGQn622qpuMfW5gUUlWZXSDkqCvtqiZinttXk9KWGd2hZOisbSml4h6a1xNS1ppeIaVpLOzpJWGeGlaTE1ca3qIl6a0saKThXZnWUpPXm17ipmnta+gkYN0ZVdKUWBvfYyaqbWtno+BcmRVSVNicX+OnKu1q5yOf3FiVEpVZHKBj56stamajH1vYFJKV2Z0g5GgrrSnmIp7bV9QS1lodoSTobCzpZaIemtdT01baniGlaOxsaOVhnhqW01PXWt6iJals6+hk4R2aFpMUV9te4qYprStn5GDdGZYS1Nhb32Lmqi0q52PgXNkVktVY3F/jZuqtKqbjX9xY1VLVmVzgY+dq7SomYt9b2FTTFhmdYORn62zppiKfG1fUU1aaHaEkqCusqSWiHpsXlBOXGp4hpSisLCilIZ4alxOUF5seoiWpLGuoJKEdmhbTVJgbnyJl6WyrJ6Qg3VnWUxUYnB9i5mns6qcj4FzZVdMVmNxf42bqLOom41/cWRWTFhlc4GPnKqyp5mLfXBiVE1ZZ3WDkJ6ssqWXiXxuYFNOW2l3hJKfrbCjlYh6bF9RT11reIaToa+voZOGeGtdUFFfbHqIlaOwrZ+ShHdpXE5TYW58iZeksaudkIJ1Z1pOVWJwfYuYprGpnI6Bc2ZYTldkcn+Nmqexp5qMf3JkV05ZZnOBjpypsaaYi31wY1VOWmh1gpCdqrCklol8bmFUT1xpd4SRn6yvopWHem1gUlFea3iGk6CtraCThnhrXlFTYG16h5Wir6yekYR3al1QVGFvfImWo7CqnY+CdWhbT1ZjcH2LmKWwqJuOgXRnWk9YZXJ/jJmmsKaZjH9yZVhPWmd0gY6bqLCkl4p9cGRXUFtodYKPnKmvo5aJfG9iVVFdaneEkZ6rrqGUh3ptYFRSX2x5hpKfrKyfkoZ5bF9SVGFteoeUoa2qnpGEd2peUVZib3yJlaKuqZyPgnZpXFBXZHF+ipekr6eajYF0Z1tQWWZyf4yYpa+lmIx/cmZZUFtndIGNmqeuo5eKfnFkWFFcaXaCj5uorqKViXxvY1ZSXmt3hJCdqaygk4d6bmFVU2BseYWSnqurnpKFeWxgU1VibnqHk6CsqZ2QhHdrXlJXY3B8iJWhraebj4J2aV1SWGVxfoqWo62mmY2BdGhcUlpmc3+LmKStpJiLf3NnWlJcaHSBjZmlraKWin5xZVlSXWp2go6bp6yhlIh8cGRXU19reISQnKirn5OHe25iVlVhbXmFkZ2qqp2RhXltYVVWYm97h5Ofq6ickIR4bF9UWGRwfIiUoKummo6CdmpeU1pmcn6KlqKspZmNgXVpXVNbZ3N/i5ejrKOXi39zZ1tTXWl1gY2YpKyhlYp+cmZaVF5qdoKOmqaroJSIfHBlWVVgbHiEj5unqp6ShntvY1dWYm15hZGdqKidkYV5bmJWWGNve4aSnqmnm4+EeGxgVVllcXyIlJ+qpZmOgnZrX1VbZnJ+iZWhq6OYjIF1aV5UXGh0f4uWoquilot/dGhcVV5qdYGMmKOqoJWJfnJnW1Vga3eCjpmkqZ+TiHxxZVpWYW14g4+apqidkoZ7b2RZV2NueYWQnKennJCFeW5jV1lkcHuGkp2opZqPg3htYVZaZnF8iJOeqaSZjYJ3a2BWXGdyfomUoKmil4yBdWpfVl1pdH+KlqGpoZaKf3RpXlZfanWBjJeiqZ+UiX5zZ1xWYWx3go2Yo6iek4d8cWZbV2JteIOOmaWnnJGGe3BlWllkb3qFkJumppuQhXpvZFlaZXB7hpGcp6SZjoN4bWJYXGdxfIeSnaejmI2Cd2xhV11oc36JlJ6ooZaLgXZrYFdfaXR/ipWgqKCVin90al9XYGt2gYuWoaeek4l+c2heWGJsd4KNl6KnnZKHfHJnXFljbniDjpmjppuRhntwZltaZG96hY+apKSaj4R6b2VaW2Zxe4aQm6WjmI6DeW5jWV1ncn2HkpymoZeMgndtYlleaXN+iJOdpqCVi4B2a2FYYGp1f4qUn6aflIp/dWpgWWFsdoCLlaCmnZOIfnNpX1ljbXeCjJehpZyRh31yaF5aZG55g42YoqSakIZ7cWdcW2VweoSPmaOjmY+EenBmW11ncXuGkJqkopeNg3lvZFpeaHJ9h5GbpaCWjIJ4bWNaX2p0foiSnKWflYuAdmxiWmFrdX+Jk52lnZOJf3VrYVpibHaAi5WfpZySiH50amBbZG54goyWoKSbkYd9c2lfW2VveYONl6GjmY+Fe3JoXlxmcHqEjpiiopiOhHpwZl1eaHJ7hY+Zo6CXjYN5b2VcX2lzfYeQmqOflYuCeG5kW2FqdH6IkpuknpSKgHdtY1tibHV/iZOcpJyTiX91bGJbY213gIqUnaObkYh+dGthXGVueIKLlZ+jmpCGfXNqYF1mcHmDjJagopiPhXxyaF9eZ3F6hI6XoaGXjoR6cWdeX2lyfIWPmKGfloyDeXBmXWBqc32GkJminpSLgnhvZV1ia3V+h5Gaop2TioB3bmRdY2x2f4mSm6Kbkol/dm1jXWRud4CKk5yimpGHfnVrYl1mb3iCi5SdoZmPhn10amFeZ3B5g4yVnqCXjoV8c2lgX2hxe4SNlp+flo2Ee3FoX2Bpc3yFjpegnpWMg3pwZ15ia3R9ho+YoZ2Ui4F4b2ZeY2x1foeQmaGbkomAd25lXmRtdn+IkZqhmpGIf3ZtZF5lbneAiZKboZmQh351bGNfZ3B5gYqTnKCYj4Z9dGtiX2hxeoOLlJ2flo6FfHNqYWBpcnuEjJWenpWMhHtyaWBianN8hY2Wn52Ui4N6cWhgY2x0fYaOl5+ck4qBeXBnX2RtdX6Hj5igmpKJgHhvZl9lbnd/iJCZoJmQiH93bmVgZ294gImRmp+Yj4d+dm1kYGhweYGKkpufl46GfXVsZGFpcXqCi5OcnpWNhXx0a2NianN7g4yUnZ2UjIN7c2piY2t0fISNlZ6ck4uCenJpYWRsdX2GjpaempKKgXlxaGFlbnZ+h4+XnpmRiYB4cGdhZm93f4iQmJ6YkId/d29nYWhweICIkZmel4+GfnZuZmFpcXmBiZKanZaOhX11bWVianJ6goqTm52VjIR8dGxkY2tze4OLk5ubk4uDe3NrY2RsdHyEjJScmpKKgnpyamJlbXV9hY2VnZmRiYF5cWliZm52foaOlp2YkIiAeHBpYmhvd3+Hj5edl4+Hf3dwaGJpcXiAiJCYnZaOhn52b2djanJ5gYmRmZyVjYV9dm5mY2tzeoKKkpmblIyEfHVtZWRsdHuDi5OampKLg3t0bGRlbXV8hIyTm5mRioJ6c2tkZm52fYWNlJuYkImBenJqZGhvd36GjZWcl4+IgHlxamNpcHh/h46Wm5aOh394cGlkanF5gIiPl5uVjYZ+d29oZGtyeoGJkJeblIyFfXZvZ2Vsc3uCiZGYmpOLhH11bmZmbXR8g4qSmZmSioN8dG1mZ251fYSLkpqYkYmCe3NsZWhvdn2FjJOal5CIgXpza2VpcHd+ho2UmpaPh4B5cmtlanF4f4aOlZqVjoZ/eHFqZWtyeYCHjpWalI2FfndwaWVsc3qBiI+WmZOMhX52b2hmbXR7gomQl5mSi4R9dm9oZ251fIOKkZiYkYqDfHVuZ2hvdn2Ei5GYl5CJgnt0bWdpcHd+hIuSmZaPiIF6c2xmanF4foWMk5mVjoeAeXNsZmtyeH+GjZSZlI2Gf3lya2Zsc3mAh46UmJOMhX54cWpnbXR6gYiOlZiSi4R+d3BqZ250e4KIj5aXkYqDfXZwaWhvdXyDiZCWlpCJg3x1b2hpcHZ9g4qQl5WPiIJ7dW5oanF3foSLkZeUjoeBenRtaGtyeH6Fi5KXk42HgHpzbWhscnl/hoyTl5OMhn95c2xobXN6gIaNk5eSi4V/eHJraG50e4GHjpSXkYqEfndxa2lvdXuCiI6UlpCJg313cGppcHZ8gomPlZWPiYJ8dnBqanF3fYOJkJaUjoiCe3VvaWtxeH6EipCWk42HgXt1bmlscnh/hYuRlpKMhoB6dG5pbXN5f4WLkZaRi4V/eXNtaW50eoCGjJKWkYuFf3lzbWlvdXuBh42TlZCKhH54cmxqcHZ8goeNk5WPiYN9d3Fra3F3fIKIjpSUjoiCfHdxa2xxd32DiY+Uk42HgXx2cGttcnh+hImPlZKMh4F7dXBqbXN5f4SKkJWRi4aAenVvam50en+Fi5CVkIuFf3p0bmpvdXqAhouRlI+KhH95c25rcHZ7gYaMkZSPiYR+eHNta3F2fIGHjJKTjoiDfXhybWxyd32CiI2Tk42Ign13cmxtcnh9g4iOk5KMh4F8d3FsbnN5foOJjpORi4aBe3ZxbG90eX+EiY+TkIuFgHt1cGxvdXp/hYqPk4+KhX96dW9scHV7gIWLkJOOiYR/eXRvbHF2e4GGi5CTjoiDfnl0bm1yd3yBhoyRko2Ig314c25tcnh9goeMkZGMh4J9eHNtbnN4fYOIjZKQi4aBfHdybW90eX6DiI2SkIuGgXx3cm1wdXp/hImOko+KhYB7dnFtcHV6f4SJjpKOiYR/enZxbXF2e4CFio+SjYmEf3p1cG5yd3yBhYqPkY2Ig355dHBuc3h8gYaLkJGMh4J+eXRvb3N4fYKGi5CQi4aCfXh0b290eX6Ch4yQj4uGgXx4c29wdXp+g4iMkY6KhYF8d3NucXZ6f4OIjZGOiYWAe3dybnJ2e3+EiY2QjYiEf3t2cm9yd3uAhImNkIyIg396dnFvc3h8gIWJjpCMh4N+enVxb3R4fYGFio6Pi4eCfnl1cHB0eX2ChoqPj4qGgn15dHBxdXl+goaLj46KhYF9eHRwcXZ6foOHi4+NiYWAfHh0cHJ2e3+Dh4yPjYiEgHx3c3Bzd3t/hIiMj4yIhH97d3Nwc3h8gISIjI+Lh4N/e3dycHR4fICFiY2Pi4eCfnp2cnF1eX2BhYmNjoqGgn56dnJxdXl9gYWJjY2JhYF9eXVxcnZ6foKGio6NiYWBfXl1cXN3en6ChoqOjIiEgHx5dXFzd3t/g4eLjouIhIB8eHRxdHh8f4OHi46Lh4N/fHh0cXR4fICEh4uOioaDf3t3dHJ1eX2AhIiMjYqGgn57d3Nydnl9gYSIjI2JhYJ+endzc3Z6foGFiYyMiIWBfnp2c3N3en6ChYmMjIiEgX16dnN0d3t+goaJjIuHhIB9eXZydHh7f4KGiYyKh4OAfHl1c3V4fH+DhoqMioaDf3x5dXN2eXyAg4eKjImGgn98eHVzdnl9gISHioyJhYJ/e3h1c3d6fYGEh4uLiIWBfnt4dHR3en6BhIiLi4iEgX57d3R0eHt+gYWIi4qHhIF9end0dXh7f4KFiIuKh4OAfXp3dHZ5fH+ChYiLiYaDgH16dnR2eXx/g4aJi4mGgn98eXZ0d3p9gIOGiYuIhYJ/fHl2dHd6fYCDhomKiIWCf3x5dnV4e36Bg4aJioeEgX57eHZ1eHt+gYSHioqHhIF+e3h1dnl7foGEh4qJhoOAfnt4dXZ5fH+ChIeKiYaDgH17eHV3eXx/goWHioiFg4B9enh1d3p9f4KFiIqIhYJ/fXp3dXh6fYCChYiJh4SCf3x6d3Z4e32Ag4WIiYeEgX98end2eXt+gIOGiImGhIF+fHl3dnl8foGDhoiIhoOBfnx5d3d5fH6Bg4aIiIWDgH57eXd3enx/gYSGiIeFgoB+e3l3eHp9f4KEhoiHhYKAfXt5d3h7fX+ChIaIhoSCf317eHd5e32AgoSHiIaEgX99e3h3eXt+gIKFh4iGg4F/fXp4d3p8foCChYeHhYOBf3x6eHh6fH6Bg4WHh4WDgX58enh4enx/gYOFh4eEgoB+fHp4eXt9f4GDhYeGhIKAfnx6eHl7fX+Bg4WHhoSCgH58enh5e31/gYOFh4WDgX99fHp4enx+gIKEhoeFg4F/fXt5eHp8foCChIaGhYOBf317eXl7fH6AgoSGhoSCgX99e3l5e31/gIKEhoaEgoB/fXt5eXt9f4GChIaFhIKAfn17eXp8fX+BgoSGhYOCgH58e3l6fH5/gYOEhoWDgYB+fHt5e3x+f4GDhIaEg4F/fnx7ent8foCBg4SFhIKBf358e3p7fX6AgYOEhYSCgX9+fHt6fH1/gIGDhIWDgoB/fXx7enx9f4CCg4SEg4KAf318e3t8fn+AgoOEhIOBgH99fHt7fH5/gIKDhISCgYB+fXx7e31+f4GCg4SDgoGAfn18e3x9fn+BgoOEg4KBf359fHt8fX6AgYKDhIOCgX9+fXx7fH1/gIGCg4SDgYB/fn18e31+f4CBgoODgoGAf359fHx9fn+AgYKDg4KBgH9+fXx8fX5/gIGCg4OCgYB/fn18fH1+f4CBgoODgoGAf359fH19fn+AgYKDgoGBgH9+fXx9fn9/gIGCg4KBgH9/fn18fX5/gICBgoOCgYB/f359fX1+f4CAgYKCgoGAf39+fX19fn+AgYGCgoGBgH9+fn19fn5/gIGBgoKBgYB/fn59fX5/f4CBgYKCgYCAf35+fX1+f3+AgYGCgYGAgH9+fn1+fn9/gIGBgoGBgIB/fn5+fn5/f4CBgYGBgIB/f35+fn5/f4CAgIGBgYCAf39/fn5+f3+AgICBgYGAgH9/f35+fn9/gICAgYGAgIB/f39+fn9/f4CAgIGBgICAf39/fn5/f3+AgICBgICAgH9/f39/f39/gICAgICAgIB/f39/f39/f4CAgICAgICAf39/f39/f3+AgICAgICAf39/f39/f3+AgICAgICAgH9/f39/f39/gICAgICAgIB/f39/f39/f4CAgICAgA==')
function randomNotes(){
    let notes = "M:4/4\n"
    let notesArray = ["D2", "E2", "F2", "G2", "A2", "B2", "C2"]
    for (let i = 0; i < 8; i++) {
        notes += notesArray[Math.floor(Math.random() * notesArray.length)] + " "
    }
    return notes
}

function clearAllNotes() {
    let notes = document.getElementsByClassName("abcjs-note")
            for (let i = 0; i < notes.length; i++) {
                notes[i].style.color = "black"
            }
}

export const useNoteSheetStore = defineStore('noteSheet', {
    state: () => ({
        containerId: "",
        abcObject: null,
        timingObject: null,
        notes: randomNotes(),
    }),
    actions: {
        initialize(containerId) {
            let abcObject = abcjs.renderAbc(containerId, this.notes, { scale: 2, add_classes: true, paddingright: 15 })[0];
            this.abcObject = abcObject
            let timingObject = new abcjs.TimingCallbacks(abcObject, {
                        qpm: 60,
                        extraMeasuresAtBeginning: 1,
                        beatCallback: this.onBeat,
                        eventCallback: this.eventCallback,
                        beatSubdivisions: 1,
            });
            this.timingObject = timingObject
            this.containerId = containerId
        },
        updateNotes(notes) {
            this.notes = notes
            this.timingObject.stop()
            this.timingObject = null
            this.initialize(this.containerId)
        },
        randomizeNotes() {
            this.updateNotes(randomNotes())
        },
        startPlaying() {
            this.timingObject.start()
        },
        resetPlaying() {
            clearAllNotes()
            this.timingObject.start(0)
        },
        onBeat(beatNumber) {
            audio.play()
            console.log(beatNumber)
        },
        eventCallback(event) {
            clearAllNotes()
            if(event){
                event.elements[0][0].style.color = "#b71010"
            }
        }
    },
})