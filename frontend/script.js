const beers = {
	id: "beers",
	logo: "Best Beers",
	button: "details",
	cards: [
		{
			title: "Mango Bay",
			sub: "Mad Scientist Beer",
			text: "Pale Ale - American"
		},
		{
			title: "Távoli Galaxis",
			sub: "Rothbeer Brewery",
			text: "IPA - American"
		},
		{
			title: "Flying Rabbit AIPA",
			sub: "MONYO Brewing Co.",
			text: "IPA - American"
		},
		{
			title: "Liquid Cocaine",
			sub: "Mad Scientist Beer",
			text: "IPA - Imperial"
		},
		{
			title: "Organic Chocolate Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - English"
		},
		{
			title: "Bracia",
			sub: "Thornbridge Brewery",
			text: "Strong Ale - English"
		},
		{
			title: "Oatmeal Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - Oatmeal"
		},
		{
			title: "Black Tokyo Horizon",
			sub: "BrewDog",
			text: "Stout - American Imperial"
		},
		{
			title: "Vintage Ale",
			sub: "Fuller's",
			text: "Old Ale"
		},
		{
			title: "All the Leaves are Brown",
			sub: "Tempest Brewing Company",
			text: "Brown Ale - American"
		},
	]
}
console.log(beers);

for (let i = 0; i < beers.cards.length; i++) {
  const html = `<div class="card">
  <div class="number">${i+1}</div>
  <p class="title">${beers.cards[i].title}</p>
  <p class="sub">${beers.cards[i].sub}</p>
  <p class="text">${beers.cards[i].text}<p>
  <div class="button-container">
    <button>
      <p>
        details
      </p>
      
      <span class="material-symbols-outlined arrow" >
        arrow_forward
      </span>
    </button>
  </div>
</div>`;
  const cardContainer = document.getElementsByClassName("card-container")[0];
  cardContainer.innerHTML+=html;
}