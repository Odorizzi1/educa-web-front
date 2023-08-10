import React, { FunctionComponent } from "react";
import Button from '@mui/material/Button';

interface buttonProps {
    children: string,
    variant: "text" | "outlined" | "contained",
    onClick?: (e?: any) => void;
}

const CustomButton: FunctionComponent<buttonProps> = (props) => {
    return (
        <Button
            variant={props.variant}
            onClick={props.onClick}
            style={{ backgroundColor: "#4F3C8E", color: "#FFFFFF" }}
        >
            {props.children}
        </Button>
    )
}
export default CustomButton;