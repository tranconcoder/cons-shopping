<input type="checkbox" id="toggle-visible-auth-box" hidden/>

<div class="authenticate-ctn">
	<label class="background" for="toggle-visible-auth-box"></label>

	<div class="authenticate-box">
		<header class="box__header">
			<label class="close-button" for="toggle-visible-auth-box">
				<i class="fa-solid fa-xmark"></i>
			</label>
		</header>
		
		<div class="box__body">
			<div class="banner-ctn">
				<img src="./src/assets/images/LoginPage/banner.svg" alt="banner" />
				<h4>Chào mừng bạn đến với CONS-Shopping!!</h4>
			</div>

			<form action="" class="form-ctn">
				<h3 class="title">Đăng nhập</h3>

				<div class="input-ctn">
					<div class="username">
						<div class="input-wrapper">
							<input
								id="username-input"
								type="text"
								name="username"
								placeholder=" "
							/>
							<p class="placeholder">Điền tên đăng nhập...</p>
						</div>
						<p class="error-message"></p>
					</div>
					<div class="password">
						<div class="input-wrapper">
							<input
								id="password-input"
								type="password"
								name="password"
								placeholder=" "
							/>
							<p class="placeholder">Nhập mật khẩu...</p>
						</div>
						<p class="error-message"></p>
					</div>
				</div>

				<button class="submit-button" type="submit">
					<p>Đăng nhập</p>
				</button>

				<a href="/register" class="register-button"><p>Đăng ký</p></a>
			</form>
		</div>
	</div>
</div>
