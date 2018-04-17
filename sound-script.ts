let soundsGood: HTMLImageElement = document.getElementById("cuteGraphicsForMusic") as HTMLImageElement;


soundsGood.onclick = function (event: MouseEvent): void {
    var sound = new Howl({
        src: ["Africa8Bit.mp3"]
    });
    sound.play();
};
