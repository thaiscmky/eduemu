 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */
$("#signup-form").submit(function(e){
  e.preventDefault();
  const username = $("#username-signup").val().trim();
  const password = $("#password-signup").val().trim();
  fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      username,
      password
    }),
    headers: { "Content-Type": "application/json" }
  })
  .then(response => response.json())
  .then(data => {
    if(data.errors !== undefined && data.errors.length > 0){
      alert(data.errors.map(error => error.message).join(' '));
    } else {
      document.location.replace("/dashboard");
    }
  })
  .catch(err => console.log(err));
});