
// Junk  

//  Checkbox
// http://doodlenerd.com/html-control/css-checkbox-generator

// Radio
// http://doodlenerd.com/html-control/css-radio-button-generator

.control {
  font-family: arial;
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 5px;
  padding-top: 3px;
  cursor: pointer;
  font-size: 16px;
}
  .control input {
      position: absolute;
      z-index: -1;
      opacity: 0;
  }
.control_indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #ffffff;
  border: 1px solid #fe7007;
  border-radius: 3px;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
  background: #e2c5ac;
}

.control input:checked ~ .control_indicator {
  background: #f48815;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
  background: #0e6647d;
}
.control input:disabled ~ .control_indicator {
  background: #e6e6e6;
  opacity: 0.6;
  pointer-events: none;
}
.control_indicator:after {
  box-sizing: unset;
  content: '';
  position: absolute;
  display: none;
}
.control input:checked ~ .control_indicator:after {
  display: block;
}
.control-checkbox .control_indicator:after {
  left: 8px;
  top: 4px;
  width: 3px;
  height: 8px;
  border: solid #ffffff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.control-checkbox input:disabled ~ .control_indicator:after {
  border-color: #7b7b7b;
}
.control-checkbox .control_indicator::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 4.5rem;
  height: 4.5rem;
  margin-left: -1.3rem;
  margin-top: -1.3rem;
  background: #2aa1c0;
  border-radius: 3rem;
  opacity: 0.6;
  z-index: 99999;
  transform: scale(0);
}
@keyframes s-ripple {
  0% {
      transform: scale(0);
  }
  20% {
      transform: scale(1);
  }
  100% {
      opacity: 0;
      transform: scale(1);
  }
}
@keyframes s-ripple-dup {
 0% {
     transform: scale(0);
  }
 30% {
      transform: scale(1);
  }
  60% {
      transform: scale(1);
  }
  100% {
      opacity: 0;
      transform: scale(1);
  }
}
.control-checkbox input + .control_indicator::before {
  animation: s-ripple 250ms ease-out;
}
.control-checkbox input:checked + .control_indicator::before {
  animation-name: s-ripple-dup;
}