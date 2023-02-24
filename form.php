<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $training = trim($_POST['training']);
    $message = trim($_POST['message']);

    // Validate the form data
    $errors = array();

    if (empty($name)) {
        $errors[] = 'Name is required';
    }

    if (empty($email)) {
        $errors[] = 'Email is required';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is not valid';
    }

    if (empty($phone)) {
        $errors[] = 'Phone is required';
    }

    if (empty($training)) {
        $errors[] = 'Training program is required';
    }

    if (empty($message)) {
        $errors[] = 'Message is required';
    }

    // If there are no errors, send the email
    if (empty($errors)) {
        $to = 'tiwaryritesh7050@gmail.com'; // Replace with your email address
        $subject = 'Enquiry from ' . $name;
        $body = "Name: $name\n\nEmail: $email\n\nPhone: $phone\n\nTraining Program: $training\n\nMessage: $message";
        $headers = "From: $email\r\n" .
                   "Reply-To: $email\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $body, $headers)) {
            $success = 'Your enquiry has been sent successfully!';
        } else {
            $errors[] = 'There was a problem sending your enquiry. Please try again later.';
        }
    }
}
?>
