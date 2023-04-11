const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];


for (const country of countries) {
    const div = document.createElement("div")
    document.body.appendChild(div)

    const h4 = document.createElement("h4")
    div.appendChild(h4)
    h4.textContent = country.title
    
    const img = document.createElement("img")
    div.appendChild(img)
    img.setAttribute("src", country.imgUrl)
}
