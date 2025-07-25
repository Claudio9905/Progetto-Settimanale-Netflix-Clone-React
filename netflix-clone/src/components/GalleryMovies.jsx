import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class GalleryMovies extends Component {
  state = {
    films: [],
  };

  getMovies = () => {
    fetch(this.props.endpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel caricamento dei film");
        }
      })
      .then((movies) => {
        console.log(movies);
        this.setState({ films: movies.Search });
      })

      .catch((err) => {
        console.log("ERRORE: ", err);
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row className=" flex-nowrap overflow-x-auto g-3 p-3">
            {this.state.films.map((movies) => {
              return (
                <Col
                  className="d-flex justify-content-center "
                  xs="12"
                  md="6"
                  lg="4"
                  key={movies.imdbID}
                >
                  <div
                    className=" d-flex flex-column align-items-center p-2"
                    id="box-film"
                  >
                    <div className=" d-flex justify-content-center h-75 mt-3">
                      <img
                        src={movies.Poster}
                        alt="Poster del film"
                        className="img-fluid h-100 rounded-5"
                        id="img-poster"
                      />
                    </div>
                    <div className=" mt-3 d-flex flex-column align-items-center ">
                      <h4 className="text-light text-center ">
                        {movies.Title}
                      </h4>
                      <h4 className=" text-light">{movies.Year}</h4>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default GalleryMovies;
