<section class="popular-product-ctn">
	<h3 class="title">Sản phẩm phổ biến</h3>

	<ul class="popular-product-list">
		<?php for ($i = 0; $i < 8; $i++): ?>
				<li class="item-wrapper">
					<div class="item-container">
						<div class="thumb-ctn">
							<img src="https://static-images.vnncdn.net/files/publish/2022/8/8/iphone-14-pro-93.jpg" alt="" class="thumb" />
						</div>

						<p class="name">Iphone 14 Pro Max 512GB</p>
						<p class="price">10,990,000 &#8363;</p>

						<div class="detail">
							<p class="memory">RAM: 6GB</p>
							<p class="storage">ROM: 128GB</p>
							<p class="monitor">Màn hình: 2K Retina</p>
							<p class="battery">Pin: 5000mah</p>
						</div>


						<div class="button-list">
							<button class="add-to-cart">
								<p><i class="fa-solid fa-cart-plus"></i></p>
							</button>

							<button class="buy-now">
								<p>Mua ngay</p>
							</button>
						</div>
					</div>
				</li>
			<?php endfor; ?>
	</ul>

	<button class="show-all-product">
		<a href="#">
			<p>Xem toàn bộ sản phẩm <i class="fa-solid fa-arrow-right"></i></p>
		</a>
	</button>
</section>
