"use client";
import { RiAddCircleFill } from "react-icons/ri";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import WorkSpaceAvatar from "@/features/workspaces/components/workspace-avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const WorkspaceSwitcher = () => {
  const { data } = useGetWorkspaces();
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs text-neutral-500 uppercase">Workspaces</p>
        <RiAddCircleFill className="text-neutral-500 size-5 cursor-pointer hover:opacity-75 transition" />
      </div>
      <Select>
        <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
          <SelectValue placeholder="No workspace selected" />
        </SelectTrigger>
        <SelectContent>
          {data?.documents?.map((workspace) => (
            <SelectItem key={workspace?.$id} value={workspace?.$id}>
              <div className="flex justify-start items-center gap-3 font-medium">
                <WorkSpaceAvatar
                  name={workspace?.name}
                  image={workspace?.imageurl}
                />

                <span className="truncate">{workspace?.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default WorkspaceSwitcher;
