import ProfileHeader from "@/components/shared/ProfileHeader";
import ThreadsTab from "@/components/shared/ThreadsTab";
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser();
  const { id } = await params;

  if (!user) return null;

  const userInfo = await fetchUser(id);

  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <section>
      <h1 className="head-text mb-10">Communities</h1>
    </section>
  );
};

export default Page;
