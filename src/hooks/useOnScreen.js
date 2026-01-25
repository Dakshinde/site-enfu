import { useState, useEffect } from 'react';

export const useOnScreen = (ref, rootMargin = '0px', threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Optional: Stop observing once it's visible to save resources
                observer.unobserve(ref.current);
            }
        }, { rootMargin, threshold });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, rootMargin, threshold]);

    return isVisible;
};