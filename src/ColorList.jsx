function ColorList({colors}) {
    const lis = colors.map((color) =><li>{color}</li>)
    return <div>
        <p>Color list</p>
        <ul>
            {lis}
        </ul>
    </div>
};

export default ColorList;