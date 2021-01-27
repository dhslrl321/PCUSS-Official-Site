import React from 'react';
import * as S from './styles';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

const CircleCard = ({ data, isVisible }) => {
  const { label, description , src } = data;

  return (
    <S.Container>
      <S.PictureColumn>
        <Image src={src} />
      </S.PictureColumn>
      <S.LabelColumn>
        <Label styleType="SecondaryLabel" size="1.2">{label}</Label>
      </S.LabelColumn>
      <S.DescColumn isVisible={isVisible}>
        <Label styleType="SecondaryDescription" size="0.7">{description}</Label>
      </S.DescColumn>
    </S.Container>
  );
};

export default CircleCard;

CircleCard.defaultProps = {
  isVisible: false,
};