// Lấy ra đối tượng
const tinhTong = document.getElementById("tinhTongForm");

// Bắt sự kiện submit 
tinhTong.addEventListener("submit", buttonSubmit);

// Lấy ra value
function buttonSubmit(event) {
  event.preventDefault();
  const n = parseInt(document.getElementById("inputN").value);

  let sum = 0;
  let i = 1;
  do {
    sum += i;
    i++;
  } while (i <= n);
  document.getElementById("ketQua").textContent = `Tổng S của ${n} là: ${sum}`;
}