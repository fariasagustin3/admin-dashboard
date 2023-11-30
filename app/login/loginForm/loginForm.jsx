"use client"
import { authenticate } from '@/app/lib/actions';
import styles from '@/app/ui/login/loginForm/loginForm.module.css';
import { useFormState } from 'react-dom'

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined)

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" name="username" placeholder='username' />
      <input type="password" name="password" placeholder='password' />
      <button>Login</button>
      <p className={styles.error}>{state && state}</p>
    </form>
  );
}

export default LoginForm;
