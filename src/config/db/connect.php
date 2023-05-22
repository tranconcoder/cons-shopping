<?php
class DatabaseSQL
{
	private $serverName = 'localhost';
	private $username = 'root';
	private $password = 'Anhnam9ce';
	private $databaseName = 'CONS-Store';
	private $conn;

	public function __construct()
	{
		$this->conn = mysqli_connect(
			$this->serverName,
			$this->username,
			$this->password,
			$this->databaseName
		);

		if ($this->conn->connect_error) {
			exit('Connect to database failed!');
		}
	}

	protected function query(string $sqlString = '')
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

	protected function getAll(string $tableName)
	{
		$tableData = $this->query("SELECT * FROM `$tableName`");

		return $tableData;
	}
}
