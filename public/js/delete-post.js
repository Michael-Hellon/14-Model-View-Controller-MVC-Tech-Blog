const deletePost = async (id) => {
  
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Unable to delete post');
    }
  };

  const deletePostHandler = (event) => {
    if (event.target.matches('.delete')) {
        const id = event.target.getAttribute('data-post-id');
        deletePost(id);
    }
};  
  document
    .addEventListener('click', deletePostHandler);