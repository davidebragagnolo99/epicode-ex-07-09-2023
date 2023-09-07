import { Component } from "react";
import { Card, CardImg, Col, Form, FormControl, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class AllTheBooks extends Component {
  state = {
    initialValue: null,
  };
  handleChange = (event) => {
    this.setState({ initialValue: event.target.value });
  };
  render() {
    return (
      <>
        <div className="bg-warning bg-opacity-25 p-5">
          <Form>
            <FormControl
              type="text"
              placeholder="Scegli una categoria tra fantasy, history, horror, romance, scifi"
              onChange={this.handleChange}
            />
          </Form>
        </div>
        {this.state.initialValue === "fantasy" && (
          <Row className="bg-warning bg-opacity-50 p-5">
            {fantasy.map((fantasybook) => (
              <Col key={`fantasy-book-${fantasybook.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                <Card>
                  <Card.Img
                    style={{ height: "350px", objectFit: "cover" }}
                    src={fantasybook.img}
                    className="card-img-top contain"
                  />
                  <Card.Body>
                    <Card.Title className="text-truncate">{fantasybook.title}</Card.Title>
                    <Card.Text>€ {fantasybook.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        {this.state.initialValue === "history" && (
          <Row className="bg-warning bg-opacity-50 p-5">
            {history.map((historybook) => (
              <Col key={`history-book-${historybook.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                <Card>
                  <Card.Img src={historybook.img} className="img-fluid contain" />
                  <Card.Body>
                    <Card.Title>{historybook.title}</Card.Title>
                    <Card.Text>€ {historybook.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        {this.state.initialValue === "horror" && (
          <Row className="bg-warning bg-opacity-50 p-5">
            {horror.map((horrorbook) => (
              <Col key={`horror-book-${horrorbook.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                <Card>
                  <Card.Img src={horrorbook.img} className="img-fluid contain" />
                  <Card.Body>
                    <Card.Title>{horrorbook.title}</Card.Title>
                    <Card.Text>€ {horrorbook.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        {this.state.initialValue === "romance" && (
          <Row className="bg-warning bg-opacity-50 p-5">
            {romance.map((romancebook) => (
              <Col key={`romance-book-${romancebook.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                <Card>
                  <Card.Img src={romancebook.img} className="img-fluid contain" />
                  <Card.Body>
                    <Card.Title>{romancebook.title}</Card.Title>
                    <Card.Text>€ {romancebook.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        {this.state.initialValue === "scifi" && (
          <Row className="bg-warning bg-opacity-50 p-5">
            {scifi.map((scifibook) => (
              <Col key={`scifi-book-${scifibook.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                <Card>
                  <Card.Img src={scifibook.img} className="img-fluid contain" />
                  <Card.Body>
                    <Card.Title>{scifibook.title}</Card.Title>
                    <Card.Text>€ {scifibook.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </>
    );
  }
}
export default AllTheBooks;
