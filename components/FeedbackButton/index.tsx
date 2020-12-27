import React, { useCallback } from 'react';

import Icon from '../../assets/images/review.png';

const FeedbackButton: React.FC = () => {
  const goToFormsInput = useCallback(() => {
    window.open('https://forms.gle/hxo619chupPAGEFP8', '_blank')
  },[])

  return (
    <button type="button" className="feedback-button" onClick={goToFormsInput}>
      <img src={Icon} />
      <span>dar feedback</span>
    </button>
  );
}

export default FeedbackButton;