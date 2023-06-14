<?php

class CommonMethod
{
	public function camelToSnake($input)
	{
		$pattern = '/(?<=\\w)([A-Z])/';
		$snake_case = strtolower(preg_replace($pattern, '_$1', $input));

		return $snake_case;
	}

	public function snakeToCamel($input)
	{
		$camel_case = lcfirst(str_replace('_', '', ucwords($input, '_')));

		return $camel_case;
	}
}
