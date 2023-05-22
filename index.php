<?php
include_once "./src/config/db/connect.php";

$uri = $_SERVER["REQUEST_URI"];

$controller;

switch ($uri) {
	default:
		include_once __DIR__ . "/./src/controllers/HomePage.controller.php";
		$controller = new HomePageController();
}

$controller->invoke();
