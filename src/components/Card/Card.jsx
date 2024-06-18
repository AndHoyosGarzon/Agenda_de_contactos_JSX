import style from "./style.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Card({ name, location, phone, email, edit, clear }) {
  return (
    <div className={style.contentCard}>
      <div className={style.content_image}>
        <img
          className={style.image}
          src="../../../public/user.jpg"
          alt="user"
        />
      </div>
      <div className={style.info}>
        <p>{name}</p>
        <p>
          <span className="h6 text-secondary me-2">
            <FaLocationDot />
          </span>
          {location}
        </p>
        <p>
          <span className="h6 text-secondary me-2">
            <FaPhone />
          </span>
          {phone}
        </p>
        <p>
          <span className="h6 text-secondary me-2">
            <MdEmail />
          </span>
          {email}
        </p>
      </div>
      <div>
        <span className="h4 me-5">{edit}</span>
        <span className="h5 ">{clear}</span>
      </div>
    </div>
  );
}

export default Card;
