<?php
class DatabaseSQL
{
  private $serverName = "localhost";
  private $username = "root";
  private $password = "Anhnam9ce";
  private $databaseName = "cons-shopping-db";
  public $conn;

  public function __construct()
  {
    $this->conn = mysqli_connect(
      $this->serverName,
      $this->username,
      $this->password,
      $this->databaseName
    );

    if ($this->conn->connect_error) {
      die("Connect to database failed!");
    }
  }

  public function selectQuery(string $sqlString = "")
  {
    $data = $this->conn->query($sqlString);
    $result = [];

    if (mysqli_num_rows($data) > 0) {
      while ($row = mysqli_fetch_assoc($data)) {
        array_push($result, $row);
      }
    }

    return $result;
  }

  public function getAll(string $tableName)
  {
    $tableData = $this->selectQuery("SELECT * FROM `$tableName`");

    return $tableData;
  }

  public function getUser($userId)
  {
    $userInfo = $this->selectQuery("
			SELECT *
				FROM user
				WHERE user_id = '$userId'
				LIMIT 1
		");

    print_r($userInfo);

    return $userInfo;
  }

  public function auth(string $username, string $password): string|null
  {
    $passwordEncode = md5($password);

    $userId = $this->selectQuery("
			SELECT user_id
				FROM authenticate
				WHERE
					username = '$username'
					AND password = '$passwordEncode'
				LIMIT 1
		");

    if (isset($userId[0]["user_id"])) {
      return $userId[0]["user_id"];
    } else {
      return null;
    }
  }
}
