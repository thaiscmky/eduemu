 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

$("#new-request-form").submit(function(e){
  e.preventDefault();
  const title = $('input[name="request-title"]').val();
  const url = $('input[name="request-url"]').val();
  fetch(`/api/request`, {
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