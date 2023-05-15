<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Đăng nhập tài khoản</title>
		<link rel="stylesheet" href="../../styles/css/HomePage/styles.css" />
		<link rel="stylesheet" href="../../styles/css/LoginPage/styles.css" />
		<script src="../../assets/js/LoginPage.js" defer></script>
	</head>
	<body>
		<div class="container">
			<div class="login-box">
				<div class="banner-ctn">
					<img
						src="../../assets/images/LoginPage/banner.svg"
						alt="banner"
					/>
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
				</form>
			</div>

			<img
				class="background"
				src="../../assets/images/LoginPage/background.jpg"
				alt="background"
			/>
		</div>
	</body>
</html>
