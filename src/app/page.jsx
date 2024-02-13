import HomeGallery from "@/components/home-gallery/HomeGallery";
import RecentlyViewed from "@/components/recently-viewed/RecentlyViewed";

import 'primeicons/primeicons.css';

export default function Home() {
  return (
    <>
      <HomeGallery></HomeGallery>
      <RecentlyViewed></RecentlyViewed>
    </>
  );
}
