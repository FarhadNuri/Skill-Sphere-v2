'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const UpdateProfileForm = ({ initialName, initialImage }) => {
  const router = useRouter();
  const [name, setName] = useState(initialName || "");
  const [image, setImage] = useState(initialImage || "");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSaving(true);

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setIsSaving(false);

    if (error) {
      toast.error(error.message || "Update failed.");
      return;
    }

    toast.success("Profile updated!");
    router.push("/my-profile");
  };

  return (
    <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="text-sm font-semibold text-slate-700">
        Name
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
          placeholder="Your name"
        />
      </label>
      <label className="text-sm font-semibold text-slate-700">
        Image URL
        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
          placeholder="https://"
        />
      </label>
      <button
        type="submit"
        disabled={isSaving}
        className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-slate-950 disabled:opacity-60"
      >
        {isSaving ? "Updating..." : "Update Information"}
      </button>
    </form>
  );
};

export default UpdateProfileForm;
