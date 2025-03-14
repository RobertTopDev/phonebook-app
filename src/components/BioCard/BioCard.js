import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import {
  CardContentStyled,
  CardStyled,
  CardText,
  CardTitle,
  LinkedinIcon,
  IconsWrapper,
  LinkIcon,
  GithubIcon,
  DribbleIcon,
  TwitterIcon,
  CardContentWrapper,
  AvatarContainer,
  AvatarTextContainer,
} from "./BioCard.styled";

export default function BioCard() {
  return (
    <CardStyled>
      <CardContentStyled>
        <CardContentWrapper>
          <AvatarContainer>
            <Avatar
              src={`${process.env.PUBLIC_URL}/images/avatar.png`}
              sx={{ "--Avatar-size": "4rem" }}
            />
          </AvatarContainer>
          <AvatarTextContainer>
            <CardTitle>Robert Tanel Riegler</CardTitle>
            <CardText>
              Hey there! I'm a web developer. Currently, I'm sharpening my
              coding skills in a comprehensive full-stack bootcamp and pursuing
              a degree in computer science for software engineering.
            </CardText>
          </AvatarTextContainer>
        </CardContentWrapper>
        <IconsWrapper>
          <LinkIcon
            href="https://www.linkedin.com/in/robert-t-riegler/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </LinkIcon>
          <LinkIcon
            href="https://github.com/RobertTopDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </LinkIcon>
          <LinkIcon
            href="https://dribbble.com/RobertTopDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DribbleIcon />
          </LinkIcon>
          <LinkIcon
            href="https://twitter.com/robertriegler29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </LinkIcon>
        </IconsWrapper>
      </CardContentStyled>
    </CardStyled>
  );
}
