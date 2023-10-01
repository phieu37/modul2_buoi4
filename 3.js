// Lấy ra đối tượng
const tinhTong = document.getElementById("tinhTongForm");

// Bắt sự kiện submit 
tinhTong.addEventListener("submit", buttonSubmit);

// Lấy ra value
function buttonSubmit(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    const M = parseInt(document.getElementById("inputM").value);
    const N = parseInt(document.getElementById("inputN").value);
    const K = parseInt(document.getElementById("inputK").value);

    // Kiểm tra N <= M
    if (N <= M) {
        let sum = 0;
        for (let i = N; i <= M; i++) {
            if (i % K === 0) {
                sum += i;
            }
        }
        document.getElementById("ketQua").textContent = `Tổng các số chia hết cho ${K} trong khoảng từ ${N} đến ${M} là: ${sum}`;
    } else {
        document.getElementById("ketQua").textContent = "N phải nhỏ hơn hoặc bằng M.";
    }
}