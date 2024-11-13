import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import ContactUsInformation from "../../components/Utils/ContactUsInformation";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp, BsTelegram, BsSnapchat } from "react-icons/bs";
import TranslateArray from "../../hooks/useTranslatearray";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Spinner } from "reactstrap";
import { useSendMessage } from "../../api/website";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRef } from "react";
import {AiFillLinkedin}from 'react-icons/ai'
import UnderConst from "../Underconst/UnderConst";


const validationSchema = Yup.object().shape({
  name: Yup.string()
  .required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
const ContactUs = ({ socialmedia, phone, email, location }) => {
  const {mutate  , isSuccess , isLoading} = useSendMessage()
  const lang = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();
  let is_have_facebook = socialmedia.find((social) => {
    return social.icon == "Facebook";
  });
  let is_have_instagram = socialmedia.find((social) => {
    return social.icon == "Instgram";
  });
  let is_have_twitter = socialmedia.find((social) => {
    return social.icon == "Twitter";
  });
  let is_have_whatsapp = socialmedia.find((social) => {
    return social.icon == "Whatsapp";
  });
  let is_have_telegrame = socialmedia.find((social) => {
    return social.icon == "Telegram";
  });
  let is_have_snapchat = socialmedia.find((social) => {
    return social.icon == "Snapchat";
  });
  let is_have_linkedin = socialmedia.find((social) => {
    return social.icon == "LinkedIn";
  });
  const ref = useRef()

  const handelSubmit = (values) => {
    values['content'] = values['message']
    let ValueContainer = {...values}
    mutate(ValueContainer)
    values['name'] =""
    values['email'] =""
    values['subject'] =""
    ref.current.value= "" 
  };
  return(
    <div className="ContactUs">
        <div className="ContactUs-container2" id="contact_us">
        <div className="container">
        <main className="row">
             {/* *******   Left Section (Column) Starts   *******  */}
            <section className="col left First_Sec">
              {/*  *******   Title Starts   *******  */}
              <div className="contactTitle">
                <h2>{t("get_in_touch")}</h2>
                <p>
                  {t(
                    "Please contact us if you would like any further information."
                  )}
                </p>
              </div>
              {/*  *******   Title Ends   *******  */}
              {/*  *******   Contact Info Starts   *******  */}
              <div className="contactInfo">
                <div className="iconGroup">
                  <motion.div className="icon">
                    <AiOutlinePhone size={30} className="mt-2 mx-[7px]" />
                  </motion.div>
                  <div className="details">
                    <span>{t("phone")}</span>
                    <span>
                      {TranslateArray(phone?.translations, lang, "value")}
                    </span>
                  </div>
                </div>
                <div className="iconGroup">
                  <div className="icon">
                    <AiOutlineMail size={30} className="mt-2 mx-[7px]" />
                  </div>
                  <div className="details width-location">
                    <span>{t("email")}</span>
                    <span>
                      {TranslateArray(email?.translations, lang, "value")}
                    </span>
                  </div>
                </div>
                <div className="iconGroup">
                  <div className="icon">
                    <CiLocationOn size={30} className="mt-2 mx-[7px]"/>
                  </div>
                  <div className="details">
                    <span>{t("location")}</span>
                    <span className="width-location">
                      
                      <a target="blank" href= {TranslateArray(location?.translations, "en", "value")}>
                      {TranslateArray(location?.translations, "en", "value")}
                      </a>
                     
                    </span>
                  </div>
                </div>
              </div>
              {/*  *******   Contact Info Ends   *******  */}
              {/*  *******   Social Media Starts   *******  */}
              <div className="socialMedia">
                {is_have_facebook && (
                  <a
                    href={is_have_facebook?.link}
                    target="blank"
                    className="flex justify-center items-center animate-bounce m-2"
                  >
                    <AiFillFacebook size={30} className="" />
                  </a>
                )}
                {is_have_instagram && (
                  <a
                    href={is_have_instagram?.link}
                    target="blank"
                    className="flex justify-center items-center animate-bounce m-2"
                  >
                    <BsInstagram size={30} className="" />
                  </a>
                )}
                {is_have_twitter && (
                  <a
                    href={is_have_twitter?.link}
                    target="blank"
                    className="flex justify-center items-center animate-bounce m-2"
                  >
                    <AiFillTwitterCircle size={30} className="" />
                  </a>
                )}

                {is_have_whatsapp && (
                  <a
                    href={is_have_whatsapp?.link}
                    target="blank"
                    className="flex justify-center items-center animate-bounce m-2"
                  >
                    <BsWhatsapp size={30} className="" />
                  </a>
                )}
                 {is_have_telegrame && (
                  <a
                  href={is_have_telegrame?.link}
                  target="blank"
                  className="flex justify-center items-center animate-bounce m-2"
                >
                  <BsTelegram size={30} className="" />
                  
                </a>
                )}
                 {is_have_snapchat && (
                   <a
                   href={is_have_snapchat?.link}
                   target="blank"
                   className="flex justify-center items-center animate-bounce m-2"
                 >
                   <BsSnapchat size={30} className="" />
                 </a>
                )}
                 {is_have_linkedin && (
                  <a
                  href={is_have_linkedin?.link}
                  target="blank"
                  className="flex justify-center items-center animate-bounce m-2"
                >
                  <AiFillLinkedin size={30} className="" />
                </a>
                )}

                
                  
                 
              </div>
              {/*  *******   Social Media Ends   *******  */}
            </section>
            {/*  *******   Left Section (Column) Ends   *******  */}
            {/*  *******   Right Section (Column) Starts   *******  */}
            <section className="col right">
              {/*  *******   Form Starts   *******  */}
              <Formik
                initialValues={{
                  // console.log(name);
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                onSubmit={handelSubmit}
                validationSchema={validationSchema}
              >
                {({ errors, setFieldValue }) => (
                  <Form className="messageForm">
                    <div className="inputGroup halfWidth">
                      <Field type="text" name="name" required="required" />
                      {/* <ErrorMessage name="name" /> */}
                     <label>{t("your_name")}</label>
                    </div>
                    <div className="inputGroup halfWidth">
                      <Field name="email" required="required" as={"input"} />
                      {/* <ErrorMessage name="email" /> */}
                      <label>{t("email")}</label>
                    </div>
                    <div className="inputGroup fullWidth">
                      <Field type="text" name="subject" required="required" />
                      {/* <ErrorMessage name="subject" /> */}
                      <label>{t("subject")}</label>
                    </div>
                    <div className="inputGroup fullWidth">
                      <textarea
                        ref={ref}
                        required="required"
                        defaultValue={""}
                        onChange={(e) =>
                          setFieldValue("message", e.target.value)
                        }
                      />
                      {/* <ErrorMessage name="message" /> */}
                      <label>{t("say_something")}</label>
                    </div>
                    <div className="inputGroup fullWidth">
                      {isLoading  ? <Spinner /> :<button>{t("send_message")}</button>}
                    </div>
                  </Form>
                )}
              </Formik>

              {/*  *******   Form Ends   *******  */}
            </section>
            {/*  *******   Right Section (Column) Ends   *******  */}
          </main>
        </div>
      </div>
     </div>


   );
};

export default ContactUs;
