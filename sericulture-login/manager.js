document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        
        function submitActivity() {
            alert('Activity logged successfully to the SeriFlow database!');
            // In a real app, this would send data to the backend
        }
