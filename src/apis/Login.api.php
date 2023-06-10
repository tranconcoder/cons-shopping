<?php
include_once __DIR__ . "/../config/db/connect.php";

class LoginApi extends DatabaseSQL
{
	private $username;
	private $password;

	public function __construct($username, $password)
	{
		$username = isset($username)
			? $username
			: (isset($_POST["username"])
				? $_POST["username"]
				: "");
		$password = isset($password)
			? $password
			: (isset($_POST["password"])
				? $_POST["password"]
				: "");

		$authResult = $this->auth($this->username, $this->password);

		if ($authResult) {
			$this->handleAuthSuccess();
		}
	}

	private function auth($username, $password)
	{
		$passwordEncode = md5($password);

		$authResult = $this->conn
			->query(
				"
				SELECT COUNT(*) AS loginSuccess
					FROM authenticate
					WHERE
						username = '$username'
						AND password = '$passwordEncode'
				"
			)
			->fetch_assoc()["loginSuccess"];

		return $authResult;
	}

	private function handleAuthSuccess()
	{
		session_start();


		$_SESSION["user_id"] = 
	}
}

const registerApi = new RegisterApi();
