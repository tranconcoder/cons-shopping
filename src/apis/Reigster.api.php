<?php

include_once __DIR__ . "/../config/db/connect.php";

class RegisterApi
{
	private $firstName;
	private $lastName;
	private $address;
	private $phoneNumber;
	private $gmail;

	public function __construct()
	{
		$this->firstName = $_POST["firstName"];
		$this->lastName = $_POST["lastName"];
		$this->address = $_POST["address"];
		$this->phoneNumber = $_POST["phoneNumber"];
		$this->gmail = $_POST["gmail"];

		$validateSuccess = $this->validateData();

		if (!$validateSuccess) {
			http_response_code(400);
			echo "Error while validate data";

			return;
		}
	}

	private function validateData()
	{
		// Required check
		if (
			!isset($this->firstName) ||
			!isset($this->lastName) ||
			!isset($this->address) ||
			!isset($this->phoneNumber)
		) {
			return false;
		}

		// Length check
		if (
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
			!preg_match("/\$[A-Za-z_][A-Za-z_0-9]*/", $this->lastName)
		) {
			return false;
		}

		// Number only check
		if (!preg_match('/^[0-9]+$/', $this->phoneNumber)) {
			return false;
		}

		// Is gmail check
		if (
			strlen($this->gmail) &&
			!preg_match(
				'/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\"\S+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
				$this->gmail
			)
		) {
			return false;
		}

		return true;
	}

	private function handleRegister() {
		$sql = "
		"
	}
}
