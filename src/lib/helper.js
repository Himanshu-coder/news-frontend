import { toast } from "react-toastify";
import { notificationCodes } from "./constants";

const debounce = (func, timeout = 800) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};
/**
 * It displays toaster on success or error case.
 *
 * @param {string} message
 * @param {string} status ,i.e, 'success' or 'failure'
 * @public
 */
const displayNotifications = (message, status) => {
    switch (status) {
        case notificationCodes.success:
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            break;
        case notificationCodes.error:
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            break;
        default:
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            break;
    }
};

export { debounce, displayNotifications };
