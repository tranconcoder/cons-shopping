<?php

include_once __DIR__ . "/../config/db/connect.php";

class RegisterApi extends DatabaseSQL
{
  private $username;
  private $password;
  private $firstName;
  private $lastName;
  private $address;
  private $phoneNumber;
  private $email;

  public function __construct()
  {
    $this->username = $_POST["username"];
    $this->password = $_POST["password"];
    $this->firstName = $_POST["firstName"];
    $this->lastName = $_POST["lastName"];
    $this->address = $_POST["address"];
    $this->phoneNumber = $_POST["phoneNumber"];
    $this->email = $_POST["email"];

    $validateSuccess = $this->validateData();

    if (!$validateSuccess) {
      http_response_code(400);
      echo "Error while validate data";

      return;
    }

    $this->handleRegister();
  }

  private function validateData()
  {
    // Required check
    if (
      !isset($this->username) ||
      !isset($this->password) ||
      !isset($this->firstName) ||
      !isset($this->lastName) ||
      !isset($this->address) ||
      !isset($this->phoneNumber)
    ) {
      return false;
    }

    // Length check
    if (
      strlen($this->username) < 6 ||
      strlen($this->username) > 16 ||
      strlen($this->password) < 8 ||
      strlen($this->password) > 36 ||
      strlen($this->firstName) < 2 ||
      strlen($this->firstName) > 8 ||
      strlen($this->lastName) < 2 ||
      strlen($this->lastName) > 8 ||
      strlen($this->address) < 10 ||
      strlen($this->address) > 120 ||
      strlen($this->phoneNumber) !== 10
    ) {
      return false;
    }

    // Not contains special character check
    if (
      !preg_match("/\$[A-Za-z_][A-Za-z_0-9]*/", $this->firstName) ||
      !preg_match("/\$[A-Za-z_][A-Za-z_0-9]*/", $this->lastName) ||
      !preg_match("/\$[A-Za-z_][A-Za-z_0-9]*/", $this->username)
    ) {
      return false;
    }

    // Number only check
    if (!preg_match('/^[0-9]+$/', $this->phoneNumber)) {
      return false;
    }

    // Is gmail check
    if (
      strlen($this->email) &&
      !preg_match(
        '/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\"\S+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
        $this->email
      )
    ) {
      return false;
    }

    return true;
  }

  private function handleRegister()
  {
    $passwordEncode = md5($this->password);
    $uuid = $this->conn->query("SELECT UUID() as uuid")->fetch_assoc()["uuid"];

    $sql = "
			INSERT INTO authenticate(user_id, username, password) VALUES
				('$uuid', '$this->username', '$passwordEncode')

			INSERT INTO user(user_id, first_name, last_name, address, phone_number, email) VALUES
				('$uuid', '$this->firstName', '$this->lastName', '$this->address', '$this->phoneNumber', '$this->email')
		";

    $registerResult = $this->conn->query($sql);

    if ($registerResult) {
      header("Location: src/views/ProductListPage/index.php");
    }
  }
}
