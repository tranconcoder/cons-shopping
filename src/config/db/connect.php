<?php
include_once __DIR__ . '/../../assets/utils/commonMethod.util.php';

class DatabaseSQL
{
    private $serverName = 'localhost';
    private $username = 'trancon';
    private $password = 'Anhnam9ce*';
    private $databaseName = 'cons-shopping-db';

    public $conn;
    private $commonMethod;

    public function __construct()
    {
        $this->conn = mysqli_connect(
            $this->serverName,
            $this->username,
            $this->password,
            $this->databaseName
        );

        if ($this->conn->connect_error) {
            die('Connect to database failed!');
        }
    }

    public function selectQuery(string $sqlString = '')
    {
        $data = $this->conn->query($sqlString);

        $result = $data->num_rows
            ? convertArrayKeysToCamelCase($data->fetch_all(MYSQLI_ASSOC))
            : [];

        $data->free_result();

        return isset($result[0]) ? $result : [];
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

        if (isset($userInfo[0]['user_id'])) {
            return $userInfo[0];
        } else {
            return $userInfo;
        }
    }

    public function auth(string $username, string $password): string|null
    {
        $passwordEncode = md5($password);

        $userInfo = $this->selectQuery("
			SELECT user_id
				FROM authenticate
				WHERE
					username = '$username'
					AND password = '$passwordEncode'
				LIMIT 1
		");

        if (isset($userInfo[0]['userId'])) {
            return $userInfo[0]['userId'];
        } else {
            return null;
        }
    }

    public function searchProduct(string $query, int $limit = 0)
    {
        if (!isset($query)) {
            return [];
        }

        $queryFormatted = '%' . implode('%', explode(' ', $query)) . '%';
        $limitStr = $limit ? "LIMIT $limit" : '';

        $productList = $this->selectQuery(
            "
			(SELECT `product`.*, image.source as thumb, deal.deal_cost
				FROM product, image, deal
				WHERE
					(
						label LIKE '$queryFormatted'
						OR description LIKE '$queryFormatted'
						OR processor LIKE '$queryFormatted'
					)
					AND product.deal_id = deal.deal_id
					AND image.image_id = (
						SELECT image_id
							FROM image AS image2
							WHERE image2.product_id = product.product_id
							ORDER BY image2.order ASC
							LIMIT 1
					)
				) UNION
				(SELECT `product`.*, image.source as thumb, 0 AS deal_cost
					FROM product, image
					WHERE
						(
							label LIKE '$queryFormatted'
							OR description LIKE '$queryFormatted'
							OR processor LIKE '$queryFormatted'
						)
						AND product.deal_id IS NULL
						AND image.image_id = (
							SELECT image_id
								FROM image as image2
								WHERE image2.product_id = product.product_id
								ORDER BY image2.order ASC
								LIMIT 1
						)
				)
                $limitStr
			"
        );

        return isset($productList[0]) ? $productList : [];
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
}
