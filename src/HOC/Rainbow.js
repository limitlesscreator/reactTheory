export const Rainbow = (WrapperComponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow']
    const randomColour = colours[Math.floor(Math.random() * (colours.length - 1))]
    console.log(randomColour)
    return (props) => {
        return (
            <div style={{
                color: `${randomColour}`,
                fontSize: '40px',
                textTransform: 'UpperCase',
                fontFamily: 'Sans-Serif'
            }}>
                <WrapperComponent {...props}/>
            </div>
        )
    }
};


