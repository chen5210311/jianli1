document.addEventListener('DOMContentLoaded', function() {
    alert('欢迎访问我的个人网站！');

    var aboutSection = document.getElementById('about');
    var contactSection = document.getElementById('contact');

    if (aboutSection && contactSection) {
        aboutSection.addEventListener('click', function() {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
