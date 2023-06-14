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

    $result = $data->fetch_all(MYSQLI_ASSOC);

    $data->free_result();

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
			SELECT *, CONCAT(first_name, ' ', last_name) AS full_name
				FROM user
				WHERE user_id = '$userId'
		");

    if (isset($userInfo[0]["user_id"])) {
      return $userInfo[0];
    } else {
      return $userInfo;
    }
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

  public function getImageIdProductThumb($productId)
  {
    $imageId = $this->selectQuery("
			SELECT image_id
				FROM image
				WHERE
					product_id = '$productId'
					AND is_thumb
				LIMIT 1
		")[0];

    if (!isset($imageId)) {
      return null;
    } else {
      return $imageId;
    }
  }

  public function getProductByName(string $name)
  {
    $nameLiked = "%" . implode("%", str_split($name)) . "%";

    $products = $this->selectQuery("
            SELECT *
                FROM product
                WHERE label LIKE '$nameLiked'
        ");

    return $products;
  }
}
