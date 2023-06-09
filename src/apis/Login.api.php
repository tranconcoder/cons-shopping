<?php
include_once __DIR__ . "/../config/db/connect.php";

class LoginApi extends DatabaseSQL
{
  private $username = isset($_POST["username"]) ? $_POST["username"] : "";
  private $password = isset($_POST["password"]) ? $_POST["password"] : "";

  public function __construct()
  {
    $authResult = $this->auth($this->username, $this->password);
  }

  private function auth($username, $password)
  {
    $passwordEncode = md5($password);

    $authResult = $this->conn
      ->query(
        "
				SELECT count(*) AS loginSuccess
					FROM authenticate
					WHERE
						username = '$username'
						AND password = '$passwordEncode'
				"
      )
      ->fetch_assoc()["loginSuccess"];

    return $authResult;
  }
}

const registerApi = new RegisterApi();
