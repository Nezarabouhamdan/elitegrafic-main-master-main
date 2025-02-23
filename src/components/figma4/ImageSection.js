import styled from "styled-components";

export const ImageSection = () => {
  return (
    <StyledImageSection>
      <TopImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee56b6848a5668fe4c1e75c526f9ae88908da749"
        alt="Modern interior design showcase featuring contemporary living space"
        loading="lazy"
      />
      <BorderBox aria-hidden="true" />
      <BottomImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/83d057c657e643f783b5365240986c54a25d86a4"
        alt="Interior design portfolio highlighting luxurious room designs"
        loading="lazy"
      />
    </StyledImageSection>
  );
};

const StyledImageSection = styled.section`
  position: relative;
  @media (max-width: 991px) {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TopImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 4px;
  object-fit: cover;
  margin-left: 126px;
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    position: static;
  }
  @media (max-width: 640px) {
    margin-left: -1px;
  }
`;

const BorderBox = styled.div`
  width: 151px;
  height: 140px;
  border: 2px solid #66a109;
  border-radius: 4px;
  position: absolute;
  left: -57px;
  top: 300px;
  @media (max-width: 991px) {
    display: none;
  }
`;

const BottomImage = styled.img`
margin-top:90px;
  width: 585px;
  height: 301px;
  border-radius: 4px;
  object-fit: cover;
  position: absolute;
  left: -23px;
  top: 230px;
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    position: static;
  }
`;
