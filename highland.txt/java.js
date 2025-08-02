// Lấy các hệ số từ người dùng
let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));

// Tính delta
let delta = b * b - 4 * a * c;

// Tính nghiệm
if (delta < 0) {
    alert("Phương trình không có nghiệm thực.");
} else if (delta === 0) {
    let x = -b / (2 * a);
    alert("Phương trình có nghiệm kép x = " + x);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Phương trình có hai nghiệm x1 = " + x1 + " và x2 = " + x2);
}