import { useToast } from 'vue-toastification';
import { AxiosError } from 'axios';


export const handleError = (error) => {
  const toast = useToast();

  if (error instanceof AxiosError && error.response) {
    const statusCode = error.response.status;
    let msg = '';
    switch (statusCode) {
      case 401:
        msg = 'Login Failed';
      break;
    
      case 404:
        msg = 'Not found: The requested resource was not found';
      break;
    
      case 429:
        msg = 'Rate Limited: Too many requests, please try again later';
      break;
    
      case 500:
        msg = error.message;
      break;

      default:
        msg = error.message;
      break;
    }

    console.error(error)
    toast.error(msg);
  }
  else {
    console.error(error)
    toast.error(error.message);  
  }
}