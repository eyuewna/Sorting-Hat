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
    video.src = '../video/entrance.mp4';
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
});
