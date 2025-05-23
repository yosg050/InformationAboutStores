import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsInfoCircle } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="Link" onClick={handleShow}>
      <BsFillInfoCircleFill />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-info-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg> */}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Modal.Title
            style={{
              direction: "rtl",
              width: "100%",
              textAlign: "center",
            }}
          >
            שימו לב!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            fontSize: "0.9rem",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // textAlign: "center",
            flexDirection: "column",
            margin: "0px",
            direction: "rtl",
            marginRight: '10px'
          }}
        >
          {" "}
          <p style={{ textAlign: "center" }}>
            שירות לאיתור חנויות המכבדות את הכרטיסים של חסדי יום טוב/חסדי יעקב
          </p>
          <li>המאגר הוקם לטובת הציבור ואין לנו שום קשר לעמותה</li>
          <li>
            המידע באתר נאסף מתוך מאמצים לוודא את אמיתותו ועדכניותו, אך אין לנו
            אפשרות להבטיח שכל המידע מדויק או עדכני,

            באחריות המשתמשים לוודא את נכונות הפרטים על ידי כל חנות באופן ישיר.
          </li>
          <li>
            בשימושך באתר, אתה מאשר שקראת והבנת את תנאי השימוש, ושאין לאתר כל
            אחריות בנוגע למידע המוצג
          </li>
          <li>
            לצורך חיפוש חנויות יש צורך לסמן עיר או מספר ערים מבוקשות וקטגוריות
            שמעניינות אתכם
          </li>
          <br />
          <p style={{ textAlign: "center" }}>מעודכן לערב פסח תשפ"ה / קיץ 2025</p>
          <p style={{ textAlign: "center" }}>ניתן ליצור קשר במייל hyyg171@gmail.com</p>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Example;
