// Product page interactivity
// Side bar click & up arrow to down arrow using Fontawesomw
function toggleSelection(select_id) {
  const sec = document.getElementById(select_id);
  const arrow = document.getElementById(`arrow-${select_id}`);
  if (sec.style.display === "none" || sec.style.display === "") {
    sec.style.display = "block";
    arrow.classList.remove("fa-chevron-down");
    arrow.classList.add("fa-chevron-up");
  } else {
    sec.style.display = "none";
    arrow.classList.remove("fa-chevron-up");
    arrow.classList.add("fa-chevron-down");
  }
}

// Product View to column to grid vise versa
function toggleView(view) {
  let container = document.getElementById(`p-container`);
  if (view === "grid") {
    container.classList.add('grid-view');

  } else {
    container.classList.contains('grid-view');
    container.classList.remove('grid-view');
   
  }
}


function toggleFavorite(button) {
  const icon = button.querySelector("i");
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");
  button.classList.toggle("active");
}

// Show more button interactivity
document.getElementById('show-more-btun').addEventListener('click', function() {
  let pcontainer = document.getElementById(`p-container`);

  // new products array
  let products = [
    {
      image: "images/product/tech/4.png",
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: "$918.00",
      originalPrice: "$1128.00",
      rating: "7.5",
      orders: "154 orders",
    },
    {
      image: "images/product/tech/9.png",
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: "$990.00",
      originalPrice: "$1128.00",
      rating: "7.5",
      orders: "154 orders",
    }
  ];
  products.forEach(prod => {
    let div = document.createElement('div');
    div.classList.add('product-card');
    div.innerHTML = `
            <img src="${prod.image}" alt="Product" class="product-image">
            <div class="prod-info">
                <h3 class="p-name">${prod.name}</h3>
                <p class="price"><strong>"${prod.price}"</strong> <span class="original-price">${prod.price}</span></p>
                <div class="rating">
                    <span class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <span class="rating-score">${prod.rating}</span>
                    <span class="orders">${prod.orders}</span>
                    <span class="free-shipping">Free Shipping</span>
                </div>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqu</p>
                  <p class="description-2">Canon Camera EOS 2000, Black 10x zoom</p>
                
                <a href="#" class="details-link">View details</a>
            </div>
            <button class="heart-btn" onclick="toggleFavorite(this)">
                <i class="fa-regular fa-heart"></i>
            </button>
            `;
            pcontainer.appendChild(div);
  });
});

