import Flow from "@/components/Flow";
import PortfolioLayout from "@/components/PortfolioLayout";
import { Fragment } from "react";

export default function FlowPage() {
  return (
    <Fragment>
      <PortfolioLayout
        title="Noufal's Blog"
        subtitle="Penning down my thoughts in 0s and 1s"
      />
      <Flow />
    </Fragment>
  )
}