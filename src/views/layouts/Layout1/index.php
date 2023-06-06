<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			rel="stylesheet"
			href="./src/assets/fontawesome-6.4.0/css/all.min.css"
		/>
		 <link rel="icon" type="image/x-icon" href="./src/assets/images/favicon/favicon.ico">
		<script src="./src/assets/js/Common/index.js"></script>
		<title>CONS - Shopping</title>
	</head>
	<body>
		<div class="container">
			<!--- Header --->
			<?php $this->headerController->invoke(); ?>

			<!--- Body --->
			<div class="body"><?php $this->bodyController->invoke(); ?></div>
		</div>
	</body>
</html>
