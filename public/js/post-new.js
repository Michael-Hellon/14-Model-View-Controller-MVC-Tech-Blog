const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#new-post-title").value.trim();
    const content = document.querySelector("#new-post-content").value.trim();

    if (title && content) {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Unable to create new post');
    }
  };
};
  
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostFormHandler);