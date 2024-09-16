export default function UserInput (){
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >Initial Investment</label>
                    <input type="number" required />
                </p>
                <p>
                    <label >Annual Investment</label>
                    <input type="number" required />
                </p>
                <p>
                    <label >Expected Investment</label>
                    <input type="number" required />
                </p>
                <p>
                    <label > Duration </label>
                    <input type="number" required />
                </p>
            </div>
        </section>
    );
} 