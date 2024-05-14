import { SkeletonComponent } from "@/components/commons/Skeleton/skeleton.component";

export const Skeleton: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="mt-16 ml-10">
      <SkeletonComponent
        height={500}
        width={704}
        baseColor="#323238"
        borderRadius={16}
        highlightColor="#29292E"
      />
    </div>
  );
};
