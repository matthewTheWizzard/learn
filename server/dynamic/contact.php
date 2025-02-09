<?php
include 'header.php';
?>
<h1>Свяжитесь с нами</h1>
<form action="process_contact.php" method="POST">
  <label>Ваше имя:<br>
    <input type="text" name="username" required>
  </label><br><br>
  <label>Сообщение:<br>
    <textarea name="message" rows="5" required></textarea>
  </label><br><br>
  <button type="submit">Отправить</button>
</form>
<nav>
  <a href="index.php">Главная</a> |
  <a href="about.php">О нас</a> |
  <a href="contact.php">Контакты</a>
</nav>
<?php
include 'footer.php';
?>