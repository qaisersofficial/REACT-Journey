export default function InputField ({ label }){
    return (
        <p>
            <label >{label}</label>
            <input type="number" required />
        </p>
    );
}