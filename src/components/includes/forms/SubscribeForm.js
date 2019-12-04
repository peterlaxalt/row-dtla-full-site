/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Context from '~/context/Context';

import { mediaMin } from '~/styles/mediaQueries';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  .input-row {
    display: flex;
    width: 100%;
    transition: all 300ms ease;
    opacity: ${props => (!props.formSubmitted ? 1 : 0)};
    visibility: ${props => (!props.formSubmitted ? 'visible' : 'hidden')};
    label {
      letter-spacing: 1px;
      display: flex;
      flex-direction: column;
      width: 60%;
      span {
        height: 30%;
      }
      input {
        color: #fff;
        background-color: rgba(255, 255, 255, 0.1);
        border: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.7);
        font-size: 1.5em;
        padding: 0.5em;
        height: 48px;
        border-radius: 0;
        margin: 0;
      }
    }

    button {
      color: #fff;
      background-color: #000;
      border: 1px solid rgba(255, 255, 255, 0.7);
      margin-left: 1em;
      font-size: 1em;
      width: 40%;
      cursor: ${props => (props.disableSubmit ? 'initial' : 'pointer')};
      opacity: ${props => (props.disableSubmit ? 0.4 : 1)};
      height: 48px;
      margin-top: auto;
      ${mediaMin('tabletLandscape')} {
        width: 25%;
      }

      ${props =>
        !props.disableSubmit &&
        css`
          &:hover {
            background-color: #fff;
            color: #000;
          }
        `}}
    }

    .thank-you-row {
      position: absolute;
      left: 0;
      bottom: 50%;
      transform: translateY(50%);
      opacity: ${props => (props.formSubmitted ? 1 : 0)};
      visibility: ${props => (props.formSubmitted ? 'visible' : 'hidden')};
      transition: all 300ms ease;
      p {
        font-size: 2rem;
        letter-spacing: 1px;
      }
      h2 {
        font-size: 2rem;
        letter-spacing: 0.5px;
      }
    }
  }
`;

const SubscribeForm = () => {
  const context = useContext(Context);
  const { CTAActive, closeCTA } = context;

  const [email, setEmail] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInput = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Disable submit button on sign up
    setDisableSubmit(true);

    fetch('https://form.api.dbxd.com/add-mailchimp-subscriber?projectname=rowdtla', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email
      })
    })
      .then(response => response.json())
      .then(() => {
        setFormSubmitted(true);

        if (CTAActive) {
          setTimeout(() => {
            closeCTA();
          }, 2000);
        }

        setEmail('');

        setTimeout(() => {
          setFormSubmitted(false);
          setDisableSubmit(false);
        }, 10000);
      })
      .catch(error => {
        console.log('error posting email address', error);
        setDisableSubmit(false);
      });
  };

  return (
    <>
      <Form formSubmitted={formSubmitted} disableSubmit={disableSubmit} onSubmit={handleSubmit}>
        <div className="input-row">
          <label htmlFor="email">
            <span>EMAIL ADDRESS</span>
            <input type="email" name="email" onChange={handleInput} required />
          </label>
          <button type="submit" disabled={disableSubmit}>
            SIGN&nbsp;UP
          </button>
        </div>
        <div className="thank-you-row">
          <h2>You&apos;re on the list!</h2>
        </div>
      </Form>
    </>
  );
};

export default SubscribeForm;
