import React from "react";
import { Button, Modal, FormControl, Input } from "native-base";
import { useState } from "react";
import RoundedButton from "../../../shared/components/rounded-button";
import ISearchParams from "../interfaces/search-params";
import SearchForm from "./SearchForm";

interface ISearchModalProps {
    styles: {
        openBtn: any;
    };
    onSearch: (searchParams: ISearchParams) => void;
}

const SearchModal: React.FC<ISearchModalProps> = ({ styles, onSearch }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <RoundedButton
                onPress={() => setShowModal(true)}
                iconName="magnifier"
                size="sm"
                containerPadding="2.5"
                style={styles.openBtn}
            />
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} overlayVisible={true}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Search posts</Modal.Header>
                    <Modal.Body>
                        <SearchForm
                            onSearch={(searchParams) => {
                                onSearch(searchParams);
                                setShowModal(false);
                            }}
                        />
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </>
    );
};

export default SearchModal;
