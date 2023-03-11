import gsap from "gsap";
import MouseFollower from "mouse-follower";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
MouseFollower.registerGSAP(gsap);

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const CURSOR_NAME = "rd-cursor";

    useEffect(() => {
        const mouseFollower = new MouseFollower({
            container: document.body,
            el: null,
            className: CURSOR_NAME,
            innerClassName: `${CURSOR_NAME}-inner`,
            textClassName: `${CURSOR_NAME}-text`,
            mediaClassName: `${CURSOR_NAME}-media`,
            mediaBoxClassName: `${CURSOR_NAME}-media-box`,
            overwrite: true,
        });

        const removeCursorProps = (e: MouseEvent) => {
            let containsData = false;
            const target = e.target as HTMLElement;
            if (target.dataset) Object.keys(target.dataset).forEach(key => (key.includes("cursor") ? (containsData = true) : null));
            if (!containsData) return;
            const cursor = document.querySelector(`.${CURSOR_NAME}`);
            console.log(cursor?.classList);
            if (!cursor?.classList) return;
            let cursorClasses = Array.from(cursor?.classList);
            cursorClasses = cursorClasses.filter(className => !className.includes("cursor"));
            cursorClasses.forEach(className => cursor?.classList.remove(className));
        };
        window.addEventListener("click", removeCursorProps);

        return () => {
            mouseFollower.destroy();
            window.removeEventListener("click", removeCursorProps);
        };
    }, []);
    return <main className={inter.className}>{children}</main>;
};

export default Layout;
