// lấy ra checkbox và button
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkAll = document.getElementById("check__all");
const unCheckAll = document.getElementById("uncheck__all");

// Xử lý sự kiện 
checkAll.addEventListener('click', checkBox);
function checkBox() {
    checkboxes.forEach((checkBox) => {
        checkBox.checked = true;
    });
}

unCheckAll.addEventListener('click', unCheckBox);
function unCheckBox() {
    checkboxes.forEach((checkBox) => {
        checkBox.checked = false;
    });
}


