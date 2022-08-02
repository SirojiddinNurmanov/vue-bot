import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Link from "next/dist/client/link";

function RegisterModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Saadia online market
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Xizmatdan foydalanish uchun iltimos{" "}
                    <Link href="/register">ro`yhatdan o`ting</Link>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Link href="/register">
                    <Button>Close</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
}

export default RegisterModal;
