<?php

function importScriptFromPath(string $path)
{
	$fileNameList = scandir($_SERVER['DOCUMENT_ROOT'] . '/' . $path);

	foreach ($fileNameList as $fileName) { ?>
          <script type="module" src="<?= "$path/$fileName" ?>"></script>
     <?php }
}
