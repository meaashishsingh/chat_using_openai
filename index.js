document.getElementById('chat-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const question = document.getElementById('question').value;
    
    const responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = 'Loading...';
    
    try {
      const response = await axios.post('http://localhost:5000/chat', { question });
      responseContainer.innerHTML = `<p>${response.data.message}</p>`;
    } catch (error) {
      responseContainer.innerHTML = `<p style="color: red;">Error: ${error.response?.data?.message || error.message}</p>`;
    }
  });
  