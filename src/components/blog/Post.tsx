import LatexRenderer from "./LatexRenderer";
import PrismLoader from "./PrismLoader";

export default function Post({
  html,
}: { html: string }) {
  return (
    <div>
      <PrismLoader />
      <LatexRenderer html={html} />
    </div>
  )
}