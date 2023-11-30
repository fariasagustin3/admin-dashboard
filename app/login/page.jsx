import styles from '@/app/ui/login/login.module.css';
import LoginForm from './loginForm/loginForm';

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}

export default Login;
