import { useEffect, useState } from 'react'

export default function useWindowWidth() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        screenWidth,
        isMobile: screenWidth <= 767,
        isTablet: screenWidth >= 768 && screenWidth <= 1023,
        isDesktop: screenWidth >= 1024,
    };
}
