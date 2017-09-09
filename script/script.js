

function showDiv() {
   document.getElementById('nextDiv').style.display = "block";
   document.getElementById('now_playing').style.display = "block";
   document.getElementById('glass').style.display = "block";
}


/*Play and Pause Button ----------------------*/

$(document).ready(function() {
  var icon = $('.jp-play');
  var icon2 = $('.jp-pause');
  icon.click(function() {
     icon2.toggleClass('active');
     return false;
  });
  icon2.click(function() {
     icon2.toggleClass('active');
     return false;
  });
});



/*Playlist of songs ---------------------------*/

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function nextTrack(playerInstance, trackPlaying, shuffled) {

	var nextTrack   = trackPlaying +1;
		
		if(nextTrack > (shuffled.length -1)) {
		nextTrack = 0;
	}

	var test = String(shuffled[nextTrack].title);
	document.getElementById("title_player").innerHTML = test;
	playing = nextTrack;
	var newTrack    = shuffled[nextTrack];

	playerInstance.jPlayer("setMedia", {
	title   : newTrack.title,
	mp3     : newTrack.mp3
	});

	playerInstance.jPlayer("play");

	return playing;
}

$(function(){
	var playing     = 0;
	//var shuffled    = new Array(6);
	var playlist    = [
		

		{
			title   : "Surah kahf - Ahmed Rajab",
			mp3     : "audio/mp3's/2.Surahkahf-AhmedRajab.mp3"
		},

		{
			title   : "Surah Hadeed - Saad Al-ghamdi",
			mp3     : "audio/mp3's/3.SurahHadeed-SaadAl-ghamdi.mp3"
		},

		{
			title   : "Surah Maryam - Saad Nomani",
			mp3     : "audio/mp3's/4.SurahMaryam-SaadNomani.mp3"
		},

		{
			title   : "Surah Dukhan - Imam Fadel",
			mp3     : "audio/mp3's/5.SurahDukhan-ImamFadel.mp3"
		},

		{
			title   : "Surah Maryam - Ahmed Rajab",
			mp3     : "audio/mp3's/6.SurahMaryam-AhmedRajab.mp3"
		},

		{
			title   : "Surah Kahf - Salah Bukhatir",
			mp3     : "audio/mp3's/8.SurahKahf-SalahBukhatir.mp3"
		},

		{
			title   : "Surah Yusuf - Idris Abkar",
			mp3     : "audio/mp3's/9.SurahYusuf-IdrisAbkar.mp3"
		},

		{
			title   : "Surah Yasin - Saad Al-Ghamdi",
			mp3     : "audio/mp3's/10.SurahYasin-SaadAl-Ghamdi.mp3"
		},

		{
			title   : "Surah Qasas - Mishary Al-Afasi",
			mp3     : "audio/mp3's/11.SurahQasas-MisharyAl-Afasi.mp3"
		},

		{
			title   : "Surah Hijrah - Hazaa Al-Belushi",
			mp3     : "audio/mp3's/12.SurahHijrah-HazaaAl-Belushi.mp3"
		},

		{
			title   : "Surah Isra - Hazaa Al-Belushi",
			mp3     : "audio/mp3's/13.SurahIsra-HazaaAl-Belushi.mp3"
		},

		{
			title   : "Surah Zumar - Idris Abkar",
			mp3     : "audio/mp3's/14.SurahZumar-IdrisAbkar.mp3"
		},

		{
			title   : "Surah Nuh - Mohammed Salah﻿",
			mp3     : "audio/mp3's/15.SurahNuh-MohammedSalah﻿.mp3"
		},

		{
			title   : "Surah Zumar - Wadi Hamad Al-Yamani",
			mp3     : "audio/mp3's/16.SurahZumar-WadiHamadAl-Yamani.mp3"
		},

		{
			title   : "Surah Ta-ha - Abdullah Qaulan",
			mp3     : "audio/mp3's/17.SurahTa-ha-AbdullahQaulan.mp3"
		},

		{
			title   : "Surah Mulk - Hani Ar-Rifai",
			mp3     : "audio/mp3's/18.SurahMulk-HaniAr-Rifai.mp3"
		},

		{
			title   : "Surah Ahzab - Saad Al-Ghamdi",
			mp3     : "audio/mp3's/19.SurahAhzab-SaadAl-Ghamdi.mp3"
		},

		{
			title   : "Surah Dukhan - Muhammad Al-Muqit",
			mp3     : "audio/mp3's/20.SurahDukhan-MuhammadAl-Muqit.mp3"
		},

		{
			title   : "Surah Qaf - Mansoor Mohiddine",
			mp3     : "audio/mp3's/21.SurahQaf-MansoorMohiddine.mp3"
		},

		{
			title   : "Surah Ghafir - Salman Utaybi",
			mp3     : "audio/mp3's/22.SuratGhafir-SalmanUtaybi.mp3"
		},

		{
			title   : "Surah Ibrahim - Khaled Al-Jaleel",
			mp3     : "audio/mp3's/23.SurahIbrahim-KhaledAl-Jaleel.mp3"
		},

		{
			title   : "Surah Yusuf - Moutasem Al-Hameedi",
			mp3     : "audio/mp3's/24.SurahYusuf-MoutasemAl-Hameedi.mp3"
		},

		{
			title   : "Surah Al-Araf - Mishary Al-Afasi",
			mp3     : "audio/mp3's/25.SurahAl-Araf-MisharyAl-Afasi.mp3"
		},

		{
			title   : "Surah Taha - Abdullah Muhammad Ghaylan",
			mp3     : "audio/mp3's/26.SurahTaha-AbdullahMuhammadGhaylan.mp3"
		},

		{
			title   : "Surah Rahman - Abdulwali Al-Arkani",
			mp3     : "audio/mp3's/27.SurahRahman-AbdulwaliAl-Arkani.mp3"
		},

		{
			title   : "Surah Dukhan - Ahmed Rajab",
			mp3     : "audio/mp3's/28.SurahDukhan-AmhenRajab.mp3"
		}

	];

	var shuffled = shuffleArray(playlist);
	

/** standard jplayer initialisation **/
	var jplayer = $("#jquery_jplayer_1");

		jplayer.jPlayer({

			ready: function(event) {
			$(this).jPlayer("setMedia", {

				title: "1. Bismillah - Mishary",
				mp3: "audio/mp3's/1.Bismillah-Mishary.mp3"
			});

		},
		 	ended: function() { // The $.jPlayer.event.ended event
    		playing = nextTrack(jplayer, playing, shuffled);
    		//document.getElementById("title_player").innerHTML = shuffled[trackPlaying+1].title;

		},
		cssSelectorAncestor: "#jp_container_1",
		swfPath: "/js",
		supplied: "mp3",

	});
	

	/** call to our next track method whenever a user clicks on the next track button
	- be sure to check your class is called .jp-next otherwise this will not work **/

	$('.jp-next').click(function(event) {

	playing = nextTrack(jplayer, playing, shuffled);

	})

})


/*Playing one song ---------------------------*/
/*$(document).ready(function(){
      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "audio/019.mp3"
          });
        },
        swfPath: "/js",
        supplied: "mp3",
        loop: true
      });
    });*/



















