<div class="center-slide">
	<div class="search-bar">
		<div class="input-ctn">
			<input
				value="iphone 14 pro"
				type="text"
				placeholder="Nhập sản phẩm cần tìm..."
			/>
			<i class="search-icon fa-solid fa-magnifying-glass"></i>

			<div class="search-box">
				<section class="viewed-products">
					<span>Sản phẩm đã xem</span>
					<ul class="viewed-products__list">
<?php
include_once "./src/config/db/connect.php";

$db = new DatabaseSQL();
$phoneList = $db->query("SELECT * FROM product");

foreach ($phoneList as $phone) { ?>
	<li>
		<img src="<?= $phone["images"] ?>" alt="<?= $phone["label"] ?>">
		<h4><?= $phone["label"] ?></h4>
	</li>
<?php }
?>
					</ul>
				</section>

				<section class="history">
					<p class="label-ctn">
						<i
							style="font-size: 0.9em"
							class="fa-solid fa-clock-rotate-left"
						></i>
						<span>Lịch sử tìm kiếm</span>
					</p>

					<ul>
<?php
$historyList = $db->query("SELECT * FROM `search-history`");
foreach ($historyList as $history) { ?>
	<li><p><?= $history["content"] ?></p></li>
<?php }
?>
					</ul>
				</section>

				<section class="suggest-ctn">
					<p class="label-ctn">
						<i class="fa-regular fa-lightbulb"></i>
						<span>Từ khóa gợi ý</span>
					</p>

					<ul>
						<li><p>Iphone 14 Pro Max</p></li>
						<li><p>Sản phẩm bán chạy</p></li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</div>
