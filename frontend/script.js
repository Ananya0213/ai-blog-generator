function generateBlog() {
  const topic = document.getElementById('topicInput').value.trim();
  const outputDiv = document.getElementById('blogOutput');

  if (!topic) {
    alert("Please enter a topic first!");
    return;
  }

  // TEMPORARY: Simulate blog generation with mock content
  const mockBlog = `
  Title: The Power of ${topic}

  In today's world, ${topic} is more important than ever. It influences the way we think, work, and connect with others...

  (This is mock content. Real AI content will be fetched from backend soon!)
  `;

  outputDiv.textContent = mockBlog;
}
