document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Show more videos functionality
    const showMoreBtn = document.getElementById('show-more-btn');
    const hiddenVideos = document.querySelectorAll('.hidden-video');
    let showAllVideos = false;
    
    showMoreBtn.addEventListener('click', function() {
        showAllVideos = !showAllVideos;
        
        hiddenVideos.forEach(video => {
            if (showAllVideos) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
        
        if (showAllVideos) {
            this.querySelector('span').textContent = 'اخفاء';
            this.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
        } else {
            this.querySelector('span').textContent = 'المزيد من فيديوهات';
            this.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
        
        // Smooth scroll to maintain position
        setTimeout(() => {
            this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    });
    
    // Video modal functionality
    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.getElementById('video-modal');
    const closeModal = document.querySelector('.close-modal');
    const videoIframe = document.getElementById('yt-video');
    
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            videoIframe.src = `https://www.youtube.com/embed/${videoId}?`;
            videoModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        videoIframe.src = '';
        videoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoIframe.src = '';
            videoModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            item.classList.toggle('active');
            
            const content = item.querySelector('.accordion-content');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
    
    // Scroll animations
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial state for animations
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check on load
    window.addEventListener('load', checkScroll);
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Initial check
    checkScroll();
    
    // Add floating animation to anime girl in footer
    const animeGirl = document.querySelector('.anime-girl');
    if (animeGirl) {
        animeGirl.style.animation = 'float 3s ease-in-out infinite';
    }
    
    // Add pulse animation to neon elements
    const neonElements = document.querySelectorAll('.pink-neon, .neon-btn, .neon-box');
    neonElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add random glitch effect to header sometimes
    const header = document.querySelector('header');
    
    function randomGlitch() {
        if (Math.random() > 0.9) {
            header.style.transform = 'translateX(5px)';
            header.style.boxShadow = '0 0 30px rgba(255, 42, 109, 0.8)';
            
            setTimeout(() => {
                header.style.transform = 'translateX(-5px)';
            }, 50);
            
            setTimeout(() => {
                header.style.transform = 'translateX(0)';
                header.style.boxShadow = '0 0 20px rgba(255, 42, 109, 0.3)';
            }, 100);
        }
    }
    
    setInterval(randomGlitch, 5000);
    
    // Add cursor trail effect
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);
    
    document.addEventListener('mousemove', function(e) {
        cursorTrail.style.left = e.pageX + 'px';
        cursorTrail.style.top = e.pageY + 'px';
    });
    
    // Add hover effect to neon buttons
    const neonButtons = document.querySelectorAll('.neon-btn');
    
    neonButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 15px rgba(255, 42, 109, 0.8)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Add ripple effect to buttons
    document.querySelectorAll('.neon-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
});


  function copyText() {
    const text = document.getElementById("script-text").textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ تم النسخ بنجاح!");
    }).catch(err => {
      alert("❌ فشل النسخ: " + err);
    });
  }


  function copyScriptText() {
    const text = document.getElementById("script-text-b37").innerText;
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("✅ تم النسخ بنجاح!");
      })
      .catch(err => {
        alert("❌ حدث خطأ أثناء النسخ");
        console.error(err);
      });
  }


  // دالة نسخ النص
function copyToClipboard(button) {
    // الحصول على العنصر الأب (الحاوية) ثم البحث عن عنصر الكود داخله
    const codeElement = button.parentElement.querySelector('.s37-code');
    const textToCopy = codeElement.textContent;
    
    // استخدام Clipboard API للنسخ
    navigator.clipboard.writeText(textToCopy).then(() => {
        // تغيير نص الزر مؤقتًا للإشارة إلى أن النسخ تم
        const originalText = button.textContent;
        button.textContent = 'تم النسخ!';
        button.style.background = 'linear-gradient(45deg, #4CAF50, #2E7D32)';
        
        // إعادة الزر إلى حالته الأصلية بعد ثانيتين
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'linear-gradient(45deg, #ff6ec7, #7873f5)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        button.textContent = 'خطأ في النسخ';
        button.style.background = 'linear-gradient(45deg, #f44336, #c62828)';
    });
}

// إضافة حدث تحميل الصفحة لضبط بعض الأمور
document.addEventListener('DOMContentLoaded', function() {
    // يمكنك إضافة أي تهيئات إضافية هنا إذا لزم الأمر
});






