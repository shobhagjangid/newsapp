import React from 'react';
import { Form, } from 'react-bootstrap';
import {CgSearch} from 'react-icons/cg';



export default function searchbar() {
    return (
        <div>
            <Form>
                <Form.Group className="custom-search-input" controlId="formBasicSearch">
                <Form.Control type="search" placeholder="Search" />
                   <button type="submit" className=" btn-search"><CgSearch/></button>
                </Form.Group>

            </Form>
        </div>
    )
}
