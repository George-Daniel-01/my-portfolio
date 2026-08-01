import { SignIn } from "@clerk/nextjs";
import { clerkAuthPageElements } from "@/lib/clerkAppearance";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0b040c] px-4 pt-[100px] pb-20">
      <div className="w-full max-w-md">
        <h1 className="font-clashbold text-2xl md:text-3xl text-white text-center mb-8">
          Welcome back<span className="text-[#6f1cd7]">.</span>
        </h1>
        <SignIn
          fallbackRedirectUrl="/"
          appearance={{ elements: clerkAuthPageElements }}
        />
      </div>
    </main>
  );
}
