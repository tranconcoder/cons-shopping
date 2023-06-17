<?php

class CommonMethod
{
  public function camelToSnake($input)
  {
    $pattern = "/(?<=\\w)([A-Z])/";
    $snake_case = strtolower(preg_replace($pattern, '_$1', $input));

    return $snake_case;
  }

  public function snakeToCamel($input)
  {
    $camel_case = lcfirst(str_replace("_", "", ucwords($input, "_")));

    return $camel_case;
  }

  // Convert snake_case to camelCase
  function convertArrayKeysToCamelCase($data)
  {
    if (!isset($data)) {
      return [];
    }
    $result = [];

    $newKeyList = array_map(function ($input) {
      $camel_case = lcfirst(str_replace("_", "", ucwords($input, "_")));

      return $camel_case;
    }, array_keys($data[0]));

    foreach ($data as $dataItem) {
      array_push($result, array_combine($newKeyList, $dataItem));
    }

    return $result;
  }

  function isAdmin()
  {
  }
}
