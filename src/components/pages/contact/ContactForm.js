import React from 'react';
import styled from '@emotion/styled';

import { mediaMin } from '~/styles/mediaQueries';
import DropdownArrow from '~/assets/images/icons/dropdown.svg';

import formLogic from './formLogic';

const FormStyled = styled.form`
  width: 100%;
`;

const FormRow = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  ${mediaMin('tabletLandscape')} {
    flex-direction: row;
  }

  &.last-row {
    margin-bottom: 0;
    ${mediaMin('tabletLandscape')} {
      margin-bottom: 40px;
    }
  }

  label {
    &.half {
      width: 100%;
      &:nth-of-type(1) {
        margin-bottom: 40px;
        ${mediaMin('tabletLandscape')} {
          padding-right: 1em;
          margin-bottom: 0;
        }
      }
      &:nth-of-type(2) {
        ${mediaMin('tabletLandscape')} {
          padding-left: 1em;
        }
      }
      ${mediaMin('tabletLandscape')} {
        width: 50%;
      }
    }

    &.full {
      width: 100%;
    }

    span {
      display: block;
      text-transform: uppercase;
      margin: 0.5em 0;
      font-size: 0.8rem;
      font-weight: 300;
      letter-spacing: 1px;
      ${mediaMin('tabletLandscape')} {
        font-size: 1rem;
      }
    }

    input {
      width: 100%;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      padding-bottom: 5px;
      padding-left: 5px;
      height: 50px;
      font-size: 1.4rem;
      color: #fff;
      caret-color: #fff;
      text-transform: uppercase;
    }

    .select-wrapper {
      position: relative;
      color: red;
      .dropdown-arrow {
        position: absolute;
        right: 0;
        top: 20px;
        right: 20px;
      }
      select {
        width: 100%;
        height: 50px;
        font-size: 1rem;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.7);
        text-transform: uppercase;
        color: #fff;
        appearance: none;
        padding-left: 10px;
        option {
          font-size: 1.4rem;
          color: #000;
        }
      }
    }

    textarea {
      width: 100%;
      resize: none;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      font-size: 1.4rem;
      color: #fff;
      caret-color: #fff;
      padding: 10px;
      ${mediaMin('tabletLandscape')} {
        padding: 20px;
      }
    }
  }

  &.submit-row {
    justify-content: space-between;
    align-items: flex-start;
    span {
      display: block;
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 1px;
      margin: 1em 0;
      ${mediaMin('tabletLandscape')} {
        margin: 0;
      }
    }
    button {
      background: none;
      border: 1px solid #fff;
      color: #fff;
      cursor: pointer;
      transition: all 300ms ease;
      font-size: 2rem;
      padding: 0.5em 0;
      width: 100%;
      text-transform: uppercase;
      font-weight: 300;
      margin: 1em 0;
      letter-spacing: 2px;
      ${mediaMin('tabletLandscape')} {
        width: 45%;
        margin: 0;
        &:hover {
          background: #fff;
          color: #000;
        }
      }
    }
  }
`;

const ContactForm = () => {
  const { inputs, handleChange, handleSubmit, submitted } = formLogic();

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormRow>
        <label className="half">
          <span>First Name</span>
          <input type="text" name="firstName" onChange={handleChange} value={inputs.firstName} />
        </label>
        <label className="half">
          <span>Last Name</span>
          <input type="text" name="lastName" onChange={handleChange} value={inputs.lastName} />
        </label>
      </FormRow>
      <FormRow>
        <label className="full">
          <span>* Email</span>
          <input type="email" name="email" onChange={handleChange} value={inputs.email} required />
        </label>
      </FormRow>
      <FormRow>
        <label className="full">
          <span>Phone</span>
          <input type="tel" name="phone" onChange={handleChange} value={inputs.phone} />
        </label>
      </FormRow>
      <FormRow>
        <label className="full">
          <span>* Please select the nature of your inquiry</span>
          <div className="select-wrapper">
            <img className="dropdown-arrow" src={DropdownArrow} alt="dropdown arrow" />
            <select name="inquiryType" onBlur={handleChange} defaultValue={'DEFAULT'} required>
              <option value={'DEFAULT'} disabled hidden>
                &nbsp;&nbsp;--
              </option>
              <option value="general">General</option>
              <option value="retail">Retail Leasing</option>
              <option value="creative">Creative Office Leasing</option>
              <option value="event">Event Inquiry</option>
              <option value="press">Press Inquiry</option>
            </select>
          </div>
        </label>
      </FormRow>
      <FormRow className="last-row">
        <label className="full">
          <span>Let us know how we can help</span>
          <textarea rows="6" type="text" name="canWeHelp" onChange={handleChange} value={inputs.canWeHelp} />
        </label>
      </FormRow>
      <FormRow className="submit-row">
        <span className="no-margin">* required fields</span>
        <button type="submit" value="Submit" className={submitted ? 'active' : ''}>
          <span>Submit</span>
        </button>
      </FormRow>
    </FormStyled>
  );
};

export default ContactForm;
