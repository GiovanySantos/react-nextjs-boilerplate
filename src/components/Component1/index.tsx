import React from 'react';

interface IProps {
  ABeautifulProp: string;
}

const Component1: React.FC<IProps> = (props) => {
  const { ABeautifulProp } = props;
  return (
    <div>
      <p>Component1</p>
      <p>{ABeautifulProp}</p>
    </div>
  );
};
export default Component1;
