import { Link } from "react-router-dom"
import { ButtonUI, HeaderUI, LinksUI, Logo, OutsideContainerUI } from "./Header.styled"

export const Header = ({bgColor = "white"}:{bgColor?:string}) => {
    return (
        <OutsideContainerUI bgColor={bgColor}>
            <HeaderUI style={{backgroundColor: bgColor}}>
                <Link to="/"><Logo /></Link>
                <LinksUI>
                    <Link to="">Features</Link>
                    <Link to="">Contacts</Link>
                </LinksUI>
                <Link to="/pay"><ButtonUI>Get Yogather</ButtonUI></Link>
            </HeaderUI>
        </OutsideContainerUI>
    )
}