<li class="product-list-item">
	<div class="thumb">
		<img src="<?= $product["thumb"] ?>" alt="">
	</div>

	<p class="label"><?= $product["label"] ?></p>

	<p class="old-cost">
		<?= $product["deal_cost"]
    ? number_format($product["cost"], 0, ".", ",") . "đ"
    : "" ?>
	</p>
	<p class="cost"><?= $product["deal_cost"] ?>đ</p>
</li>
