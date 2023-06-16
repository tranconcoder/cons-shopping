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
				<ul class="search-products__list"></ul>
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
		</div>
	</div>
</div>
