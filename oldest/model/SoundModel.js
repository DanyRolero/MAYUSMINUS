class SoundModel {

    //---------------------------------------------------------------------------------
    constructor(url, handler) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.audioBuffer = null;

        fetch(url)
        .then(response => response.arrayBuffer())
        .then(data => this.audioContext.decodeAudioData(data))
        .then(buffer => { 
            this.audioBuffer = buffer;
            if(this.audioContext.state === 'suspended') this.audioContext.resume();
            if(handler != undefined) handler();
        });
    }

    //---------------------------------------------------------------------------------
    play() {
        if(!this.audioBuffer) return;
        
        var source = this.audioContext.createBufferSource();
        source.buffer = this.audioBuffer;
        source.connect(this.audioContext.destination);
        source.start(0);
    }
}