export default function Tab ({children, buttons, buttonsContainer}) {
    const ButtonContainer = buttonsContainer ;
    return <>
        <ButtonContainer>{buttons}</ButtonContainer>
        {children}
    </>
}