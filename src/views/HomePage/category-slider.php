<section class="category-slider">
	<h3 class="title">Danh mục sản phẩm</h3>

	<ul class="category-list">
		<?php
			$categoryList= [
				["title" => "Điện thoại thông minh", "link" => "#", "icon" => "fa-solid fa-mobile-button"],
				["title" => "Điện thoại di động", "link" => "#", "icon" => "fa-solid fa-mobile-retro"],
				["title" => "Máy tính bảng", "link" => "#", "icon" => "fa-solid fa-tablet-screen-button"],
				["title" => "Phụ kiện", "link" => "#", "icon" => "fa-solid fa-bolt"],
			];

			foreach($categoryList as $category) { ?>
				<li>
					<a href="<?= $category["link"] ?>">
					<i class="<?= $category["icon"]?>"></i>
						<span class="title"><?= $category["title"] ?></span>
					</a>
				</li>
			<?php }
		?>
	</ul>
</section>
