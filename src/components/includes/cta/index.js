import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Modal from 'react-modal';

import Context from '~/config/Context';
import SubscribeForm from '~/components/includes/forms/SubscribeForm';

const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#000',
    color: '#fff',
    zIndex: '101',
    padding: '4em',
    width: 'auto',
  },
};

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const CTA = () => {
  const context = useContext(Context);
  const { CTAActive } = context;
  return (
    <Modal isOpen={CTAActive} style={ModalStyles}>
      <ModalInner>
        <h3>Subscribe to the ROW DTLA Newsletter.</h3>
        <SubscribeForm />
      </ModalInner>
    </Modal>
  );
};

export default CTA;
