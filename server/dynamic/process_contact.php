<?php
    include 'header.php';
    $username = htmlspecialchars($_POST['username'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');
?>
    <h1>Спасибо за обращение!</h1>
    <p><strong>Имя:</strong> <?php echo $username; ?></p>
    <p><strong>Сообщение:</strong> <?php echo nl2br($message); ?></p>
    <a href="index.php">Вернуться на главную</a>
<?php
    include 'footer.php';
?>