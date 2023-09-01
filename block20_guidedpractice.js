const root = document.getElementById("root");

const header1 = document.createElement('h1');
header1.innerText = "Mona Lisa";

root.appendChild(header1);

const image = document.createElement('img');
image.src = './mona_lisa.jpg';
root.appendChild(image);

const description = document.createElement("p");
description.innerText = "The Mona Lisa is a famous painting.";
root.appendChild(description);