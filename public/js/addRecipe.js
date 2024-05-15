const newFormHandler = async function (event) {
    event.preventDefault();
  
    const recipe_name = document.querySelector('input[name="recipe_name"]').value;
    const recipe_content = document.querySelector('textarea[name="recipe_content"]').value;
  
    await fetch(`/api/recipe`, {
      method: "POST",
      body: JSON.stringify({
        title,
        postBody,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    document.location.replace("/dashboard");
  };
  
  document
    .querySelector("#new-post-form")
    .addEventListener("submit", newFormHandler);