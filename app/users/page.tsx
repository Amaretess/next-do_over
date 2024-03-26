import GetUsers from "./GetUsers";

const page = () => {
    return (
        <>
            <div className="header">
                <h1 className="heading" >
                    Welcome to the Users page!
                </h1>
            </div>
            <GetUsers />
        </>
    )

}

export default page;
