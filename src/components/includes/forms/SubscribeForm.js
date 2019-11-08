import React, { useState } from 'react';
import styled from '@emotion/styled';

import { mediaMin } from '~/styles/mediaQueries';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
  .row {
    display: flex;
    width: 100%;
    input {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
      border: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      font-size: 1.5em;
      padding: 0.5em;
      width: 75%;
    }
    button {
      color: #fff;
      background-color: #000;
      border: 1px solid rgba(255, 255, 255, 0.7);
      margin-left: 1em;
      padding: 0.5em 1em;
      font-size: 1em;
      width: 40%;
      ${mediaMin('tabletLandscape')} {
        width: 25%;
      }
    }
  }
`;

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleInput = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const text = `Hi,\n Subscriber Details:\n\n
    //     \n\nEmail: ${email}
    //   `;

    // var emailData = {
    //   from: '"ROW DTLA" <no_reply_row_dtla@dbox.com>',
    //   to: `"ROW DTLA" <rowdtlaoffice@atlas-cap.com>`,
    //   subject: 'ROW DTLA - New Subscriber',
    //   text: text,
    // };

    // fetch('https://form.api.dbxd.com/post-ses-email', {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(emailData),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log('email sending successful ', result);
    //     setEmail('');
    //   })
    //   .catch(error => {
    //     /* eslint-disable no-console */
    //     console.log('error sending email ', error);
    //     /* eslint-enable no-console */
    //   });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="email">EMAIL ADDRESS</label>
      <div className="row">
        <input type="email" name="email" onChange={handleInput} />
        <button type="submit">SIGN UP</button>
      </div>
    </Form>
  );
};

export default SubscribeForm;
