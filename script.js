let products = {
  data: [
    {
      productName: "Omen",
      category: "Cse",
      about: "30",
      image: "aluimages/sporty-smartwatch.jpg",
    },
    {
      productName: "Reyna",
      category: "Cse",
      about: "49",
      image: "aluimages/sporty-smartwatch.jpg",
    },
    {
      productName: "Breach",
      category: "Cse",
      about: "99",
      image: "aluimages/sporty-smartwatch.jpg",
    },
    {
      productName: "Killjoy",
      category: "Mech",
      about: "29",
      image: "aluimages/sporty-smartwatch.jpg",
    },
    {
      productName: "Raze",
      category: "Mech",
      about: "129",
      image: "aluimages/sporty-smartwatch.jpg",
    },
    {
      productName: "Yoru",
      category: "Civil",
      about: "89",
      image: "aluimages/sporty-smartwatch.jpg",
    },
    {
      productName: "Cypher",
      category: "Civil",
      about: "189",
      image: "aluimages/sporty-smartwatch.jpg",
    },
    {
      productName: "Sova",
      category: "EEE",
      about: "49",
      image: "aluimages/sporty-smartwatch.jpg",
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //about
  let about = document.createElement("h6");
  about.innerText = "" + i.about;
  container.appendChild(about);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};
