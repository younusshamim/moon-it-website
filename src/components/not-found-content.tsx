import Link from "next/link";
import PrimaryButton from "./primary-button";

const NotFoundContent = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold  mb-2">Page Not Found</h2>
      <p className="text-lg  mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link href="/">
        <PrimaryButton>Go to Homepage</PrimaryButton>
      </Link>
    </div>
  );
};

export default NotFoundContent;
