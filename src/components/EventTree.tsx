//<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
import React, { forwardRef } from 'react';
import EventTreeImage from './EventTreeImage';

export default forwardRef<SVGCircleElement>((_, ref) => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" viewBox="0 0 2048 1474" enableBackground="new 0 0 2048 1474">
		<EventTreeImage />
		<circle id="anchor-1" cx="240" cy="986" r="10" fill="white" opacity="100"/>
		<circle id="anchor-2" cx="540" cy="986" r="10" fill="white" opacity="100"/>
		<circle id="anchor-3" cx="840" cy="986" r="10" fill="white" opacity="100"/>
		<circle id="anchor-4" cx="1140" cy="986" r="10" fill="white" opacity="100"/>
		<circle id="anchor-5" cx="1440" cy="986" r="10" fill="white" opacity="100"/>
		<circle ref={ref} id="anchor-6" cx="1740" cy="986" r="10" fill="white" opacity="100"/>
	</svg>
));