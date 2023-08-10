import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import CardMedia from "@mui/material/CardMedia";
import CustomButton from "../Button/Button";
interface cardSelectorProps {
    img: string,
    label: string,
    onClick?: (e?: any) => void;
    subtitle: string,
}

const CardSelector: FunctionComponent<cardSelectorProps> = ({ img, label, onClick, subtitle }) => {
    return (
        <Box
            width="307px"
            height="468px"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            flexDirection="column"
            border="1px solid #E0E0E0"
            borderRadius="4px">
            <Box>
                <Box bgcolor="#EBEBEB">
                    <CardMedia
                        component="img"
                        alt="Imagem"
                        image={img}
                    />
                </Box>
            </Box>
            <Box>
                <Box color={"black"}>
                    {label}
                </Box>
                <Box color="#000000">
                    {subtitle}
                </Box>
            </Box>
            <CustomButton
                variant="contained"
                onClick={onClick}
            >
                Cadastrar
            </CustomButton>
        </Box>
    )
}
export default CardSelector;