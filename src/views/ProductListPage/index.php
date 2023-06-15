<!-- Product List Container -->
<link rel="stylesheet" href="./src/styles/css/ProductListPage/styles.css">

<section class="product-list-container">
	<div class="utils-slide-bar"></div>

	<main class="content">
		<h2 class="query-content">Bạn đang tìm kiếm "<?= $this->query ?>"</h2>

		<div class="tool-bar"></div>

		<ul class="product-list">
			<?php foreach ($this->productList as $product) {
   	include __DIR__ . '/./product-list-item.php';
   } ?>
		</ul>
	</main>
</section>
