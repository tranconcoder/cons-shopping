<div class="category-ctn">
	<ul class="category-list">
		<?php
  $sql = "SELECT * FROM `product-category`";
  $categoryList = $db->query($sql);
  foreach ($categoryList as $category) { ?>
		<li class="item">
			<a href="#">
				<i class="<?= $category["fontawesome_icon"] ?>"></i>
				<span><?= $category["label"] ?></span>
			</a>
		</li>
	<?php }
  ?>
	</ul>
</div>
