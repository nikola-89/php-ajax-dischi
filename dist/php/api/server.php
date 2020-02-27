<?php
    // ******************************************
    include __DIR__ . '../../database/db.php';
    // ******************************************
    $paramAuthor = $_GET['author'];
    $paramAuthorList = $_GET['author-list'];
    // ******************************************
    if (!empty($database)) {
        if (!empty($paramAuthor)) {
            foreach ($database as $index => $album) {
                if ($album['author'] == $paramAuthor) {
                    $filtered[] = $album;
                }
            }
            $results = ['success' => true, 'data' => $filtered];
        } elseif (!empty($paramAuthorList && $paramAuthorList == 'list')) {
            $filtered = [];
            foreach ($database as $album) {
                if (!in_array($album['author'], $filtered)) {
                    $filtered[] = $album['author'];
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
