const cardsURL = "https://dummyjson.com/carts"
const discoundCard = document.getElementById('discoundCards')

async function getDisCards() {
  try {
    const response = await fetch(cardsURL);
    const cards = await response.json()
    let allProducts = []
    cards.carts.forEach(cart => {
      allProducts = allProducts.concat(cart.products)
    })

    allProducts.slice(0, 8).forEach(product => {
      const card = document.createElement("div")
      card.innerHTML = `
        <div class="w-[272px] h-[349px] bg-white shadow-sm rounded-[8px]">
          <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-[180px] object-contain rounded-t-lg">
          <div class="p-2 flex flex-col justify-between h-[169px]">
            <h2 class="text-primary font-bold text-[18px]">${product.price} $</h2>
            <p class="leading-[150%] text-primary">${product.title}</p>
            <button
              class="mt-auto border-accent text-accent border-[2px] w-full h-10 rounded-[6px] hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-white">
              В корзину
            </button>
          </div>
        </div>
        `
      discoundCard.appendChild(card)
    });

  } catch (error) {
    console.error("Xatolik", error)
  }
}

getDisCards()