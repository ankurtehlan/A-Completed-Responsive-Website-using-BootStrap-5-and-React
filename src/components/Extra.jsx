import React from "react"

function Extra(props) {
    return (
        <>
            <div class="mb-3">
                <label
                    for="exampleFormControlInput1"
                    class="form-label">{props.placeholderLastName}</label>
                <input type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="lastName"

                    placeholder=" Last Name "
                />
            </div>
            {/* <div class="mb-3">
                <label
                    for="exampleFormControlInput1"
                    class="form-label">Email address</label>
                <input type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder=" Email " />
            </div>
            <div class="mb-3">
                <label
                    for="exampleFormControlInput1"
                    class="form-label">Phone No.</label>
                <input type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder=" Phone No. " />
            </div>
            <div class="mb-3" >
                <label for="exampleFormControlTextarea1" class="form-label">  Message </label>
                <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="textContent"
                    value={data.textContent}
                    onChange={inputEvent}>
                </textarea>
            </div> */}
        </>
    );
}

export default Extra;
