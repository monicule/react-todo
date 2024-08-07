

function App() {
    return (
        <main>
        <h1>Todo</h1>
        <form>
            <input type="text" value=""/>
            <input type="color" />
            <button type="submit">Create task</button>
        </form>
        <div className="list-actions">
        <p className='title'>Rikiavimas:</p>
                <button className='active' type="button">Laikas 0-9</button>
                <button type="button">Laikas 9-0</button>
                <button type="button">Spalva A-Z</button>
                <button type="button">Spalva Z-A</button>
                <button type="button">Pavadinmas A-Z</button>
                <button type="button">Pavadinmas Z-A</button>
            </div>
        </main>
       
    );
}

export default App;