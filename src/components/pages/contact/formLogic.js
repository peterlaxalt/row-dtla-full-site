import { useState } from 'react';

const formLogic = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    inquryType: '',
    canWeHelp: '',
  });
  const [submitted, toggleFormSubmitted] = useState(false);

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();

      const { email, firstName, lastName, phone, inquiryType, canWeHelp } = inputs;

      const text = `Hi,\n\nRegistrant Details:\n\n
        \n\nName: ${firstName} ${lastName}
        \n\nEmail: ${email}
        \n\nPhone: ${phone}
        \n\nNature of Inquiry: ${inquiryType}
        \n\nHow can we help: ${canWeHelp}
      `;

      const emailAddresses = {
        general: 'info@rowdtla.com',
        retail: 'info@runyongroup.com',
        creative: 'jeff.pion@cbre.com',
        event: 'events@rowdtla.com',
        press: 'rowdtla@wagstaffworldwide.com',
      };

      const emailRecipient = emailAddresses[inquiryType];
      console.log(emailRecipient);

      // General
      // INFO@ROWDTLA.COM

      // Retail Leasing
      // INFO@RUNYONGROUP.COM

      // Creative Office Leasing (which one for dropdown?)
      // JEFF.PION@CBRE.COM
      // MICHELLE.ESQUIVEL@CBRE.COM
      // CHRIS.PENROSE@CBRE.COM

      // Venue Leasing
      // EVENTS@ROWDTLA.COM

      // For PR or media inquiries, please contact:
      // ROWDTLA@WAGSTAFFWORLDWIDE.COM

      // var emailData = {
      //   from: '"ROW DTLA" <no_reply_row_dtla@dbox.com>',
      //   // to: `"ROW DTLA" <rowdtlaoffice@atlas-cap.com>`,
      //   to: `"Joel Hoelting" <joel.hoelting@dbox.com>`,
      //   subject: 'ROW DTLA - You have received an inquiry',
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
      //     /* eslint-disable no-console */
      //     console.log('email sending successful ', result);
      //     /* eslint-enable no-console */

      //     toggleFormSubmitted(true);
      //   })
      //   .catch(error => {
      //     /* eslint-disable no-console */
      //     console.log('error sending email ', error);
      //     /* eslint-enable no-console */
      //   });
    }
  };

  const handleChange = event => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  return {
    handleSubmit,
    handleChange,
    inputs,
    submitted,
  };
};

export default formLogic;
