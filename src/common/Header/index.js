import React, { useCallback } from "react";
import { Container, Navbar, FormControl } from "react-bootstrap";
import { emitCustomEvent } from "react-custom-events";
import { debounce } from '../../lib/helper';

const Header = () => {
    const onHandleSearch = useCallback(
        (e) => emitCustomEvent("search", e?.target?.value),
        []
    );
    const handleSearchDebounce = debounce((e) => onHandleSearch(e));

    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand>News</Navbar.Brand>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-5"
                        aria-label="Search"
                        onChange={handleSearchDebounce}
                        maxLength={15}
                    />
                </Container>
            </Navbar>
        </Container>
    );
};
export default Header;
