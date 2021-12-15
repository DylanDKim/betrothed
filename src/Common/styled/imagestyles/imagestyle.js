import styled from 'styled-components';

const OnboardingImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const OnboardingImageFit = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

export { OnboardingImage, OnboardingImageFit };
