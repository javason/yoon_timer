// 페이지 로드 시 자동으로 타이머 시작
document.addEventListener("DOMContentLoaded", function() {
    // 2025년 4월 4일 11시를 타겟 시간으로 설정
    const targetDateStr = "202504041100";
    startCountdown(targetDateStr);
});

function startCountdown(dateTimeStr) {
    const targetDate = new Date(
        `${dateTimeStr.slice(0, 4)}-${dateTimeStr.slice(4, 6)}-${dateTimeStr.slice(6, 8)}T${dateTimeStr.slice(8, 10)}:${dateTimeStr.slice(10, 12)}:00`
    ).getTime();

    window.countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(window.countdownInterval);
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, "0");
        document.getElementById("hours").innerText = String(hours).padStart(2, "0");
        document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
        document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
    }, 1000);
} 