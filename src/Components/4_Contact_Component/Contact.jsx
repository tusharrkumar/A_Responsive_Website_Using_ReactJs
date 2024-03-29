import { useState } from "react"

function Contact() {

    const[data,setData]=useState({
        fullname : '',
        phone : '',
        email : '',
        msg : '',
    })

    const InputEvent = (event) => {
        const {name,value} = event.target;
        setData((preVal) => {
            return {
                ...preVal, [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.fullname}. My Mobile Number is ${data.mobile}. My Email Id is ${data.email}, Here is what I want to say ${data.msg}`)
        setData({
            fullname : '',
            phone : '',
            email : '',
            msg : '',
        })
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone No</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter Email"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-outline-success">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Contact
