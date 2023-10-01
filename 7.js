function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function isVietnamesePhoneNumber(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(errorElement => {
      errorElement.textContent = '';
    });
  }
  
  function register() {
    clearErrors();
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    let valid = true;
  
    if (fullName.length < 8) {
      document.getElementById('fullNameError').textContent = 'Họ tên phải lớn hơn 8 ký tự';
      valid = false;
    }
  
    if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Email không đúng định dạng';
      valid = false;
    }
  
    if (!isVietnamesePhoneNumber(phone)) {
      document.getElementById('phoneError').textContent = 'Số điện thoại không đúng định dạng';
      valid = false;
    }
  
    if (password.length === 0) {
      document.getElementById('passwordError').textContent = 'Mật khẩu không được để trống';
      valid = false;
    }
  
    if (confirmPassword !== password) {
      document.getElementById('confirmPasswordError').textContent = 'Mật khẩu nhập lại không khớp';
      valid = false;
    }
  
    if (valid) {
      alert('Đăng ký thành công!');
    }
  }
  
  function clearForm() {
    document.getElementById('registrationForm').reset();
    clearErrors();
  }
  