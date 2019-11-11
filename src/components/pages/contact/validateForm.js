const validateForm = (values, targetName) => {
  let errors = {};
  const { email, inquiryType } = values;

  const checkEmail = () => {
    if (!email) {
      errors.email = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = true;
    }
  };

  const checkInquiryType = () => {
    if (!inquiryType) {
      errors.inquiryType = true;
    }
  };

  if (!targetName) {
    checkEmail();
    checkInquiryType();
  }
  if (targetName === 'email') {
    checkEmail();
  }
  if (targetName === 'inquiryType') {
    checkInquiryType();
  }
  return errors;
};

export default validateForm;
