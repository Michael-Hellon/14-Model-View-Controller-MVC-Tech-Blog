const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    const post_id = parseInt(window.location.pathname.split('/').pop());

    const commentContent = document.querySelector('#comment-new').value.trim();
    // id="comment-new" - line 37 /post-id.HB 
    
    if (commentContent) {
      const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ comment: commentContent, post_id }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setTimeout(() => document.location.reload(), 200);
        // document.location.replace('/dashboard');
      } else {
          alert('Could not create a comment to post, MAN!!!');
      }
  }
};

document
  .querySelector('.comment-new-form')
  .addEventListener('submit', newCommentFormHandler);