import React from 'react'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
} from './DemoElements';

const DemoSection = ({id, topLine, headline, description, img, alt, nextMember}) => {
    console.log('nextMember:')
    console.log(nextMember)
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading>{headline}</Heading>
                                <Subtitle>{description}</Subtitle>
                            </TextWrapper>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DemoSection
