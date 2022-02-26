 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

$("#login-form").submit(function(e){
  e.preventDefault();
  const username = $("#user-login").val().trim();
  const password = $("#password-login").val().trim();
  fetch("/api/user/login", {
    method: "post",
    body: JSON.stringify({
      username,
      password
    }),
    headers: { "Content-Type": "application/json" }
  })
  .then(function() {
    document.location.replace("/dashboard");
  })
  .catch(err => console.log(err));
});