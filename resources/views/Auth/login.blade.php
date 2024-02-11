<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    @vite(['resources/js/auth/login.js','resources/js/auth/helpers/checkToken.js'])
</head>
<body>
<div class="container">
    <form id="loginForm" class="bg-light p-5 my-4 rounded shadow">
        <label class="form-label" for="">Email</label>
        <input class="form-control" type="email" name="email">
        <label class="form-label" for="">Password</label>
        <input class="form-control" type="password" name="password">
        <button class="btn btn-primary mt-3" type="submit">Login</button>
    </form>
</div>

</body>
</html>
