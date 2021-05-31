import React from 'react';
import { StyledStartButton } from './styles/StyledButton';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
)

export default StartButton;
// the callback function so the startbutton works