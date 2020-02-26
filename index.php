<?php
    include __DIR__ . '/database.php';
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="icon" sizes="32x32" type="image/png" href="https://open.scdn.co/cdn/images/favicon32.a19b4f5b.png">
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="dist/app.css">
        <script src="dist/app.js" charset="utf-8"></script>
        <title>PHP - Spotify</title>
    </head>
    <body>
        <header>
            <div class="wrapper">
                <div class="navbar">
                    <div class="logo">
                        <img src="https://i.imgur.com/1Yn1xQ6.png" alt="logo"/>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="wrapper">
                <div class="cds-container">
                    <?php foreach ($database as $album) { ?>
                        <div class="cd">
                            <img src="<?php echo $album['poster']; ?>" alt="<?php echo $album['title']; ?>">
                            <h2><?php echo $album['title']; ?></h2>
                            <h3><?php echo $album['author']; ?></h3>
                            <h5><?php echo $album['year']; ?></h5>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </main>
    </body>
</html>
