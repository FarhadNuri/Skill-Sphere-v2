import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import UpdateProfileForm from "@/components/UpdateProfileForm";

const UpdateProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  if (!user) {
    redirect("/auth/signin?callback=/my-profile/update");
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
        Update Information
      </p>
      <h1 className="font-display text-4xl text-slate-900">
        Refresh your profile
      </h1>
      <div className="glass-panel mt-8 rounded-3xl p-8">
        <UpdateProfileForm
          initialName={user.name || ""}
          initialImage={user.image || ""}
        />
      </div>
    </div>
  );
};

export default UpdateProfilePage;
