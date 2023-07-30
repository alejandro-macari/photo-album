'use client';
import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  close: () => void;
  children: ReactNode;
}

const Modal = ({ close, children }: Props) => {
  const ref = useRef<HTMLElement | null>(null);
  const internalRef = useRef<any>(null);
  if (!ref.current) {
    ref.current = document.createElement('div');
  }

  useEffect(() => {
    const handleClick = (e: any) => {
      if (internalRef.current && !internalRef.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener('click', handleClick, true);

    const modalRoot = document.getElementById('modal') as HTMLElement;
    modalRoot?.appendChild(ref.current as HTMLElement);

    return () => {
      modalRoot.removeChild(ref.current as HTMLElement);
      document.removeEventListener('click', handleClick, true);
    };
  }, [close, internalRef]);

  return createPortal(
    <div data-testid="modal" ref={internalRef}>
      {children}
    </div>,
    ref.current,
  );
};

export default Modal;
