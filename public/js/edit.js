 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

$('#edit-request-form').submit(function(e) {
    e.preventDefault();
    const title = $('input[name="request-title"]').val().trim();
    const url = $('input[name="request-url"]').val().trim();
    const id = $('input[name="request-id"]').val();
    fetch(`/api/request/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {document.location.replace('/dashboard'); })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
  
  $("#delete-btn").click(function() {
    fetch(`/api/request/${id}`, {
      method: 'DELETE'
    })
    .then(() => {document.location.replace('/dashboard'); })
    .catch((error) => {
      console.error('Error:', error);
    });
});
  