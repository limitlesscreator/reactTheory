export const putToTemplate = (WrapperComponent) => {
    return (props) => {
        return (
            < >
                <header>Logo, login</header>
                <main><WrapperComponent {...props}/></main>
                <footer>FOOTER</footer>
                <WrapperComponent/>
            </>
        )
    }
};
