'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/sidebar/Sidebar';
import TopSection from '@/components/top-section/TopSection';

export const LayoutProvider = ({ children }) => {

    const pathname = usePathname();
    const shouldRender = pathname !== "/login" && pathname !== "/";

    return (
        <>
            {shouldRender && <Sidebar />}
            {shouldRender && <TopSection />}
            {children}
        </>
    )
};