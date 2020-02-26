<?php
    include __DIR__ . '../../database/db.php';
    header('Content-Type: application/json');
    if (!empty($database)) {
        $results = ['success' => true, 'data' => $database];
    } else {
        $results = ['success' => false, 'message' => 'Database Error', 'data' => null];
    }
    echo json_encode($results);
?>
