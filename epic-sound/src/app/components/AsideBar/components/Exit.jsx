import Link from "next/link";
import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";

function Exit() {
  return (
    <div className="mb-5">
      <div className="flex justify-center items-center">
        <button>
          <Link href={"#"}>
            <RiLogoutBoxLine className="hover:text-[#f88ea0]" />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Exit;
