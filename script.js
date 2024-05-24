
//simple way 

fetch('https://jsonplaceholder.typicode.com/posts') // Using a specific endpoint
  .then(res => {
     if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
    } 
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  }) ;

// async and await way
async function getUser() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      const postsContainer = document.getElementById('posts-container');

      // Loop through the data and create HTML elements for each post
      data.forEach(post => {
          // Create a new div for each post
          const postElement = document.createElement('div');
          postElement.classList.add('post');

          // Create a title element
          const titleElement = document.createElement('h2');
          titleElement.textContent = post.title;
          postElement.appendChild(titleElement);

          // Create a body element
          const bodyElement = document.createElement('p');
          bodyElement.textContent = post.body;
          postElement.appendChild(bodyElement);

          // Append the post element to the container
          postsContainer.appendChild(postElement);
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

  
  // Call the function to fetch and log the data
  getUser();
  
  async function getPhotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        // Select the container element
        const photosContainer = document.getElementById('photos-container');

        // Loop through the data and create HTML elements for each photo
        data.forEach(photo => {
            // Create a new div for each photo
            const photoElement = document.createElement('div');
            photoElement.classList.add('photo');

            // Create a title element
            const titleElement = document.createElement('h2');
            titleElement.textContent = photo.title;
            photoElement.appendChild(titleElement);

            // Create an img element
            const imgElement = document.createElement('img');
            imgElement.src = photo.url;
            imgElement.alt = photo.title;
            photoElement.appendChild(imgElement);

            // Append the photo element to the container
            photosContainer.appendChild(photoElement);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the function to fetch and display the photos
getPhotos();
