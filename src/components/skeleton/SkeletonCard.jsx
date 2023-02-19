import React from "react";
import Skeleton from "react-loading-skeleton";


const SkeletonCard = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div
        className="card-skeleton key={i}
    "
      >
        <div className="list-skeleton">
          <div className="skeleton-img">
            <Skeleton width={120} height={140} />
          </div>

          <Skeleton width={160} height={20} />

          <div className="skeleton-marque">
            <Skeleton width={70} height={16} />
          </div>

          <Skeleton height={26} width={70} />
        </div>
      </div>
    ));
};

export default SkeletonCard;
