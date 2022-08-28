
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://cdn.wallpapersafari.com/95/98/3vRqDI.jpg) center/78% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 120px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOGGER</Heading>
            <SubHeading>Blog-App by Pratik Ranjan</SubHeading>
        </Image>
    )
}

export default Banner;