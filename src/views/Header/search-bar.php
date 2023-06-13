<!-- SEARCH BAR -->
<div class="search-bar">
	<div class="input-ctn">
		<input
			class="search-input"
			value="<?= isset($_GET["q"]) ? $_GET["q"] : "" ?>"
			type="text"
			placeholder="Nhập sản phẩm cần tìm..."
		/>

		<button class="submit-button">
			<i class="search-icon fa-solid fa-magnifying-glass"></i>
		</button>

		<div id="search-box" class="search-box">
			<section class="search-products">
				<span>Gợi ý tìm kiếm</span>
				<ul class="search-products__list">
					<?php foreach ($this->visitedProducts as $product): ?>
               			<li>
                			    <img
									src="<?= $product["thumb"] ?>"
									alt="<?= $product["label"] ?>"
								>
                    			
							<h4><?= $product["label"] ?></h4>
               			</li> 
					<?php endforeach; ?>
				</ul>
			</section>

			<section class="viewed-products">
				<span>Sản phẩm đã xem</span>
				<ul class="viewed-products__list">
					<?php foreach ($this->visitedProducts as $product): ?>
               			<li>
                			    <img
									src="<?= $product["thumb"] ?>"
									alt="<?= $product["label"] ?>"
								>
                    			
							<h4><?= $product["label"] ?></h4>
               			</li> 
					<?php endforeach; ?>
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
					<?php foreach ($this->historyList as $history) { ?>
						<li>
							<a href="/search?q=<?= $history["content"] ?>">
								<p>
									<?= $history["content"] ?>
								</p>
							</a>
						</li>
          			<?php } ?>
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
