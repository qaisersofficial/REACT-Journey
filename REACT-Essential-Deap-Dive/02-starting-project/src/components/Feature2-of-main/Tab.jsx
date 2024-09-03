export default function Tab ({children, buttons, ButtonContainer = "menu"}) {
    // const ButtonContainer = buttonsContainer ;
    return <>
        <ButtonContainer>{buttons}</ButtonContainer>
        {children}
    </>
}