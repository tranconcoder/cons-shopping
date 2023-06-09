<li class="product-item">
	<div class="thumb-wrapper">
		<img src="<?= $item["image"] ?>" alt="thumb">
	</div>

	<p class="name"><?= $item["label"] ?></p>
	<p class="price-old"><?= $item["cost"] ?> đ</p>
	<p class="price-new">
		<span>Chỉ còn</span> <?= $item["cost_deal"] ?> đ
	</p>

	<button class="buy-button">
		<p>Mua ngay</p>
	</button>
</li>
