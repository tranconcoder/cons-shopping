<?php

class CategoryList extends DatabaseSQL
{
	function __construct()
	{
		DatabaseSQL::__construct();
	}

	public function renderCategoryList()
	{
		$sql_query =
			'SELECT * FROM `product-category` ORDER BY category_order ASC';
		$categoryList = $this->query($sql_query);

		foreach ($categoryList as $category) { ?>
			<li class="item">
				<a href="#">
					<i class="<?= $category['fontawesome_icon'] ?>"></i>
					<span><?= $category['label'] ?></span>
				</a>
			</li>
		<?php }
	}
}
