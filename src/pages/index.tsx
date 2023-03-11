import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Index</h1>
            <div>
                <Link href="/test" data-cursor-text="Test">
                    Test
                </Link>
            </div>

            <div>
                <Link href="/test" data-cursor-text="Test 2">
                    Test
                </Link>
            </div>
        </>
    );
}
