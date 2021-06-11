import { Container, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./common/ErrorFallback";
import Header from "./common/Header";
import LatestNews from "./components/LatestNews";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
    toast.configure({
        autoClose: 1500,
        draggable: false,
        hideProgressBar: false,
        pauseOnHover: false,
    });
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <ToastContainer />
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={1} />
                        <Col sm={10}>
                            <LatestNews />
                        </Col>
                        <Col sm={1} />
                    </Row>
                </Container>
            </ErrorBoundary>
        </>
    );
}

export default App;
