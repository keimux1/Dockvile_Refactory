
  // Function to start progress
  function startProgress() {
    // Get progress bar element
    let truckProgress = document.getElementById('truck-progress-bar');
    let personalcarProgress = document.getElementById('personalcar-progress-bar');
    let taxiProgress = document.getElementById('taxi-progress-bar');
    let coasterProgress = document.getElementById('coaster-progress-bar');
    let bodaProgress = document.getElementById('boda-progress-bar');
   
   
    var progress = 0;
    
    // Update progress every 100ms
    var interval = setInterval(function() {
      // Increment progress
      progress += 1;
      
      // Update progress bar width and text
      progressBar.style.width = progress + '%';
      progressBar.querySelector('span').textContent = progress + '%';
      
      // Stop updating when progress reaches 100%
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 100);
  }

