<div class="product-introduce">
	<div class="image-slide">
		<ul class="image-slide__list">
			<?php foreach ($this->productImageList as $image) { ?>
				<img src="<?= $image["source"] ?>" >
			<?php } ?>
		</ul>
	</div>

	<ul class="image-slide-list"></ul>

	<div class="cost-detail">
		<p class="cost"><?= $this->productInfo["cost"] ?></p>
	</div>
</div>
