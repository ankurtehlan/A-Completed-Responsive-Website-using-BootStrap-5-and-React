import React, { useState } from "react";



function Contact() {
    const [data, setdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setdata((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });

    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My Name is  ${data.firstName}.My Last Name is  ${data.lastName}.My Email is  ${data.email}.My Phone  no. is  ${data.phone}. my msg  ${data.textContent}.`
        );
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact US
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">First Name</label>
                                <input type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="firstName"
                                    value={data.firstName}
                                    onChange={inputEvent}
                                    placeholder=" First Name"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Last Name</label>
                                <input type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="lastName"
                                    value={data.lastName}
                                    onChange={inputEvent}
                                    placeholder=" Last Name"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Email</label>
                                <input type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder=" Email "
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Phone</label>
                                <input type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputEvent}
                                    placeholder=" Phone"
                                />
                            </div>
                            <div class="mb-3" >
                                <label for="exampleFormControlTextarea1" class="form-label">  Message </label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="message"
                                    value={data.message}
                                    onChange={inputEvent}
                                    placeholder="Message">
                                </textarea>
                            </div>


                            <div class="col-12">
                                <button type="submit" class="btn btn-outline-primary">Confirm identity</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </>

    );
}

export default Contact;
