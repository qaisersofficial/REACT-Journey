import InputField  from "./InputField";
export default function UserInput (){
    return (
        <section id="user-input">
            <div className="input-group">
        <InputField label="Initial Investment" />
        <InputField label="Annual Investment" />
        <InputField label="Expected Investment" />
        <InputField label="Duration" />
            </div>
        </section>
    );
} 