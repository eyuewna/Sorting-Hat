document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('returnButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.add('fadeout');
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 1000);
  });

  document.getElementById('beginButton').addEventListener('click', function(event) {
    event.preventDefault();
    // Create a div to contain the video
    var videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');
    // Create the video element
    var video = document.createElement('video');
    // Update the video source with the correct path
    video.src = 'assets/video/entrance.mp4'; // Adjusted path
    video.autoplay = true;
    video.loop = false;
    // Add event listener for timeupdate event
    video.addEventListener('timeupdate', function() {
      // Check if 20 seconds have elapsed
      if (video.currentTime >= 34) {
        // After 20 seconds, proceed with fading effect and changing link
        document.body.classList.add('fadeout');
        setTimeout(function() {
          window.location.href = 'page2.html';
        }, 1000);
      }
    });
    // Append the video to the container
    videoContainer.appendChild(video);
    // Append the container to the body
    document.body.appendChild(videoContainer);
  });

  // Function to create the dynamic anchor element
  var link = document.createElement('a');
  link.href = 'page2.html';
  link.textContent = 'Link to Page 2';
  document.body.appendChild(link);
});
