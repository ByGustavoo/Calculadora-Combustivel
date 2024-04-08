<?php

$alcool = $_POST['alcool'];
$gasolina = $_POST['gasolina'];
$resultado = $alcool / $gasolina;

echo "<br>Preço do Álcool: R$ $alcool<br><br>"; 
echo "Preço da Gasolina: R$ $gasolina<br>";


if ($resultado < 0.7) {
    echo "<br>Compensa usar Álcool do que Gasolina, vem com o Guru dos Carros!";
} 

else {
    echo "<br>Compensa usar Gasolina do que Álcool, vem com o Guru dos Carros!";
}

?>
