import Swal from 'sweetalert2';

export function successNotification(message: any) {
    Swal.fire({
        text: message,
        icon: 'success',
        background: '#d4edda',
        color: '#155724',
        confirmButtonColor: '#28a745',
        timer: 5000,
        timerProgressBar: true,
        position: 'top-end',
        toast: true
    });
}

export function errorNotification(message: any) {
    Swal.fire({
        text: message,
        icon: 'error',
        background: '#f8d7da',
        color: '#721c24',
        confirmButtonColor: '#dc3545',
        timer: 5000,
        timerProgressBar: true,
        position: 'top-end',
        toast: true
    });
}