import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <SignUp />
      </div>
    </div>
  );
}