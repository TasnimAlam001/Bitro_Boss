import { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {


    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Logged In',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error.message)
                alert(error.message);
            })
    }
    const handleValidateCaptcha = (e) => {
        const value = e.target.value;
        console.log(value);
        if (validateCaptcha(value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }






    return (
        <>
            <Helmet>
                <title>Bistro Boss | LogIn</title>
            </Helmet>
            <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-center text-3xl">LogIn</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>

                                <input onBlur={handleValidateCaptcha} type="text" placeholder="Type the text above" name='captcha' className="input input-bordered" />


                            </div>
                            {/* todo: make disabled */}
                            <div className="form-control mt-6">

                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p><small>New Here ? <Link to="/signUp">SignUp</Link></small></p>
                        </div>
                    </div>

                </div>
            </form>
        </>
    );
};

export default Login;