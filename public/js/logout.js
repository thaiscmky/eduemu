 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under the New BSD License.
  * See the accompanying LICENSE.txt file for terms.
  */
 
$("#logout-link").click(function(){
  fetch("/api/user/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" }
  })
  .then(function() {
    document.location.replace("/");
  })
  .catch(err => console.log(err));
});
