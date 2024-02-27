import { Link } from "react-router-dom"
import { ButtonUI, HeaderUI, LinksUI, Logo, OutsideContainerUI } from "./Header.styled"

export const Header = () => {
    return (
        <OutsideContainerUI bgColor="white">
            <HeaderUI style={{backgroundColor: "white"}}>
                <Link to="/"><Logo /></Link>
                <LinksUI>
                    <Link to="">Features</Link>
                    <Link to="">Contacts</Link>
                </LinksUI>
                <ButtonUI>Get Yogather</ButtonUI>
            </HeaderUI>
        </OutsideContainerUI>
    )
}