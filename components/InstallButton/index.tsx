import * as React from "react";
import { useAddToHomescreenPrompt } from "../../hooks/useAddToHomescreenPrompt";

import Icon from '../../assets/images/download-icon.png';
import DarkIcon from '../../assets/images/download-icon-dark.png';

export default function ExampleComponent() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const hide = () => setVisibleState(false);

  React.useEffect(
    () => {
      if (prompt) {
        setVisibleState(true);
      }
    },
    [prompt]
  );

  if (!isVisible) {
    return null;
  }

  return (
    <button onClick={promptToInstall} className="install-button">
      <img src={Icon} className='light-icon' />
      <img src={DarkIcon} className='dark-icon' />
      <span>instalar</span>
    </button>
  );
}