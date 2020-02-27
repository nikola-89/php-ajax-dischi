<?php
    // ******************************************
    include __DIR__ . '../../database/db.php';
    // ******************************************
    $paramAuthor = $_GET['author'];
    // ******************************************
    if (!empty($database)) {
        if (!empty($paramAuthor)) {
            foreach ($database as $index => $album) {
                if ($album['author'] == $paramAuthor) {
                    $filtered[] = $album;
                }
            }
            $results = ['success' => true, 'data' => $filtered];
        } else {
            $results = ['success' => true, 'data' => $database];
        }
    } else {
        $results = ['success' => false, 'message' => 'Database Error', 'data' => null];
    }
    // ******************************************
    header('Content-Type: application/json');
    echo json_encode($results);
    // ******************************************
?>
