import React, { memo } from "react";
import { CarouselComponent } from "@/components/CarouselComponent";

const MobileLanding = memo(() => {
  return (
    <div>
      <div>Navbar Placeholder</div>
      <div>Search Bar Placeholder</div>
      <CarouselComponent />
    </div>
  );
});

MobileLanding.displayName = "MobileLanding";

// export const MemoizedMobileLanding = React.memo(MobileLanding);
export default MobileLanding;
