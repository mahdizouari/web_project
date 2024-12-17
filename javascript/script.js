
 
    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('nav ul li a');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.animation = 'jarvisPulse 1.5s infinite';
            });

            link.addEventListener('mouseout', () => {
                link.style.animation = 'none';
            });
        });
    });



    
    document.getElementById('welcome-heading').addEventListener('click', function() {
        this.classList.add('disappear');
        setTimeout(() => {
            this.style.display = 'none';
            const paragraph = document.getElementById('welcome-paragraph');
            paragraph.style.display = 'block';
            paragraph.classList.add('dust');
        }, 1000); // Match the duration of the disappear animation
    });




    document.getElementById('welcome-heading').addEventListener('click', function() {
        this.classList.add('disappear');
        setTimeout(() => {
            this.style.display = 'none';
            const paragraph = document.getElementById('welcome-paragraph');
            paragraph.style.display = 'block';
            typeWriter(paragraph, "Hello! I am Mehdi Zouari. An IT engineer committed to excellence in technology and innovation. Constantly seeking opportunities to grow, learn, and contribute to impactful projects, I am focused on leveraging technology to create a better future.");
        }, 400); // Match the duration of the disappear animation
    });
    
    function typeWriter(element, text) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, 40); // Adjust typing speed here
            } else {
                element.style.borderRight = 'none'; // Remove cursor after typing
            }
        }
        typing();
    }

    


    