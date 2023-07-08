<?php

class LoginApi extends DatabaseSQL
{
	private $username;
	private $password;
	private $userId;
	private $db;

	public function __construct($username, $password)
	{
		$this->username = isset($username) ? $username : '';
		$this->password = isset($password) ? $password : '';

		if (!strlen($this->username) || !strlen($this->password)) {
			$this->handleLoginFail();
		}

		$this->db = new DatabaseSQL();
		$this->userId = $this->db->auth($this->username, $this->password);

		if (isset($this->userId)) {
			$this->handleLoginSuccess($this->userId);
		} else {
			$this->handleLoginFail();
		}
	}

	private function handleLoginSuccess($userId)
	{
		session_start();
		$userInfo = $this->db->getUser($userId)[0];

		if (!isset($userInfo['userId'])) {
			$this->handleLoginFail();
		}

		foreach ($userInfo as $key => $value) {
			$_SESSION[$key] = $value;
		}

		if (!isset($_SESSION['avatar'])) {
			$_SESSION['avatar'] = '/src/assets/images/Common/avatar.png';
		}

		header('Location: /');
	}

	private function handleLoginFail()
	{
		http_response_code(400);
		header('Location: /?login-success=false');
		exit();
	}
}
