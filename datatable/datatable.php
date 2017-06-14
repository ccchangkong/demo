<?php

$aa = array('a' => $_POST['a'], 'b' => 2, 'c' => 3);
$arr = array($aa, $aa, $aa);
echo json_encode($arr);
?>
