document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const contentArea = document.getElementById('content-area');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', (event) => {
            event.preventDefault(); 
            const contentFile = item.getAttribute('data-content');

            // 获取配置的html页面
            fetch(contentFile)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    // 渲染html页面内容到当前页面
                    contentArea.innerHTML = data; 
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        });
    });
});
