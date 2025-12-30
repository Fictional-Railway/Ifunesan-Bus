document.addEventListener('DOMContentLoaded', () => {
    
    // バスアイコンをランダムに動かす（位置情報のデモ）
    const moveBuses = () => {
        const bus1 = document.getElementById('bus1');
        const bus2 = document.getElementById('bus2');
        
        const randomPos = () => Math.floor(Math.random() * 80) + "%";
        
        if(bus1) {
            bus1.style.top = randomPos();
            bus1.style.left = randomPos();
        }
        if(bus2) {
            bus2.style.top = randomPos();
            bus2.style.left = randomPos();
        }
    };

    // 5秒ごとにマップ上のバスを動かす
    setInterval(moveBuses, 5000);

    // 下部ナビゲーションの切り替え（見た目だけ）
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // 検索入力時にキーボードを閉じる処理（スマホ用）
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchInput.blur();
        }
    });
});