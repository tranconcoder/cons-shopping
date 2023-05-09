const productList = [
	{
		name: "Iphone 14 Pro Max",
		img: "iphone-14-pro-max.jpg",
	},
	{
		name: "Samsung Galaxy S23 Ultra",
		img: "samsung-galaxy-s23-ultra.jpg",
	},
	{
		name: "Xiaomi 13",
		img: "xiaomi-13.jpg",
	},
	{
		name: "Oppo Find X6 Pro",
		img: "oppo-find-x6-pro.jpg",
	},
	{
		name: "LG V60",
		img: "lg-v60.jpg",
	},
];

const viewedProductsList = document.querySelector(".viewed-products__list");
productList.forEach((product) => {
	const liElm = document.createElement("li");
	liElm.innerHTML = `<img src="./src/assets/images/${product.img}" /><h4>${product.name}</h4>`;
	viewedProductsList.appendChild(liElm);
});
