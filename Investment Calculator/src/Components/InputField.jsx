export default function InputField ({ label, value, onChange }){
    return (
        <p>
            <label >{label}</label>
            <input type="number" required  value={value} onChange={onChange}  />
        </p>
    );
}