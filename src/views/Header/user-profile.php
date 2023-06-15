<div class="user-profile">
	<?php if (isset($_SESSION["userId"])) {
   include __DIR__ . "/./user-info.php";
 } else {
   include __DIR__ . "/./login-button.php";
 } ?>
</div>
