import * as React from 'react';
import { useFontSize } from './hooks';
import styles from './index.module.css';

export interface ButtonViewProps {
  size?: 'large' | 'default';
}

const ButtonView: React.FC<ButtonViewProps> = function(props) {
  const fontSize = useFontSize(props.size);

  return (
    <button className={styles['button']} style={{ fontSize }}>
      {props.children}
    </button>
  );
};

ButtonView.defaultProps = {
  size: 'default',
};

export default ButtonView;
