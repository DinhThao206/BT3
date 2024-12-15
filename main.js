function calculatePerimeter() {
    // Lấy giá trị chiều dài và chiều rộng
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    // Tính chu vi
    const perimeter = 2 * (length + width);
    // Hiển thị kết quả
    document.getElementById('result').innerText = `Chu vi hình chữ nhật là: ${perimeter}`;
}



