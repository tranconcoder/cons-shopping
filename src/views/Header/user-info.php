<button class="user-info">
	<div class="info">
		<p class="name">
			<?= $_SESSION["full_name"] ?>
		</p>

		<p class="cart">Giỏ hàng: 0</p>
	</div>
	
	<img src="<?= $_SESSION["avatar"] ?>" alt="avatar">

	<!-- User info box -->
	<div class="box">
		<section class="change-profile">
			<aside class="left-slide">
				<img src="<?= $_SESSION["avatar"] ?>" alt="" class="avatar">
			</aside>
			<aside class="right-slide">
				<p>Chỉnh sửa thông tin</p>
			</aside>
		</section>
		
		<section class="account-utils">
			<h3 class="label">Tài khoản</h3>

			<ul>
				<li>
					<a href="">
						<i class="fa-regular fa-address-card"></i>
						<span>Chỉnh sửa thông tin</span>
					</a>
				</li>
				<li>
					<a href="">
						<i class="fa-regular fa-address-card"></i>
						<span>Đăng xuất</span>
					</a>
				</li>
			</ul>
		</section>
	</div>
</button>
