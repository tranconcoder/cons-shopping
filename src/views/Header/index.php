<!-- Style --->
<link rel="stylesheet" href="./src/styles/css/Header/styles.css" />

<!-- Script --->
<script src="./src/assets/js/Header.js" defer></script>

<header class="header-wrapper">
	<div class="header-container">
   		<?php include_once __DIR__ . "/logo.php"; ?>
		<?php include_once __DIR__ . "/center-slide.php"; ?>
		<?php include_once __DIR__ . "/user-profile.php"; ?>
	</div>

	<?php include_once __DIR__ . "/authenticate-box.php"; ?>
</header>
