export default function InputField ({ label, value, onChange }){
    return (
        // Wrapping the input field and label inside a paragraph tag
        <p>
            <label >{label}</label>
             {/* Input field of type 'number', required to fill, with controlled value and change handler */}
            <input type="number" required  value={value} onChange={onChange}  />
        </p>
    );
}