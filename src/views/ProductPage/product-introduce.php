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

	<ul class="image-slide-preview">
		<?php foreach ($this->productImageList as $index => $image) { ?>
			<li data-index="<?= $index ?>">
				<img src="<?= $image["source"] ?>" alt="">
			</li>	
		<?php } ?>
	</ul>

	<div class="cost-detail-box">
		<header class="box__header">
			<p class="cost"><?= number_format(
     $this->productInfo["cost"],
     1,
     ".",
     ","
   ) ?></p>
		</header>
	</div>
</div>
