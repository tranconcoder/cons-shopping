<script src="/src/assets/js/ProductPage.js" defer></script>

<div class="product-introduce">
	<div id="product-image-slide" class="image-slide">
		<button class="prev-button">
			<i class="fa-solid fa-angle-left"></i>
		</button>		

		<ul class="image-slide__list">
			<?php foreach ($this->productImageList as $image) { ?>
				<li>
					<img src="<?= $image["source"] ?>" >
				</li>
			<?php } ?>
		</ul>

		<button class="next-button">
			<i class="fa-solid fa-angle-right"></i>
		</button>
	</div>

	<ul class="image-slide-list">
		<?php foreach ($this->productImageList as $image); ?>
	</ul>

	<div class="cost-detail">
		<p class="cost"><?= $this->productInfo["cost"] ?></p>
	</div>
</div>
