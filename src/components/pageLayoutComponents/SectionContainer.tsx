import { ReactNode } from "react"
import { InsideContainerUI, OutsideContainerUI } from "./SectionContainer.styled"
import { white } from "../../utils/colors";

export const SectionContainer = ({
    children,
    backgroundColor = white
}:{
    children?: string | ReactNode;
    backgroundColor?: string;
}) => {
    return (<OutsideContainerUI bgColor={backgroundColor}>
        <InsideContainerUI>
            {children}
        </InsideContainerUI>
    </OutsideContainerUI>)
}