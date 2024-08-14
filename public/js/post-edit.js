const id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

const updatePostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-update-post").value.trim();
    const content = document.querySelector("#update-content-post").value.trim();
  
    if(title && content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Unable to update the post');
    }
  };
};

const deletePostFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Unable to delete the post');
  }
}
  
document
  .querySelector('.edit-post-form')
  .addEventListener('submit', updatePostFormHandler);

document
  .querySelector('#delete')
  .addEventListener('click', deletePostFormHandler);