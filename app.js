// alert("Hello from API");

//Getting jokes using the fetch api.

const jokeCategory = document.getElementById("category");
const partOne = document.getElementById("first");
const jokeType = document.getElementById("type");
const heads = document.querySelectorAll("h5");

const selCat = document.querySelector("select");
const selBtn = document.querySelector("button");
const jokesList = document.querySelector("#jokesList");

const getJoke = async () => {
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await res.json();
    jokeCategory.innerText = data.category;
    jokeType.innerText = data.type;
    if (data.type === "twopart") {
      partOne.innerText = `${data.setup}, ${data.delivery}`;
    } else {
      partOne.innerText = data.joke;
    }
  } catch (error) {
    console.log("Error", error);
    heads.forEach((el) => {
      el.style.display = "None";
    });
    partOne.innerText = "Error, No Jokes available.!";
  }
};
getJoke();

const genJoke = async () => {
  try {
    const res = await fetch(`https://v2.jokeapi.dev/joke/${selCat.value}`);
    const data = await res.json();
    const jokeLi = document.createElement("li");
    if (data.type === "twopart") {
      jokeLi.innerText = `${data.setup}, ${data.delivery}`;
    } else {
      jokeLi.innerText = data.joke;
    }
    jokesList.appendChild(jokeLi);
  } catch (error) {
    console.log("Error", error);
    jokesList.append("Error, No jokes available");
  }
};

selBtn.addEventListener("click", genJoke);
