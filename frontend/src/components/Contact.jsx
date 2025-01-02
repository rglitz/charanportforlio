import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    const handleSubmit = () => {
        // Handle form submission logic here
    };
    return (
        <>
            <div className="mb-2">
                <div className="mb-5">
                <h2 className="m-0">Contact Me</h2>
                <h6 className="m-0">Feel Free to Contact me at</h6>
                </div>
                <div className="row d-flex">
                <div className="fix-a col-md-6 pe-1">
                    <a
                    className="text-white cursor-pointer text-decoration-none"
                    href="tel:+919381732302"
                    >
                    <div className="p-2 border border-2 border-white rounded">
                        <h5>Phone No</h5>
                        <h6>
                        <FontAwesomeIcon icon={faPhone} />  +91 93817 32302
                        </h6>
                    </div>
                    </a>
                </div>
                <div className="fix-b col-md-6 ps-1">
                    <a
                    className="text-white cursor-pointer text-decoration-none"
                    href="mailto:hello@yourscharangoud.in"
                    >
                    <div className="p-2 border border-2 border-white rounded-3">
                        <h5>Email Id</h5>
                        <h6><FontAwesomeIcon icon={faEnvelope} /> hello@yourscharangoud.in</h6>
                    </div>
                    </a>
                </div>
                </div>
            </div>
            <div>
                <div className="p-2 border border-2 border-white rounded-3">
                <h4>Get in touch</h4>
                <div id="thankYouMessage" style={{ display: "none" }}>
                    Thanks for reaching me out! I will get back to you soon.
                </div>
                <form className="p-1" id="myForm" method="post">
                    <div className="form-row">
                    <div className="form-group col-md-12">
                        <input
                        type="hidden"
                        name="contact"
                        />
                        <input
                        type="text"
                        className="form-control text-white no-bg"
                        name="fullname"
                        id="fullname"
                        placeholder="Full Name"
                        required=""
                        />
                        <span id="fullnameError"></span>
                    </div>
                    <div className="form-group col-md-12 d-flex">
                        <div className="col-md-6 pe-1">
                        <input
                            type="tel"
                            className="form-control no-bg"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder="Phone Number"
                            maxLength="10"
                            pattern="[0-9]{10}"
                            required=""
                        />
                        <span id="phonenumberError"></span>
                        </div>
                        <div className="col-md-6 ps-1">
                        <input
                            type="email"
                            className="form-control no-bg"
                            name="email"
                            id="email"
                            placeholder="Email Id"
                            required=""
                        />
                        <span id="emailError"></span>
                        </div>
                    </div>
                    <div className="form-group col-md-12">
                        <textarea
                        className="form-control no-bg"
                        name="message"
                        id="message"
                        placeholder="Enter Your Message"
                        rows="3"
                        required=""
                        ></textarea>
                        <span id="messageError"></span>
                    </div>
                    </div>
                    <button
                    type="button"
                    onClick={handleSubmit}
                    className="pjbtn ps-0 pe-3 py-2 mt-3"
                    id="submitButton"
                    >
                    Submit <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </form>
                </div>
            </div>
        </>
    )
}

export default Contact
