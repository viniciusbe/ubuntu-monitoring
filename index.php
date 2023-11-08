<?php
if (!extension_loaded("gmp")) {
    echo "gmp not found";
    exit(1);
}

function getFib($n)
{
    $a = gmp_init(0);
    $b = gmp_init(1);
    for ($i = 2; $i <= $n; $i++) {
        $temp = gmp_add($a, $b);
        $a = $b;
        $b = $temp;
    }
    return $b;
}

$resultado = getFib(100000);

echo $resultado;
