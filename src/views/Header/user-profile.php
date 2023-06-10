<?php
if (isset($_SESSION["user_id"])) {
  echo $_SESSION["user_id"];
} else {
  include "./src/views/Header/login-button.php";
} ?>
