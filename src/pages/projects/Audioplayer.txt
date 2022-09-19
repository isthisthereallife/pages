import $ from 'jquery'
import Image from 'next/image'
import { FaBackward, FaChevronLeft, FaEllipsisV, FaForward, FaGratipay, FaPauseCircle, FaPlayCircle, FaPlusSquare, FaRandom, FaRetweet } from 'react-icons/fa'
import styles from '../../styles/audioplayer.module.css'
export default function Audioplayer(){
let songNr = 1
let queueSize
let player = {} // new Audio()

let radio = {}//new Audio()
radio.src = 'http://trace.dnbradio.com:8000/dnbradio_main.mp3'
let podcastPlayer 
let shuffle = false


function start() {

    /**hur många låtar finns i playlist */
    queueSize = 3//playlist.children.length-1

    /**sätt den initiellt aktuella låten */
    player.src = $(".queueItem:nth-child(" + songNr + ")").attr("link")

    $(".queueItem:nth-child(" + songNr + ")").css({ backgroundColor: "orange" })
    $("#coverArt").attr("src", $(".queueItem:nth-child(" + songNr + ")").children(".queueCoverArt").children(".queueImg").attr("src"))
    $("#songInfo").text($(".queueItem:nth-child(" + songNr + ")").children(".queueSongInfo").children(".songName").text())
    $("#artistInfo").text($(".queueItem:nth-child(" + songNr + ")").children(".queueSongInfo").children(".artistName").text())


    $(".queuePlayButton").css({ cursor: "pointer" })
    $(".playbackButton").css({ cursor: "pointer" })
    $(".playButton").css({ cursor: "pointer" })
    $(".songInfoButton").css({ cursor: "pointer" })
    $(".headerButton").css({ cursor: "pointer" })

    $('.queuePlayButton').on('click', queuePlayClick)

    $('#heartButton').on('click', heart_click)

    $('#playerPlay').on('click', play_audio)
    $('#playerPause').on('click', pause_audio)
    $('#backward').on('click', backward)
    $('#forward').on('click', forward)
    $('#repeat').on('click', repeat_toggle)
    $('#shuffle').on('click', shuffle_toggle)
    player.addEventListener('timeupdate', timestamp)
    player.addEventListener('ended', song_end)

}
$(start)


function queuePlayClick() {
    /**avmarkera gammal låt i queue */
    $(".queueItem:nth-child(" + songNr + ")").css({ backgroundColor: "transparent" })

    /**markera vald låt i queue */
    $(this).parent().css({ backgroundColor: "orange" })

    /* hämta bilden från queue*/
    console.log($(this).parent().children(".queueCoverArt").children(".queueImg").attr("src"))

    /*spara bilden över bilden i player*/
    $("#coverArt").attr("src", $(this).parent().children(".queueCoverArt").children(".queueImg").attr("src"))

    /**spara aktuell låt till songNr */
    songNr = $(this).parent().attr('songNr')

    /*spara aktivt låtnummer som källa */
    player.src = $(".queueItem:nth-child(" + songNr + ")").attr("link")

    //hämta och skriv över texten
    $("#songInfo").text($(this).parent().children(".queueSongInfo").children(".songName").text())
    $("#artistInfo").text($(this).parent().children(".queueSongInfo").children(".artistName").text())



    /*spela ljud, från början */
    player.currentTime = 0
    player.play()

}


function timestamp(event) {
    //console.log("omg", Math.round(event.timeStamp / 1000), player.duration)
    console.log("progress", Math.round(player.currentTime),player.duration)
    if (isNaN(player.duration)) {

    }
    if (!isFinite(player.duration)){
        $('#timestampLeft').text("")
        $('#timestampRight').text("")
        
    }

    else {
    $('#timestampLeft').text(sec_to_min(Math.round(player.currentTime)))
    $("#timestampRight").text(sec_to_min(Math.round(player.duration)))
    }

    /*
    //** Popup om att ha lystnat för länge
    if (Math.round(player.currentTime) === 60){
        // eslint-disable-next-line no-restricted-globals
        if (!confirm("Vill du fortsätta lyssna?")){
            player.pause()
        }
    }
    */
    $("#bar").css({ width: ((player.currentTime/player.duration)*100) + "%" })
}

function sec_to_min(sec) {
    let min = Math.floor(sec / 60)
    sec = sec % 60

    if (min < 10) { min = "0" + min }
    if (sec < 10) { sec = "0" + sec }
    return min + ":" + sec

}

function play_audio() {
    console.log('audio playing')

    player.play()
    update_timestamp()
}

function update_timestamp() {
    /**skriv ut låtens längd*/
    console.log('update timestamp')
    $("#timestampRight").text(sec_to_min(Math.round(player.duration)))
    console.log(sec_to_min(Math.round(player.duration)))
}

function pause_audio() {
    console.log('audio paused')
    player.pause()
}
function stop_audio() {
    console.log('audio stopped')
    player.pause()
    player.currentTime = 0
}

function backward() {
    let running = false

    if (player.paused === false) {
        running = true
    }

    if (player.currentTime < 2) {
        previous_song()

    }

    player.currentTime = 0

    if (running === true) {
        play_audio()
    }
}

function forward() {
    let paused = player.paused
    next_song()

    play_audio()

    if (paused === true) {
        pause_audio()
    }
}

function previous_song() {

    let newSongNr = songNr - 1
    if (newSongNr < 1) {
        newSongNr = queueSize
    }
    /**avmarkera gammal låt i queue */
    $(".queueItem:nth-child(" + songNr + ")").css({ backgroundColor: "transparent" })
    /**markera ny låt i queue */
    $(".queueItem:nth-child(" + newSongNr + ")").css({ backgroundColor: "orange" })
    /**hämta infotexten */
    $("#songInfo").text($(".queueItem:nth-child(" + newSongNr + ")").children(".queueSongInfo").children(".songName").text())
    $("#artistInfo").text($(".queueItem:nth-child(" + newSongNr + ")").children(".queueSongInfo").children(".artistName").text())
    /** hämta bilden från queue, spara som coverArt*/
    $("#coverArt").attr("src", $(".queueItem:nth-child(" + newSongNr + ")").children(".queueCoverArt").children(".queueImg").attr("src"))


    /**spara aktivt låtnummer som källa */
    player.src = $(".queueItem:nth-child(" + newSongNr + ")").attr("link")


    /**spara aktuell låt till songNr */
    songNr = newSongNr
}


function next_song() {
    if (shuffle === true) {
        next_song_shuffle()
    }

    else {
        let newSongNr = songNr + 1
        if (newSongNr > queueSize) {
            newSongNr = 1
        }
        /**avmarkera gammal låt i queue */
        $(".queueItem:nth-child(" + songNr + ")").css({ backgroundColor: "transparent" })
        /**markera ny låt i queue */
        $(".queueItem:nth-child(" + newSongNr + ")").css({ backgroundColor: "orange" })
        /**hämta infotexten */
        $("#songInfo").text($(".queueItem:nth-child(" + newSongNr + ")").children(".queueSongInfo").children(".songName").text())
        $("#artistInfo").text($(".queueItem:nth-child(" + newSongNr + ")").children(".queueSongInfo").children(".artistName").text())
        /* hämta bilden från queue, spara som coverArt*/
        $("#coverArt").attr("src", $(".queueItem:nth-child(" + newSongNr + ")").children(".queueCoverArt").children(".queueImg").attr("src"))


        /*spara aktivt låtnummer som källa */
        player.src = $(".queueItem:nth-child(" + newSongNr + ")").attr("link")

        /**spara aktuell låt till songNr */
        songNr = newSongNr
    }
}

function repeat_toggle() {
    //funkar inte, varför?
    //player.loop = true|false   
    
    if (player.loop===true){
        player.loop=false
    }
    else{
        player.loop=true
    }
    console.log("repeat "+player.loop)
    
}

function shuffle_toggle() {
    shuffle === true ? shuffle = false : shuffle = true
    console.log("shuffle is now " + shuffle)
}
function next_song_shuffle() {
    if (shuffle === true) {
        let newSongNr
        do {
            newSongNr = Math.ceil(Math.random() * queueSize)
        } while (newSongNr === songNr)

        $(".queueItem:nth-child(" + songNr + ")").css({ backgroundColor: "transparent" })
        /**markera ny låt i queue */
        $(".queueItem:nth-child(" + newSongNr + ")").css({ backgroundColor: "orange" })
        /**hämta infotexten */
        $("#songInfo").text($(".queueItem:nth-child(" + newSongNr + ")").children(".queueSongInfo").children(".songName").text())
        $("#artistInfo").text($(".queueItem:nth-child(" + newSongNr + ")").children(".queueSongInfo").children(".artistName").text())
        /* hämta bilden från queue, spara som coverArt*/
        $("#coverArt").attr("src", $(".queueItem:nth-child(" + newSongNr + ")").children(".queueCoverArt").children(".queueImg").attr("src"))


        /*spara aktivt låtnummer som källa */
        player.src = $(".queueItem:nth-child(" + newSongNr + ")").attr("link")

        /**spara aktuell låt till songNr */
        songNr = newSongNr
    }
}
function song_end() {
    if (player.loop === true) {
        player.currentTime = 0
    }
    else if (shuffle === true) {
        next_song_shuffle()   
    }
    else {
        next_song()
    }
    play_audio()
}

function heart_click(){
    //TO DO
    //change font color
}
return( <>
        <section className={styles.headerButton} id={styles.buttonBack}><FaChevronLeft className={styles.fa} /></section>
        <section className={styles.playlistInfo}>Playlist - <item id={styles.currentPlaylistID}>currentPlaylistID</item>
        </section>
        <section className={styles.headerButton} id="buttonOptions"><FaEllipsisV className={styles.fas} /></section>
    

    <section className={styles.main}>
        <section className={styles.view} id="playlist">
            



            <article className={styles.queueItem}songNr="1" link="https://archive.org/download/78_were-you-foolin_johnny-green-and-his-orchestra-johnny-green-allan-curtis-leslie-a_gbia0150380a/_78_were-you-foolin_johnny-green-and-his-orchestra-johnny-green-allan-curtis-leslie-a_gbia0150380a_01_3.5_ET_EQ.mp3">
                <section className={styles.queueCoverArt}>
                    <Image className={styles.queueImg} src="images/ht.jpg" />
                </section>

                <section className={styles.queueSongInfo}>
                    <span className={styles.songName}>Fallna Hjältar</span>
                    <span className={styles.artistName}>Hårda Tider</span>

                </section>
                <section className={styles.queuePlayButton}><FaPlayCircle className={styles.fas} /></section>
            </article>
            
            
            <article className={styles.queueItem} songNr="2" link="https://archive.org/download/78_im-looking-over-a-four-leaf-clover_paul-specht-and-his-orchestra-johnny-morris-woo_gbia0015057b/_78_im-looking-over-a-four-leaf-clover_paul-specht-and-his-orchestra-johnny-morris-woo_gbia0015057b_01_3.8_CT_EQ.mp3">
                <section className={styles.queueCoverArt}><Image className={styles.queueImg} src="images/roybailey.jpg"/></section>
                
                <section className={styles.queueSongInfo}>
                    <span className={styles.songName}>What You Do With What You've Got</span>
                    <span className={styles.artistName}>Roy Bailey</span>


                </section>
                <section className={styles.queuePlayButton}><FaPlayCircle className={styles.fas} /></section>
            </article>


            <article className={styles.queueItem} songNr="3" link="https://archive.org/download/78_they-cant-take-that-away-from-me_fred-astaire-johnny-green-and-his-orchestra-johnn_gbia0151637a/_78_they-cant-take-that-away-from-me_fred-astaire-johnny-green-and-his-orchestra-johnn_gbia0151637a_01_3.5_ET_EQ.mp3">
                <section className={styles.queueCoverArt}><Image className={styles.queueImg} src="images/deepcuts.jpg"/></section>
                
                <section className={styles.queueSongInfo}>
                    <span className={styles.songName}>You Make Me Like Charity</span>
                    <span className={styles.artistName}>The Knife</span>


                </section>
                <section className={styles.queuePlayButton}><FaPlayCircle className={styles.fas}/></section>
            </article>

            
            
            <article className={styles.queueItem} id="dnbItem" songNr="4" link="http://trace.dnbradio.com:8000/dnbradio_main.mp3">
                <section className={styles.queueCoverArt}><Image className={styles.queueImg} src="images/dnbradio.png"/></section>
                
                <section className={styles.queueSongInfo}>
                    <span className={styles.songName}>dnbradio.com</span>
                    <span className={styles.artistName}>dnbradio.com</span>


                </section>
                <section className={styles.queuePlayButton}><FaPlayCircle className={styles.fas}/></section>
            </article>


        </section>








        <aside className={styles.view} id="player">
            <article className={styles.rightView} id="topRight"><Image id="coverArt" src="images/pic1.png"/></article>
            <article className={styles.rightView} id="infoBox">
                <section className={styles.songInfoButton} id="plusButton"><FaPlusSquare className={styles.fas}/></section>
                <section id="songInfoText">
                    <article id="songInfo">Song info</article>
                    <article id="artistInfo">Artist info</article>
                </section>

                <section className={styles.songInfoButton} id="heartButton"><FaGratipay className={styles.fab}/></section>
            </article>


            <article className={styles.rightView} id="progressBox">
                <item className={styles.timestamp} id="timestampLeft">
                    00:00
                </item>

                <item id="progressBar"><section id="bar">this is a bar</section></item>

                <item className={styles.timestamp} id="timestampRight">
                    03:02
                </item>



            </article>



            <article className={styles.rightView} id="playbackOptionsBox">
                <knapp className={styles.playbackButton} id="repeat"><FaRetweet className={styles.fas}/></knapp>
                <knapp className={styles.playbackButton} id="backward"><FaBackward className={styles.fas}/></knapp>
                <knapp className={styles.playbackButton} id="playerPause"><FaPauseCircle className={styles.fas}/></knapp>
                <knapp className={styles.playButton} id="playerPlay"><FaPlayCircle className={styles.fas}/></knapp>
                <knapp className={styles.playbackButton} id="forward"><FaForward className={styles.fas}/></knapp>
                <knapp className={styles.playbackButton} id={styles.shuffle}><FaRandom className={styles.fas}/></knapp>

            </article>
        </aside>

    </section>






  </>

)
}