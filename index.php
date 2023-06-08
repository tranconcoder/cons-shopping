<?php
include_once "./src/config/db/connect.php";

$uri = $_SERVER["REQUEST_URI"];

$controller;

switch ($uri) {
	default:
		include_once __DIR__ . "/./src/controllers/HomePage.controller.php";
		include_once __DIR__ . "/./src/controllers/layouts/Layout1.controller.php";

		$bodyController = new HomePageController();
		$controller = new Layout1Controller($bodyController);
}

$controller->invoke();
