const newFormHandler = async function (event) {
  event.preventDefault();

  const recipe_name = document.querySelector('input[name="recipe_name"]').value;
  const recipe_content = document.querySelector('textarea[name="recipe_content"]').value;

  await fetch(`/api/recipes`, {
    method: "POST",
    body: JSON.stringify({
      recipe_name,
      recipe_content,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/allPosts");
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
