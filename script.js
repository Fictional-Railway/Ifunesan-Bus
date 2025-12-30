document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('menu-trigger');
    const nav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');


    // 運行状況の更新（シミュレーション）
    const statusBox = document.getElementById('bus-status');
    const statuses = [
        { text: "平常通り", color: "#28a745" },
        { text: "平常通り", color: "#28a745" },
        { text: "一部路線で遅延あり", color: "#ffc107" }
    ];

    setInterval(() => {
        const s = statuses[Math.floor(Math.random() * statuses.length)];
        statusBox.innerHTML = `<span class="dot" style="background-color: ${s.color}"></span> 運行状況：${s.text}`;
    }, 10000); // 10秒ごとにランダムで状況変化

    console.log("伊舟山交通：モバイル対応システム 起動");
});

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('menu-trigger');
    const nav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');

    function toggleMenu() {
        // クラスの付け外し
        trigger.classList.toggle('active');
        nav.classList.toggle('open');
        overlay.classList.toggle('show');
        
        // 【修正】スクロール禁止の処理を削除しました！
        // これでメニューを開いたまま下へスクロールできます。
    }

    trigger.addEventListener('click', toggleMenu);
    
    // 背景（オーバーレイ）をタップしても閉じるようにする
    overlay.addEventListener('click', toggleMenu);

    // メニュー内のリンクをクリックしたら自動で閉じる
    const navLinks = document.querySelectorAll('.mobile-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});