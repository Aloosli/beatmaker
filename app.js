class DrumKit {
    constructor() {
      this.pads = document.querySelectorAll(".pad");
      this.playBtn = document.querySelector(".play");
      this.currentKick = "./sounds/kick-classic.wav";
      this.currentSnare = "./sounds/snare-acoustic01.wav";
      this.currentHihat = "./sounds/hihat.acoustic01.wav";
      this.kickAudio = document.querySelector(".kick-sound");
      this.snareAudio = document.querySelector(".snare-sound");
      this.hihatAudio = document.querySelector(".hihat-sound");
      this.index = 0;
      this.bpm = 150;
      this.isPlaying = null;
      this.selects = document.querySelectorAll("select");
      this.muteBtns = document.querySelectorAll(".mute");
      this.tempoSlider = document.querySelector(".tempo-slider");
    }
    activePad() {
        this.classList.toggle("active");
      }
      repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        //Loop over the pads
        activeBars.forEach(bar => {
          bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
          if (bar.classList.contains("active")) {
            if (bar.classList.contains("kick-pad")) {
              this.kickAudio.currentTime = 0;
              this.kickAudio.play();
            }
            if (bar.classList.contains("snare-pad")) {
              this.snareAudio.currentTime = 0;
              this.snareAudio.play();
            }
            if (bar.classList.contains("hihat-pad")) {
              this.hihatAudio.currentTime = 0;
              this.hihatAudio.play();
            }
          }
        });
        this.index++;
      }
