<?php

function camelToSnake($input)
{
  $pattern = "/(?<=\\w)([A-Z])/";
  $snake_case = strtolower(preg_replace($pattern, '_$1', $input));

  return $snake_case;
}

function snakeToCamel($input)
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

function isAdmin(string $rankId)
{
  $db = new DatabaseSQL();
  $rank = $db->selectQuery("
            SELECT `label`
                FROM `user_rank`
                WHERE `rank_id` = '$rankId'
                ")[0];
  $rank = isset($rank["label"]) ? $rank["label"] : null;

  if ($rank && $rank === "admin") {
    return true;
  }

  return false;
}

function handleError(string $message)
{
  http_response_code(400);
  exit(json_encode(["error " => true, "message " => $message]));
}
