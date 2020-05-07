import { useState, useEffect, useRef } from "react";

const useForm = (initialValues, validate, callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onBlur, setOnBlur] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialValues);
      setErrors({});
      setTouched({});
      setOnBlur(false);
      setIsSubmitting(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      console.log("submit call");
    }
  }, [errors, isSubmitting, callback]);

  const handleBlur = (event) => {
    const { target } = event;
    const { name } = target;
    console.log(name);
    setTouched((touched) => ({ ...touched, [name]: true }));
    if (validate) setErrors(validate(values));
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit triggered");
    if (event) event.preventDefault();
    if (validate) setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;
