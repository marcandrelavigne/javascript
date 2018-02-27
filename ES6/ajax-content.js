/*
	Ajax Content
  Fetch content from a JSON file
 */

fetch('path/to/file.json')
.then(response => {
    if (response.ok) {
      return Promise.resolve(response);
    }
    else {
      return Promise.reject(new Error('Failed to load'));
    }
})
.then(response => response.json()) // parse response as JSON
.then(data => {
    document.getElementById('fetchedContent').textContent = data.content;
})
.catch(function(error) {
    console.log(`Error: ${error.message}`);
});
