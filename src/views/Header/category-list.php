<div class="category-ctn">
	<ul class="category-list">
		<?php foreach ($this->categoryList as $category) { ?>
			<li class="item">
				<a href="#">
					<i class="<?= $category['fontawesome_icon'] ?>"></i>
					<span><?= $category['label'] ?></span>
				</a>
			</li>
		<?php } ?>
	</ul>
</div>
