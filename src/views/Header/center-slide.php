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
      $sql = 'SELECT * FROM product';
      $phoneList = $conn->query($sql);

      if ($phoneList->num_rows > 0) {
      	// output data of each row
      	while ($row = $phoneList->fetch_assoc()) { ?>
			<li>

				<img src="./src/assets/images/<?= $row['images'] ?>" />
				<h4><?= $row['label'] ?></h4>
			</li>
		<?php }
      } else {
      	echo '0 results';
      }
      $conn->close();
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
						<li>Iphone 14 Pro Max</li>
						<li>Samsung S23 Ultra</li>
						<li>Mi 13 Pro</li>
					</ul>
				</section>

				<section class="suggest-ctn">
					<p class="label-ctn">
						<i class="fa-regular fa-lightbulb"></i>
						<span>Từ khóa gợi ý</span>
					</p>

					<ul>
									</ul>
				</section>
			</div>
		</div>
	</div>
</div>
