'use client';
import type { Photo } from "@/models/Images"
import Image from "next/image"  
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import { Transition } from "style-components";

type Props = {
    photo: Photo
}

const ImgContainer = styled(Box)(({ theme }) => ({
    width: 255,
    justifyContent: 'center',
}));

const StyledLink = styled(Link)(({ theme }) => ({
    display: 'grid',
    placeContent: 'center',
}));

const RoundedDiv = styled(Box)(({ theme }) => ({
    borderRadius: '5%',
    overflow: 'hidden',
    transition: '0.4s',
    '&:hover': {
        opacity: 1,
        filter: 'grayscale(0)',
        transition: '0.4s',
    },
}));

const GrayscaleDiv = styled(Box)(({ theme }) => ({
    filter: 'grayscale(1)',
    opacity: 0.8,
    border: '2px solid #fff',
    borderRadius: '5%',
    margin: 3,
    transition: '0.4s',
    '&:hover': {
        opacity: 1,
        filter: 'grayscale(0)',
        transition: '0.4s',
    },
}));

const StyledImage = styled(Image)(({ theme }) => ({
    opacity: 0.8,
    transition: '0.4s',
    borderRadius: '5%',
    '&:hover': {
        opacity: 1.5,
        transition: '0.4s',
    },
}));

export default function ImgContainerComponent({photo}: Props) {

    const widthHeightRatio = photo.height / photo.width
    const galleryHeight = Math.ceil(250 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight/10) + 1

    return (
        <ImgContainer style={{ gridRow: `span ${photoSpans}`}}>
            <StyledLink href={photo.url} target="_blank">
                <RoundedDiv>
                    <GrayscaleDiv>
                        <StyledImage
                            src={photo.src.large}
                            alt={photo.alt}
                            width={245}
                            sizes="248px"
                            placeholder="blur"
                            blurDataURL={photo.blurredDataUrl}
                            height={galleryHeight}
                        />
                    </GrayscaleDiv>
                </RoundedDiv>
            </StyledLink>
        </ImgContainer>
    )
}