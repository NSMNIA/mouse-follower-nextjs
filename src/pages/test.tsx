import Link from "next/link";

type Props = {};

const Test = (props: Props) => {
    return (
        <div>
            <h1>Test</h1>
            <Link
                href="/"
                style={{
                    marginLeft: "200px",
                }}
                data-cursor-img="https://images.unsplash.com/photo-1678517079016-0da41ca7a623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            >
                Index
            </Link>
        </div>
    );
};

export default Test;
