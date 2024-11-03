import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ResultsPage({ results }) {
  const navigate = useNavigate();

  const returnSearch = () => {
    navigate("/");
  };

  return (
    <div style={{  display: "flex", 
      flexDirection: "column", 
      alignItems: 'center',}}>

    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      height: "90vh",
      overflow: "hidden",
      width: '90%',
      maxWidth: '700px',
    }}>
      <h2 style={{ textAlign: "center", padding: "20px 0" }}>
        תוצאות חיפוש
      </h2>
      <div style={{ 
        flex: 1,
        overflowY: "auto",
        padding: "0 20px"
      }}>
        <Container fluid>
          {results.length === 0 ? (
            <div style={{ textAlign: "center", fontSize: "1.2rem", marginTop: "20px" }}>
              אין חנויות המתאימות לחיפוש
            </div>
          ) : (
            <Row>
              {results.map((result, index) => (
                <Col key={index} xs={12} className="mb-3">
                  <Card>
                    <Card.Body>
                      <Card.Title style={{ 
                        textAlign: "center", 
                        fontWeight: "bold",
                        wordBreak: "break-word"
                      }}>
                        {result["store name"]}
                      </Card.Title>
                      <Card.Text style={{ wordBreak: "break-word" }}>
                        <strong>עיר:</strong> {result.city}
                        <br />
                        <strong>כתובת:</strong> {result.address}
                        <br />
                        <strong>קטגוריות:</strong> {result.category.join(", ")}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </div>
      <div style={{
        padding: "20px",
        borderTop: "1px solid #ddd"
      }}>
        <Button
          onClick={returnSearch}
          variant="secondary"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "300px",
            margin: "0 auto"
          }}
          >
          חזור לחיפוש
        </Button>
      </div>
    </div>
          </div>
  );
}

export default ResultsPage;