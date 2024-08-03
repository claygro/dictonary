const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".content");
const sound = document.querySelector(".sound");
const btn = document.querySelector(".search");
btn.addEventListener("click", () => {
  const inpWord = document.querySelector(".userInput").value;
  fetch(`${url}${inpWord}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
      <section class="textandvolume">
            <h1 class="inp">${inpWord}</h1>
            <button class="sound" >
              <i class="fa-solid fa-volume-high fa-lg" style="color: black"></i>
            </button>
          </section>
          <section class="result">
            <h2>${data[0].meanings[0].partOfSpeech}</h2>
            <h2>/${data[0].phonetic}/</h2>
          </section>
          <p class="word-meaning">
           ${data[0].meanings[0].definitions[0].definition}
          </p>
      

      `;
    });
});
