<?php
include_once './src/config/db/connect.php';

$page = 'home_page';
$controllerName = 'HomePageController';
$controllerFileName = 'HomePage.controller.php';

if (isset($_GET['page'])) {
	$page = $_GET['page'];
}

$controllerName = str_replace('_', '', ucwords($page, '_')) . 'Controller';
$controllerFileName =
	str_replace('_', '', ucwords($page, '_')) . '.controller.php';
include_once './src/controllers/' . $controllerFileName;

$controller = new $controllerName();
$controller->invoke();
