import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="Link" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-info-circle"
          viewBox="0 0 16 16"
          
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
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
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
            margin: "0px",
            direction: "rtl",
          }}
        >
          {" "}
          <p>מידע על חנויות המכבדות את הכרטיס "חסדי יום טוב"</p>
          <p>
            האתר הוקם לטובת הציבור ואין לאתר שום קשר לעמותה
            <br />
            המידע באתר נאסף מתוך מאמצים לוודא את אמיתותו ועדכניותו,
            <br />
            אך אין לנו אפשרות להבטיח שכל המידע מדויק או עדכני
            <br />
            באחריות המשתמשים לוודא את נכונות הפרטים על ידי כל חנות באופן ישיר.
          </p>
          <p>
            לצורך חיפוש חנויות יש צורך לסמן עיר או מספר ערים מבוקשות וקטגוריות שמעניינות אתכם
          </p>
            <p>
              בשימושך באתר, אתה מאשר שקראת והבנת את תנאי השימוש,
              <br />
              ושאין לאתר כל אחריות משפטית בנוגע למידע המוצג
            </p>
          <p>ניתן ליצור קשר במייל hyyg171@gmail.com</p>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Example;
