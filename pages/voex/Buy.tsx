import { BaseLayout } from "@ui";
import { BuyNftHeader,BuyNftDetail,BuyExploreCollection } from "@voex";

const Buy = () => {
  return (
    <BaseLayout>
     <BuyNftHeader />
     <BuyNftDetail/>
     <BuyExploreCollection/>
    </BaseLayout>
  );
};
export default Buy;
