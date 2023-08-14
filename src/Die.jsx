function Die(numSides) {
    const roll = Math.floor(Math.random() * 6) + 1
    return <p>Die roll {roll}</p>
};
export default Die;