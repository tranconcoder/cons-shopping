<?php

class SearchProductApi
{
  private $query;
  private $products;

  private $db;

  public function __construct()
  {
    if (!isset($_GET["q"])) {
      exit(json_encode(null));
    }

    $this->db = new DatabaseSQL();
    $this->query = $_GET["q"];
    $this->products = $this->db->searchProduct($this->query);

    echo json_encode($this->products);
  }
}
