const cardsURL = "https://dummyjson.com/carts"
const discoundCard = document.getElementById('discoundCards')
const catalogMenu = document.getElementById('catalogMenu')
const catalogBtn = document.getElementById("catalogBtn")

async function getDisCards() {
  try {
    const response = await fetch(cardsURL);
    const cards = await response.json()
    let allProducts = []
    cards.carts.forEach(cart => {
      allProducts = allProducts.concat(cart.products)
    })

    allProducts.slice(0, 20).forEach(product => {
      const card = document.createElement("div")
      card.innerHTML = `
        <div class="w-[272px] bg-white shadow-sm rounded-[8px]">
          <img src="${product.thumbnail}" alt="404" class="w-full h-[180px] object-contain rounded-t-lg">
          <div class="p-2 flex flex-col justify-between gap-5">
            <div class="flex flex-col gap-3">
              <div class="flex justify-between">
                <div>
                  <h2 class="text-primary font-bold text-[18px]">${product.price} $</h2>
                  <p class="text-secondary text-[12px]">price</p>
                </div>
                <div class="text-end">
                  <h3 class="font-[600] text-[#FF6633]">${product.discountPercentage} %</h3>
                  <p class="text-[#f4c9bb] text-[12px]">discount</p>
                </div>
              </div>
              <p class="leading-[150%] text-primary">${product.title}</p>
            </div>
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

catalogBtn.addEventListener("click", () => {
  catalogMenu.classList.toggle("hidden");
});