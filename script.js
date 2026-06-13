document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            accordion.classList.toggle('active');
        });
    });

    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            navigator.clipboard.writeText(url).then(() => {
                const originalText = this.textContent;
                this.textContent = '已复制!';
                this.style.borderColor = '#22c55e';
                this.style.color = '#22c55e';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.borderColor = '';
                    this.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
            });
        });
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.classList.add('active');
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });
});
