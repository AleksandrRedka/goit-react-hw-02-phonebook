import { toast } from 'react-toastify';

const toastShow = (text, typeToast) => {
  toast[typeToast](`${text}`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
  });
};

export default toastShow;
