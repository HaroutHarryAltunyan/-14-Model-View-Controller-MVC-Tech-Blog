const newFormHandler = async (event) => {
    event.preventDefault();
const blogID = event.target.value;

  // targeting comment input 
const content = document.querySelector('#comment-content').value.trim();
  
    if ( content) {
      const response = await fetch(`/api/blogs/comment/${blogId}`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to cooment the post');
      }
    }
  };
  
  document
    .querySelector('#comenter')
    .addEventListener('click', newFormHandler);
  

  