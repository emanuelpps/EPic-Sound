import React from "react";
import profilePicture from "../../../../../public/assets/images/photo-1570295999919-56ceb5ecca61.avif";
import Image from "next/image";
import { GoGear } from "react-icons/go";
import Link from "next/link";

function ProfileAvatar() {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div
        id="avatar-container"
        className="flex felx-col justify-center items-center"
      >
        <button>
          <Link href={"#"}>
            <Image
              src={profilePicture}
              width={40}
              height={50}
              alt="profile"
              className="rounded-xl hover:opacity-50"
            />
          </Link>
        </button>
      </div>
      <div
        id="config-container"
        className="flex felx-col justify-center items-center"
      >
        <button>
          <Link href={"#"}>
            <GoGear className="hover:text-[#f88ea0] text-xl" />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ProfileAvatar;
