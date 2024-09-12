let currentProject = 0; // Start with the first project
        const projects = document.querySelectorAll('.project');

        // Function to show the previous project
        function prevProject() {
            projects[currentProject].classList.remove('active'); // Hide current project
            currentProject = (currentProject === 0) ? projects.length - 1 : currentProject - 1; // Move to the previous project
            projects[currentProject].classList.add('active'); // Show new current project
        }

        // Function to show the next project
        function nextProject() {
            projects[currentProject].classList.remove('active'); // Hide current project
            currentProject = (currentProject === projects.length - 1) ? 0 : currentProject + 1; // Move to the next project
            projects[currentProject].classList.add('active'); // Show new current project
        }