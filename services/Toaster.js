import { toast } from 'react-toastify';


const toaster = {
	// send params to common React Toast
	// @ author: Susanta Chakraborty
	// @ params: alart obj with type , messageString
	toastify(alert) {
		if (alert.type === 'success') {
			toast.success(alert.messageString);
		}
		else if (alert.type === 'danger') {
			toast.error(alert.messageString);
		}
		else if (alert.type === 'info') {
			toast.info(alert.messageString);
		}
		else if (alert.type === 'warning') {
			toast.warn(alert.messageString);
		}
	}
}
export default toaster;