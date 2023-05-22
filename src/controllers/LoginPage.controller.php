<?php
include_once __DIR__ . './../models/LoginPage.model.php';

class LoginPageController
{
	private LoginPageModel $model;

	public function __construct()
	{
		$this->model = new LoginPageModel();
	}

	public function invoke()
	{
		include './src/views/LoginPage/index.php';
	}
}
