import React from "react";
import { useState } from "react";
export default function Form() {
  const [message, setMessage] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [ph, setph] = useState("");

  // 👇️ called every time input's value changes
  const mailChange = (event) => {
    setMessage(event.target.value);
  };
  const fnameChange = (event) => {
    setfname(event.target.value);
  };
  const lnameChange = (event) => {
    setlname(event.target.value);
  };
  const phChange = (event) => {
    setph(event.target.value);
  };

  return (
    <div className="form-main-div">

    <div className="image-form">
        <img src="https://vamediabox.com/wp-content/uploads/2022/03/website-2.png" alt="" />
    </div>


      <div className="contact-form-ankit">
        {/* 
<style type="text/css">
	#mc_embed_signup{{background:'#fff ', clear:'left', font:'14px Helvetica,Arial,sans-serif',  width:'600px'}}
	
</style> */}
        <div id="mc_embed_signup">
          <form
            action="https://app.us11.list-manage.com/subscribe/post?u=798d89feb5f90fc583ad55501&amp;id=76b92a3be3&amp;f_id=000caae0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <h2>Contact me</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  value={message}
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  onChange={mailChange}
                  required
                />
                {/* <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span> */}
              </div>
              <div className="mc-field-group">
                <label for="mce-FNAME">
                  First Name <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  value={fname}
                  onChange={fnameChange}
                  name="FNAME"
                  className="required"
                  id="mce-FNAME"
                  required
                />
                {/* <span id="mce-FNAME-HELPERTEXT" className="helper_text"></span> */}
              </div>
              <div className="mc-field-group">
                <label for="mce-LNAME">Last Name </label>
                <input
                  type="text"
                  value={lname}
                  onChange={lnameChange}
                  name="LNAME"
                  className=""
                  id="mce-LNAME"
                />
                {/* <span id="mce-LNAME-HELPERTEXT" className="helper_text"></span> */}
              </div>
              <div className="mc-field-group size1of2">
                <label for="mce-PHONE">
                  Phone Number <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  name="PHONE"
                  className="required"
                  value={ph}
                  onChange={phChange}
                  id="mce-PHONE"
                  required
                />
                {/* <span id="mce-PHONE-HELPERTEXT" className="helper_text"></span> */}
              </div>
              <div hidden="true">
                <input type="hidden" name="tags" value="9321239" />
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "-5000px",
                  ariaHidden: "true",
                }}
              >
                <input
                  type="text"
                  name="b_798d89feb5f90fc583ad55501_76b92a3be3"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input
                    type="submit"
                    value="Contact"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"

                    style={{backgroundColor:'red',width: '6rem'}}
                  />
                 
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
