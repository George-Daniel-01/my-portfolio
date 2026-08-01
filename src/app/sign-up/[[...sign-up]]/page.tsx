import { SignUp } from "@clerk/nextjs";
import { clerkAuthPageElements } from "@/lib/clerkAppearance";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0b040c] px-4 pt-[100px] pb-20">
      <div className="w-full max-w-md">
        <h1 className="font-clashbold text-2xl md:text-3xl text-white text-center mb-8">
          Create your account<span className="text-[#6f1cd7]">.</span>
        </h1>
        <SignUp
          fallbackRedirectUrl="/"
          appearance={{ elements: clerkAuthPageElements }}
        />
      </div>
    </main>
  );
}
