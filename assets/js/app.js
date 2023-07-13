const cl = console.log;

const loginform = document.getElementById('loginform');
const emailcontrol = document.getElementById('email');
const passwordcontrol = document.getElementById('password');

const data = {
    email: 'praju@gmail.com',
    password: 'praju1!'
}

const onLoginHandler = (eve) => {
    eve.preventDefault();
    const emailvalue = emailcontrol.value;
    const passvalue = passwordcontrol.value;


    if (emailvalue === data.email && passvalue === data.password) {
        // alert('Login successFully')

        Swal.fire({
            icon: 'success',
            title: 'Login successfully',
            timer : 4000
        })
    } else {
        // alert('Invalid username or password')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid username or password',
            footer: '<a href="">Forgot password</a>',
            timer: 4000
        })
        
    }

    eve.target.reset()

}


loginform.addEventListener('submit', onLoginHandler)