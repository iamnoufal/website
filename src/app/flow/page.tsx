import Flow from "@/components/Flow";
import PortfolioLayout from "@/components/PortfolioLayout";
import { getFlow } from "@/utils/strapi";
import { Fragment } from "react";

export default async function FlowPage() {
  const data = await getFlow();
  return (
    <Fragment>
      <PortfolioLayout
        title="Noufal's Blog"
        subtitle="Penning down my thoughts in 0s and 1s"
      />
      <Flow data={data} />
    </Fragment>
  )
}