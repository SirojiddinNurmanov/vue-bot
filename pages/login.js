import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import InputMask from "react-input-mask";
import config from "../config/index.js";
import router from "next/router";
import authValidation from "../valadtions/auth.validation";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userPhoneNumber, setUserPhoneNumber] = useState();
    async function LoginPost() {
        const userPassword = document.getElementById("loginpassword")?.value;

        let inputData = {
            user_phone: userPhoneNumber.split(" ").join("").slice(1),
            user_password: userPassword,
        };
        const validData = authValidation.loginValidation(inputData);

        if (!validData.status) return alert(validData.message);

        async function request(url, method, body, headerData, formDataStatus) {
            try {
                const response = await fetch(url, {
                    method,
                    body: JSON.stringify(body),
                    headers: {
                        ...headerData,
                        "Content-Type": formDataStatus
                            ? "application/x-www-form-urlencoded"
                            : "application/json",
                    },
                });

                const data = await response.json();

                return data;
            } catch (err) {
                return err.message;
            }
        }

        const data = await request(
            config.BACK_END_URL + "/api/auth/login",
            "POST",
            inputData
        );

        if (data.status != 200) return alert(data.message);
        if (!alert("Success logged your account!"))
        console.log(data);
            localStorage.setItem("token", data.token);
        return router.push("/");
    }
    return (
        <Layout sticky textCenter footerBg container>
            <main>
                <PageTitle active="Login" pageHeading="Login" />
                <section className="login-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="basic-login">
                                    <form className="form" id="form">
                                        <h2>Login From Here</h2>
                                        <div className="form-control">
                                            <label htmlFor="pnumber">
                                                Phone Number
                                            </label>
                                            <InputMask
                                                mask="+99 8xx xxx xx xx"
                                                value={userPhoneNumber}
                                                maskChar="_"
                                                formatChars={{ x: "[0-9]" }}
                                                onChange={(e) =>
                                                    setUserPhoneNumber(
                                                        e.target.value
                                                    )
                                                }
                                            ></InputMask>
                                        </div>
                                        <div className="form-control">
                                            <label htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="loginpassword"
                                                placeholder="Enter password"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="btn theme-btn w-100"
                                            onClick={LoginPost}
                                        >
                                            Login Now
                                        </button>
                                        <div className="or-divide">
                                            <span>or</span>
                                        </div>
                                        <Link href="/register">
                                            <a className="btn theme-btn w-100">
                                                Register Now
                                            </a>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Login;
