import store from '@/store'
 
export default ({ to, from, redirect }) => {
  if (!store.getters['usuario/estaAutenticado']) {
    console.log('nderakoreeeee')
    redirect('/')
  }
}