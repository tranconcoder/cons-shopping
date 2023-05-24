<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<!-- CSS -->
		<link rel="stylesheet" href="./src/styles/css/HomePage/styles.css">
		<link rel="stylesheet" href="./src/assets/fontawesome-6.4.0/css/all.min.css">

		<!-- Script -->
		<script src="./src/assets/js/HomePage.js" defer></script>
		<script src="./src/assets/js/Common/index.js"></script>

		<title>CONS-Shopping</title>
	</head>

	<body>
		<div class="body">
			<?php $headerCtrl->invoke(); ?>
			
			<div class="container">	
				<?php include_once __DIR__ . '/hero.php'; ?>
			</div>
		</div>
	</body>
</html>
