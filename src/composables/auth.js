import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification';
import { handleError } from '../Utils';


export function useAuth() {
  const store = useStore();
  const router = useRouter();

  const user = computed(() => {
    return store.getters['auth/user'];
  });     
  const token = computed(() => {
    return store.getters['auth/token'];
  });

  const error = ref('');

  const login = async (data) => {
    try {
      await store.dispatch('auth/login', data);
      router.push('/dashboard');
    } 
    catch (e) {
      error.value = e.message;
      handleError(e);
    }
  }

  const logout = async (e) => {
    e.preventDefault();
    
    await store.dispatch('auth/logout');
  
    router.push('/login');
  }

  onMounted(() => {
    if (user && token) {
      router.push('/dashboard');
    }
  });

  return {
    error,
    user,
    token,
    login,
    logout
  }
}