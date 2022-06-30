export const Form = (props) => {
    
    const {children, onSubmit} = props;

    return (
        <>
        <form onSubmit={onSubmit}>
         {children}
        </form>
        </>
    )
}