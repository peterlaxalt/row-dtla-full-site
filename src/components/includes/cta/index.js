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
    width: '50%',
  },
};

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 8em;
  h3 {
    font-size: 55px;
    line-height: 60px;
    margin: 0;
  }
  p {
    margin-bottom: 2em;
  }
`;

const CloseButton = styled.button`
  background-color: #000;
  width: fit-content;
  position: absolute;
  top: 24px;
  right: 24px;
  svg {
    height: 24px;
    width: 24px;
  }
`;

const CTA = () => {
  const context = useContext(Context);
  const { CTAActive, closeCTA } = context;
  return (
    <Modal isOpen={CTAActive} style={ModalStyles}>
      <CloseButton onClick={closeCTA}>
        <svg
          viewBox="0 0 18 18"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
        >
          <title>Close Icon</title>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-974.000000, -32.000000)" fill="#FFFFFF">
              <g transform="translate(974.000000, 32.000000)">
                <path d="M7.94117647,9 L1.64313008e-13,1.05882353 L1.05882353,-1.49880108e-14 L9,7.94117647 L16.9411765,1.0658141e-14 L18,1.05882353 L10.0588235,9 L18,16.9411765 L16.9411765,18 L9,10.0588235 L1.05882353,18 L1.90070182e-13,16.9411765 L7.94117647,9 Z" />
              </g>
            </g>
          </g>
        </svg>
      </CloseButton>
      <ModalInner>
        <h3>
          Subscribe to the
          <br />
          ROW DTLA
          <br />
          Newsletter.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <SubscribeForm />
      </ModalInner>
    </Modal>
  );
};

export default CTA;
