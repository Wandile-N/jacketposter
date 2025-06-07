<?php
// Database connection details
$username = "root";
$password = "Lu2003yand@";
$database = "wandile";
$conn = mysqli_connect("127.0.0.1", $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data safely
$story = $conn->real_escape_string($_POST['story']);
$whatsapp = $conn->real_escape_string($_POST['whatsapp']);

// Basic validation
if (empty($story) || empty($whatsapp)) {
    echo json_encode(["success" => false, "message" => "All fields are required!"]);
    exit;
}

// Insert into DB
$sql = "INSERT INTO volunteers (story, whatsapp) VALUES ('$story', '$whatsapp')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
