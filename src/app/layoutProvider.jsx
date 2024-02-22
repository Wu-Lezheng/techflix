'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/sidebar/Sidebar';
import TopSection from '@/components/top-section/TopSection';
import Footer from '@/components/footer/Footer';

export const LayoutProvider = ({ children }) => {

    const pathname = usePathname();
    const shouldRender = pathname !== "/login";

    return (
        <>
            {shouldRender && <Sidebar />}
            {shouldRender && <TopSection />}
            {children}
            {shouldRender && <Footer />}
        </>
    )
};