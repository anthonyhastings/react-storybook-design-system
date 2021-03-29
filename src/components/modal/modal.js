import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import { typeScale } from '../../utils/typography';
import { PrimaryButton } from '../button';
import { IconClose } from '../icons';
import signUpIllustration from '../../assets/images/sign_up.svg';

const ModalWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.get('formElementBackground')};
  box-shadow: 0 0.5rem 1.6rem 0 rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.get('textOnFormElementBackground')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80rem;
  padding: 8.2rem 2.5rem;
  position: relative;
`;

const ModalHeader = styled.h3`
  font-family: ${({ theme }) => theme.get('primaryFont')};
  font-size: ${typeScale.get('header3')};
  font-weight: 400;
  text-align: center;
`;

const ModalParagraph = styled.p`
  font-family: ${({ theme }) => theme.get('primaryFont')};
  font-size: ${typeScale.get('paragraph')};
  font-weight: 400;
  text-align: center;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.get('primaryColor')};
  cursor: pointer;
  height: 4.1rem;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 1.2rem;
  top: 1.2rem;
  width: 4.1rem;
`;

const SignUpIllustration = styled.img`
  margin-bottom: 1.3rem;
  width: 36.3rem;
`;

export const SignUpModal = ({ isShowing, setShowing }) => {
  const transition = useTransition(isShowing, null, {
    from: { opacity: '0', transform: 'translateY(-50%)' },
    enter: { opacity: '1', transform: 'translateY(0)' },
    leave: { opacity: '0', transform: 'translateY(-50%)' },
  });

  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <ModalWrapper as={animated.div} key={key} style={props}>
              <SignUpIllustration
                src={signUpIllustration}
                alt="Sign up today!"
                aria-hidden="true"
              />
              <ModalHeader>Sign up today!</ModalHeader>
              <ModalParagraph>
                By creating an account, you will get access to exclusive
                content.
              </ModalParagraph>
              <PrimaryButton>Submit</PrimaryButton>
              <ModalCloseButton
                aria-label="Close modal"
                onClick={() => setShowing(false)}
              >
                <IconClose />
              </ModalCloseButton>
            </ModalWrapper>
          )
      )}
    </React.Fragment>
  );
};

SignUpModal.propTypes = {
  /** Flag to indicate if modal should be rendered or not */
  isShowing: PropTypes.bool,
  /** Updates visibility flag */
  setShowing: PropTypes.func.isRequired,
};
