<section class="category-slider">
	<h3 class="title">Danh mục sản phẩm</h3>

	<ul class="category-list">
		<?php foreach ($this->categoryListForSlider as $category): ?>
			<li class="category-list__item">
				<a href="<?= $category["link"] ?>">
					<i class="<?= $category["icon"] ?>"></i>
					<span class="title"><?= $category["title"] ?></span>
				</a>
			</li>
		<?php endforeach; ?>
	</ul>
</section>
