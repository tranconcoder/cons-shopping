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
    $data = mysqli_query($this->conn, $sqlString);
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
}
