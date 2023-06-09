<input type="checkbox" id="toggle-visible-auth-box" hidden/>
<input type="checkbox" id="toggle-register-auth-box" hidden />

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

			<div class="form-wrapper">
				<form class="form-ctn login">
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

					<label for="toggle-register-auth-box" class="register-button">
						<p>Đăng ký</p>
					</label>
				</form>
		
				<form class="form-ctn register" method="post" action="/api/register">
					<h3 class="title">Đăng ký</h3>

					<div class="input-ctn">
						<div class="username">
							<div class="input-wrapper">
								<input
									id="username-register-input"
									type="text"
									name="username"
									placeholder=" "
								/>
								<p class="placeholder">Tên đăng nhập ...</p>
							</div>
							<p class="error-message"></p>
						</div>
					</div>

					<div class="input-ctn">
						<div class="password">
							<div class="input-wrapper">
								<input
									id="password-register-input"
									type="password"
									name="password"
									placeholder=" "
								/>
								<p class="placeholder">Mật khẩu ...</p>
							</div>
							<p class="error-message"></p>
						</div>
					</div>

					<div class="input-ctn">
						<div class="retype-password">
							<div class="input-wrapper">
								<input
									id="retype-password-input"
									type="password"
									placeholder=" "
								/>
								<p class="placeholder">Nhập lại mật khẩu ...</p>
							</div>
							<p class="error-message"></p>
						</div>
					</div>

					<div class="input-ctn">
						<div class="first-name">
							<div class="input-wrapper">
								<input
									id="first-name-input"
									type="text"
									name="first-name"
									placeholder=" "
								/>
								<p class="placeholder">Họ ...</p>
							</div>
							<p class="error-message"></p>
						</div>
					</div>

					<div class="input-ctn">
						<div class="last-name">
							<div class="input-wrapper">
								<input
									id="last-name-input"
									type="text"
									name="last-name"
									placeholder=" "
								/>
								<p class="placeholder">Tên ...</p>
							</div>
							<p class="error-message"></p>
						</div>
					</div>

					<div class="input-ctn">
						<div class="address">
							<div class="input-wrapper">
								<input
									id="address-input"
									type="text"
									name="address"
									placeholder=" "
								/>
								<p class="placeholder">Địa chỉ ...</p>
							</div>
							<p class="error-message"></p>
						</div>
					</div>

					<div class="input-ctn">
						<div class="phone-number">
							<div class="input-wrapper">
								<input
									id="phone-number-input"
									type="text"
									name="phone-number"
									placeholder=" "
								/>
								<p class="placeholder">Số điện thoại ...</p>
							</div>
							<p class="error-message"></p>
						</div>
					</div>

					<div class="input-ctn">
						<div class="gmail">
							<div class="input-wrapper">
								<input
									id="gmail-input"
									type="text"
									name="gmail"
									placeholder=" "
								/>
								<p class="placeholder">Địa chỉ gmail ...</p>
							</div>
							<p class="error-message"></p>
						</div>
					</div>

					<button class="register-button" type="submit">
						<p>Đăng ký</p>
					</button>

					<label for="toggle-register-auth-box" class="login-button">
						<p>Đăng nhập</p>
					</label>
				</form>
			</div>
		</div>
	</div>
</div>
