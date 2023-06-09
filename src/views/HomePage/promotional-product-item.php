<li class="product-item">
	<a href="/product?id=<?= $item["productId"] ?>">
		<div class="thumb-wrapper">
			<img src="<?= $item["image"] ?>" alt="thumb">
		</div>

		<p class="name"><?= $item["label"] ?></p>
		<p class="price-old"><?= $item["cost"] ?> đ</p>
		<p class="price-new">
			<span>Chỉ còn</span> <?= $item["costDeal"] ?> đ
		</p>

		<div class="button-list">
			<button class="add-to-cart">
				<p><i class="fa-solid fa-cart-plus"></i></p>
			</button>

			<button class="buy">
				<p>Mua ngay</p>
			</button>
		</div>
	</a>
</li>
