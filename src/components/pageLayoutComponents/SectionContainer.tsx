import { ReactNode } from "react"
import { InsideContainerUI, OutsideContainerUI } from "./SectionContainer.styled"
import { white } from "../../utils/colors";

export const SectionContainer = ({
    children,
    bgColor = white,
    styles
}:{
    children?: string | ReactNode;
    bgColor?: string;
    styles?: React.CSSProperties;
}) => {
    return (<OutsideContainerUI bgColor={bgColor} style={styles}>
        <InsideContainerUI>
            {children}
        </InsideContainerUI>
    </OutsideContainerUI>)
}