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

    if (!isset($userInfo["user_id"])) {
      $this->handleLoginFail();
    }

    $_SESSION["user_id"] = $userId;
    $_SESSION["avatar"] = $userInfo["avatar"]
      ? $userInfo["avatar"]
      : "/src/assets/images/Common/avatar.png";
    $_SESSION["full_name"] =
      $userInfo["first_name"] . " " . $userInfo["last_name"];

    header("Location: /");
  }

  private function handleLoginFail()
  {
    http_response_code(400);
    header("Location: /?login-success=false");
    exit();
  }
}

$loginApi = new LoginApi($_POST["username"], $_POST["password"]);
