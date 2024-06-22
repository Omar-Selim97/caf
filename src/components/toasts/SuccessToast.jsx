import Swal from 'sweetalert2/src/sweetalert2.js';

const SuccessToast = (message, navigate) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            navigate("home");
        }
    });
    Toast.fire({
        icon: "success",
        title: message
    });
};

export default SuccessToast;
