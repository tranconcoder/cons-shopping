<?php

class RegisterApi
{
  private $username;
  private $password;
  private $firstName;
  private $lastName;
  private $address;
  private $phoneNumber;
  private $email;

  private $database;

  public function __construct()
  {
    $this->database = new DatabaseSQL();
    $this->username = $_POST["username"];
    $this->password = $_POST["password"];
    $this->firstName = $_POST["first-name"];
    $this->lastName = $_POST["last-name"];
    $this->address = $_POST["address"];
    $this->phoneNumber = $_POST["phone-number"];
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
      !preg_match('/^[a-zA-Z0-9]+$/', $this->firstName) ||
      !preg_match('/^[a-zA-Z0-9]+$/', $this->lastName) ||
      !preg_match('/^[a-zA-Z0-9]+$/', $this->username)
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
    $uuid = $this->database->selectQuery("SELECT UUID() AS uuid")[0]["uuid"];

    $regAuthenticate = $this->database->conn->query("
			INSERT INTO authenticate (user_id, username, password) VALUES
				('$uuid', '$this->username', '$passwordEncode')
		");
    $regUser = $this->database->conn->query("
			INSERT INTO user (user_id, first_name, last_name, address, phone_number, email) VALUES
				('$uuid', '$this->firstName', '$this->lastName', '$this->address', '$this->phoneNumber', '$this->email')
		");

    if ($regAuthenticate && $regUser) {
      http_response_code(200);
      header("Location: /?register=success");
    } else {
      // Remove data created while register fail
      $this->database->conn->query("
				DELETE FROM authenticate WHERE user_id = '$uuid'
			");

      $this->database->conn->query("
				DELETE FROM user WHERE user_id = '$uuid'
			");
    }
  }
}
