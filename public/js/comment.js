const commentFormHandler = async function (event) {
    event.preventDefault();
  
    const recipeId = document.querySelector('input[name="recipeId"]').value;
    const comment_text = document.querySelector('textarea[name="comment-body"]').value;
  
    if (comment_text) {
      comment_text;
      await fetch(`/api/comments/${recipeId}`, {
        method: "POST",
        body: JSON.stringify({
          comment_text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector("#new-comment-form")
    .addEventListener("submit", commentFormHandler);
  