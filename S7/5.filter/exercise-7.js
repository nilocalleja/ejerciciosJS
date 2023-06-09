const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

function toFilterStreamers(event) {
  const searchText = event.target.value;
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filteredStreamers);
}

const input = document.querySelector('[data-function="toFilterStreamers"]');
input.addEventListener("input", toFilterStreamers);
