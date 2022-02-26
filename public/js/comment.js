 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

$('#new-comment-form').submit(function(e){
  e.preventDefault();
  const id = $('input[name="request-id"]').val().trim();
  const body = $('textarea[name="comment"]').val().trim();

  if(url) {
    fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        id,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => { document.location.reload(); })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
});