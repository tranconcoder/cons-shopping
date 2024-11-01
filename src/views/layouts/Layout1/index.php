<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<link
			rel="stylesheet"
			href="./src/assets/fontawesome-6.4.0/css/all.min.css"
		/>
		<link rel="stylesheet" href="./src/styles/css/Layout1/styles.css">


		<title>Document</title>
	</head>
	<body>
		<div class="container">
			<!--- Header --->
			<?php $this->headerController->invoke(); ?>

			<!--- Body --->
			<div class="body"><?php $this->bodyController->invoke(); ?></div>
		</div>
	</body>

    <script src="/src/assets/js/Layout1.js"></script>
</html>
