 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

$("#new-post-form").submit(function(e){
  e.preventDefault();
  const title = document.querySelector('input[name="request-title"]').value;
  const url = document.querySelector('textarea[name="request-url"]').value;
  fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      url
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(() => {document.location.replace('/dashboard'); })
  .catch((error) => {
    console.error('Error:', error);
  });;

});