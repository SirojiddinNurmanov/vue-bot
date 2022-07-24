import InputGroup from "../src/components/form/InputGroup";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import InputMask from "react-input-mask";
import { useState } from "react";
import router from "next/router";
import config from "../config/index.js";
import authValidation from "../valadtions/auth.validation";

const Register = () => {
    const [value, setValue] = useState();
    async function RegisterPost() {
        const user_first_name = document.getElementById("fname")?.value;
        const user_last_name = document.getElementById("lname")?.value;
        const user_password_first = document.getElementById("password")?.value;
        const user_password_second =
            document.getElementById("password2")?.value;

        if (user_password_first != user_password_second)
            return alert("Repeat passowrd not match!");

        let inputData = {
            user_first_name,
            user_last_name,
            user_phone: value.split(" ").join("").slice(1),
            user_password: user_password_first,
        };

        const validData = authValidation.registerValidation(inputData);

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
            config.BACK_END_URL + "/api/auth/register",
            "POST",
            inputData
        );

        if (data.status != 200) return alert(data.message);
        if (!alert("Success create your accaount!, \nPlease next step login!"))
            return router.push("/login");
    }
    return (
        <Layout sticky container textCenter footerBg>
            <main>
                <PageTitle active="register" pageHeading="Register" />
                <div className="container s-register">
                    <form className="form" id="form">
                        <h2>Register with Us</h2>
                        <div className="form-control">
                            <label htmlFor="username">Firstname</label>
                            <input
                                type="username"
                                id="fname"
                                placeholder="Enter username"
                            />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="username">Lastname</label>
                            <input
                                type="username"
                                id="lname"
                                placeholder="Enter username"
                            />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="pnumber">Phone Number</label>
                            <InputMask
                                mask="+99 8xx xxx xx xx"
                                value={value}
                                maskChar="_"
                                formatChars={{ x: "[0-9]" }}
                                onChange={(e) => setValue(e.target.value)}
                            ></InputMask>
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter password"
                            />
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="password2">Confirm Password</label>
                            <input
                                type="password"
                                id="password2"
                                placeholder="Enter password again"
                            />
                            <small>Error message</small>
                        </div>
                        <button type="button" onClick={RegisterPost}>
                            Submit
                        </button>
                    </form>
                </div>
            </main>
        </Layout>
    );
};

export default Register;
