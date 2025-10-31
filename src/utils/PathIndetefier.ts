import { useLocation } from "react-router-dom";

export interface PathItem {
    label: string;
    path?: string;
    isActive?: boolean
}

export const usePathIndetefier = () => {
    const location = useLocation();

    const getPageName = (pathname: string): string => {
        const path = pathname.replace('/', '');

        if (path === '') return 'Discover';
        if (path === 'search') return 'Search';

        return (
            path.split('-').map(word => word.charAt(0).toUpperCase + word.slice(1)).join(' ')
        )
    }

    const currentPageName = getPageName(location.pathname);

    let pathIndetefier: PathItem[] = [
        { label: 'Discover', path: '/' }
    ]

    if (currentPageName !== 'Discover') {
        pathIndetefier = [
            { label: 'Discover', path: '/' },
            { label: currentPageName, isActive: true }
        ]
    }

    return pathIndetefier;
}