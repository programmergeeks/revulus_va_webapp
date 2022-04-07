import {useState} from 'react'
import * as RB from 'react-bootstrap';
import * as RI from 'react-icons/ri';
import Sigin from './Sigin';

function SigninWithModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <li className='nav-item'>
                <a className='nav-link' style={{ fontSize: 20}} onClick={handleShow}><RI.RiUser3Fill /></a>
            </li>
            <RB.Modal show={show} onHide={handleClose}>
                <RB.ModalHeader closeButton>
                    <RB.ModalTitle>Modal heading</RB.ModalTitle>
                </RB.ModalHeader>
                <RB.ModalBody>
                    <Sigin />
                </RB.ModalBody>
                <RB.ModalFooter>
                    <RB.Button variant="secondary" onClick={handleClose}>
                        Close
                    </RB.Button>
                    <RB.Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </RB.Button>
                </RB.ModalFooter>
            </RB.Modal>
        </>
    )
}

export default SigninWithModal