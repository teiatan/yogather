import { ButtonUI } from './Button.styled';
export const Button = ({text}:{text?:string}) => {
    return (
        <ButtonUI>
            {text}
        </ButtonUI>
    )
}