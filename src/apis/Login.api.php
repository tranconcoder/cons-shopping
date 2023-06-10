<?php
include_once __DIR__ . "/../config/db/connect.php";

class LoginApi
{
  private $username;
  private $password;
  private $userId;

  private $db;

  public function __construct($username, $password)
  {
    $this->username = isset($username) ? $username : "";
    $this->password = isset($password) ? $password : "";

    if (!strlen($this->username) || !strlen($this->password)) {
      $this->handleLoginFail();
    }

    $this->db = new DatabaseSQL();
    $this->userId = $this->auth($this->username, $this->password);

    if (isset($this->userId)) {
      $this->handleLoginSuccess($this->userId);
    } else {
      $this->handleLoginFail();
    }
  }

  private function auth($username, $password)
  {
    $userId = $this->db->auth($username, $password);

    return $userId;
  }

  private function handleLoginSuccess($userId)
  {
    session_start();
    $userInfo = $this->db->getUser($userId);

    if (!isset($userInfo)) {
      http_response_code(400);
      exit("Login fail");
    }

    $_SESSION["user_id"] = $userId;

    echo $_SESSION["user_id"];
  }

  private function handleLoginFail()
  {
    http_response_code(400);
    echo "Login fail";
    exit();
  }
}

$loginApi = new LoginApi($_POST["username"], $_POST["password"]);
