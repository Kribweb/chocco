let player;
const playerContainer = $(".player");
let eventsInit = () => {
    $(".player__start").click(e => {
        e.preventDefault();


        if (playerContainer.hasClass('paused')) {
            player.pause();
        } else {
            player.play();
        }

    });
    $(".player__playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (durationSec() / 100) * newButtonPositionPercent;
        $(".player__playback-button").css({
            left: `${newButtonPositionPercent}%`
        });
        player.currentTime = newPlaybackPositionSec;

    });
    $(".player__splash").click(e => {
        play();
    })

};
const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);
    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }
    return `${minutes} : ${seconds}`;

};
const onPlayerReady = () => {
    let interval;
    const durationSec = player.duration();
    $(".player__duration-estimate").text(formatTime(durationSec));
    if (typeof interval !== "undefined") {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        const completedSec = player.currentTime();
        const completedPercent = (completedSec / durationSec) * 100;
        $(".player__playback-button").css({
            left: `${completedPercent}%`
        });
        $(".player__duration-completed").text(formatTime(completedSec));
    }, 1000);
};

const onPlayerStateChange = event => {
    switch (event.data) {
        case 1:
            playerContainer.addClass('active');
            playerContainer.addClass("paused");
            break;
        case 2:
            playerContainer.removeClass('active');
            playerContainer.removeClass("paused");
            break;
    }
};


eventsInit();