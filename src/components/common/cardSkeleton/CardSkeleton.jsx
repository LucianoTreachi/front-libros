import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <Skeleton
        key={index}
        style={{
          aspectRatio: "640 / 900",
        }}
      />
    ));
}
