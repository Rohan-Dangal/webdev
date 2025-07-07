console.log("lets write some js");

async function getsongs() {
  let a = await fetch("http://127.0.0.1:3000/project-2(spotify%20clone)/songs/");
  let response = await a.text();
  console.log(response);

  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }
  return songs;
}

async function main() {
  let songs = await getsongs();
  console.log(songs);

  let songul = document.querySelector(".songlist ul");  // Safer and cleaner

  for (const song of songs) {
    songul.innerHTML += `<li>${song}</li>`;  // Correct template literal
  }

  // play the first song
  var audio = new Audio(songs[0]);
  // audio.play();

  audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(duration);
  });
}

main();
