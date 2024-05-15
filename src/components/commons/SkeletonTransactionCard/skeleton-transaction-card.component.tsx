import { SkeletonComponent } from "@/components/commons/Skeleton/skeleton.component";

export const SkeletonTransactionCard: React.FC<{ isLoading: boolean }> = ({
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="w-full flex flex-col">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="w-full" key={index}>
            <SkeletonComponent
              key={index}
              height={66}
              width="100%"
              baseColor="#323238"
              borderRadius={6}
              highlightColor="#29292E"
            />
          </div>
        ))}
      </div>
    );
  }
};
