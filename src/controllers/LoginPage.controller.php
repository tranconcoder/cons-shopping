<?php
include_once './src/models/LoginPage.model.php';

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
