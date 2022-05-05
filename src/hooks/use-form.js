import { useState } from "react";

const useForm = () => {
  const [value, setValue] = useState('');
  const onChange = ({ target }) => setValue(target.value);
  return {
    value,
    onChange,
  };
};

export default useForm