<?php
include 'header.php';

$products = [
  ["name" => "Ноутбук",    "category" => "laptop", "price" => 1000],
  ["name" => "Смартфон",   "category" => "phone",  "price" => 500],
  ["name" => "Планшет",    "category" => "tablet", "price" => 700],
  ["name" => "Наушники",   "category" => "audio",  "price" => 100]
];

$category = $_GET['category'] ?? null;
$filtered = [];

if ($category) {
  foreach ($products as $p) {
    if ($p['category'] === $category) {
      $filtered[] = $p;
    }
  }
} else {
  $filtered = $products;
}
?>

<h1>Товары</h1>

<nav>
  <a href="index.php">Главная</a> |
  <a href="about.php">О нас</a> |
  <a href="contact.php">Контакты</a> |
  <a href="products.php">Товары</a>
</nav>

<form method="GET">
  <label>Категория:
    <input type="text" name="category" placeholder="phone / laptop / tablet / audio">
  </label>
  <button type="submit">Фильтр</button>
</form>

<ul>
<?php foreach ($filtered as $item) : ?>
  <li>
    <?php echo $item["name"] . " (" . $item["category"] . ") - $" . $item["price"]; ?>
  </li>
<?php endforeach; ?>
</ul>

<?php
include 'footer.php';
?>